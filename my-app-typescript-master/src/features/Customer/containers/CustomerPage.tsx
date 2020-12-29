import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Grid,
  InputOnChangeData,
  Menu,
} from "semantic-ui-react";
import { RootState } from "../../../app/store";
import CustomerTable from "../components/DataCustomerTable";
import { setFilter } from "../customer.reducer";

const CustomerPage = ({ isLoading = false, ...props }) => {
  const options = [
    {
      key: "aktif",
      text: "Aktif",
      value: "aktif",
    },
  ];
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");

  const onChangeName = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setName(value);
    console.log(value);
  };

  const onChangePhone = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setPhoneNumber(value);
    console.log(value);
  };

  const handleStatusChange = (e: any, data: any) => {
    setStatus(data.value);
    console.log(data.value);
  };

  const resetForm = () => {
    setName("");
    setPhoneNumber("");
    setStatus("");
  };

  const CustomerState = useSelector((state:RootState) => state.customer.list);
  console.log(CustomerState);

  const getFilteredData = (datainput:any) => {
    const datafilter = CustomerState?? [];
    console.log("data filter:"+datafilter)
    const filteredData = datafilter.filter(
      (find:{
        firstName:{toString: () => string};
        phoneNumber:{toString:() => string};
        status:{toString: () => string};
      }) => find.firstName.toString().toLowerCase() === datainput.name || find.phoneNumber.toString().toLowerCase() === datainput.phone  || find.status.toString().toLowerCase() === datainput.status);
    
      return filteredData;
      console.log(filteredData);
    }
  
  const onSubmit = (
    name:string,
    phone:string,
    status:string,
  ) => {
    // getFilteredData({ownerName, status});
  const FormFilterSubmit = getFilteredData({name,phone, status});
  console.log("ini submit");
  console.log(FormFilterSubmit);
  console.log("end submit");
  dispatch(setFilter(FormFilterSubmit));

  };

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master Data - Customer</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/">
              Back
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div className="form-content">
        <p className="title-content">Filter</p>
        <Form loading={isLoading} onSubmit={()=> onSubmit(name,phone,status)} >
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Field>
                  <label>Name</label>
                  <Form.Input
                    placeholder="Name"
                    onChange={onChangeName}
                    value={name}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field>
                  <label>No. Telepon</label>
                  <Form.Input
                    placeholder="No Telepon"
                    onChange={onChangePhone}
                    value={phone}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className="row-custom">
              <Grid.Column>
                <Form.Group widths={2}>
                  <Form.Dropdown
                    label="Status"
                    placeholder="Pilih Status"
                    options={options}
                    selection
                    onChange={handleStatusChange}
                    value={status}
                    defaultSelectedLabel={status}
                  />
                </Form.Group>
              </Grid.Column>
              <Grid.Column verticalAlign="bottom">
                <div className="form-btn">
                  <Button onClick={resetForm}>Reset</Button>
                  <Button color="teal">Submit Filter</Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>

      <div className="form-content">
        <Button color="teal" as={Link} to="/CustomerCreate">
          New
        </Button>
        <CustomerTable/>
      </div>
    </Container>
  );
};

export default CustomerPage;
