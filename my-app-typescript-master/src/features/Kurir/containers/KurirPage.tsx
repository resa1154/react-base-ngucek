import React, { ChangeEvent, useState } from "react";
import { Container, Menu, Button, Grid, Table, Form, InputOnChangeData } from "semantic-ui-react";
import { Link } from "react-router-dom";
import KurirTable from "../components/DataKurirTable";
import "../containers/Kurir.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setFilter } from "../kurir.reducer";

const KurirPage = ({ isLoading = false, ...props }) => {
  const optionStatus = [
    { key: "aktif", text: "Aktif", value: "aktif"},
    { key: "nonAktif", text: "Non Aktif", value: "nonAktif" },
  ];

  //initial State
  const [name, setName] = useState("");
  const [username,setUsername] = useState("");
  const [phone,setPhone] = useState("");
  const [status,setStatus] = useState("");

  const onChangeName = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) =>{
    setName(value);
    console.log(value);
  }

  const onChangeUsername = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) =>{
    setUsername(value);
    console.log(value);
  }

  const onChangePhone = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) =>{
    setPhone(value);
    console.log(value);
  }

  const handleStatusChange = (e: any, data: any) => {
    setStatus(data.value);
    console.log(data.value);
  };

  const KurirFilterState = useSelector((state: RootState) => state.kurir.list);
console.log(KurirFilterState);
const dispatch = useDispatch();

const getFilteredData = (datainput:any) => {
  const datafilter = KurirFilterState ?? [];
  console.log("data filter:"+datafilter)
  const filteredData = datafilter.filter(
    (find:{
      name:{toString: () => string};
      username:{toString:()=> string};
      phoneNumber:{toString:()=> string};
      status:{toString: () => any};
    }) => find.name.toString().toLowerCase() === datainput.name || find.username.toString().toLowerCase() === datainput.username || find.phoneNumber.toString().toLowerCase() === datainput.phone || find.status.toString().toLowerCase() === datainput.status);
  
    return filteredData;
    console.log(filteredData);
  }

const onSubmit = (
  name:string,
  username:string,
  phone:string,
  status:string,
) => {
  // getFilteredData({ownerName, status});
const FormFilterSubmit = getFilteredData({name,username,phone,status});
console.log("ini submit");
console.log(FormFilterSubmit);
console.log("end submit");
dispatch(setFilter(FormFilterSubmit));
};

const resetForm = () =>{
  setName("")
  setUsername("")
  setPhone("")
  setStatus("")
}

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master Data - Kurir</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className="form-content">
        <p className="title-content">Filter</p>
        <Form loading={isLoading} onSubmit={() =>
     onSubmit(
       name, username, phone, status
      )
    }>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
                <Form.Field>
                  <label>Name</label>
                  <Form.Input placeholder="Name" onChange={onChangeName} value={name}/>
                </Form.Field>
                <Form.Field>
                  <label>Username</label>
                  <Form.Input placeholder="Username" onChange={onChangeUsername} value={username}/>
                </Form.Field>
            </Grid.Column>
            <Grid.Column>
                <Form.Field>
                  <label>No. Telepon</label>
                  <Form.Input placeholder="No Telepon" onChange={onChangePhone} value={phone}/>
                </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} className="row-custom">
            <Grid.Column>
                <Form.Group widths={2}>
                <Form.Dropdown
                  label="Status"
                  placeholder="Pilih Status"
                  options={optionStatus}
                  selection
                  onChange={handleStatusChange}
                  value={status}
                  defaultSelectedLabel={status}
                />
                  {/* <Form.Select
                    fluid
                    label="Status"
                    options={optionStatus}
                    placeholder="Aktif"
                  /> */}
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
        <Button color="teal" as={Link} to="/KurirDetail">
          New
        </Button>
        <KurirTable/>
      </div>
    </Container>
  );
};

export default KurirPage;
