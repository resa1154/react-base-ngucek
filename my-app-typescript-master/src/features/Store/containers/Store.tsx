import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Form, Grid, InputOnChangeData, Menu } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import DataStoreTable from "../components/DataStoreTable";
import { setFilter } from "../store.reducer";

const Store = ({isLoading = false, ...props}) => {
  const options = [
    {
      key: "aktif",
      text: "Aktif",
      value: "aktif",
    },
  ];

  const dispatch = useDispatch();
  const [storeName, setStoreName] = useState("");
  const [status, setStatus] = useState("");

  const onChangeStore = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
    setStoreName(value);
    console.log(value);
  }

  const handleStatusChange = (e: any, data: any) => {
    setStatus(data.value);
    console.log(data.value);
  };

  const resetForm = () => {
    setStoreName("");
    setStatus("");
  };

  const StoreState = useSelector((state:RootState) => state.store.list);
  console.log(StoreState);

  const getFilteredData = (datainput:any) => {
    const datafilter = StoreState ?? [];
    console.log("data filter:"+datafilter)
    const filteredData = datafilter.filter(
      (find:{
        data:{
          storename:{toString: () => string};
          status:{toString:() => string};
        }
       
      }) => find.data.storename.toString().toLowerCase() === datainput.storeName || find.data.status.toString().toLowerCase() === datainput.status);
    
      return filteredData;
      console.log(filteredData);
    }

    const onSubmit = (
      storeName:string,
      status:string,
    ) => {
      // getFilteredData({ownerName, status});
    const FormFilterSubmit = getFilteredData({storeName, status});
    console.log("ini submit");
    console.log(FormFilterSubmit);
    console.log("end submit");
    dispatch(setFilter(FormFilterSubmit));
  
    };

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Store Setting</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div className="form-content">
        <p className="title-content">Filter</p>
        <Form loading={isLoading} onSubmit={()=> onSubmit(storeName,status)}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Field>
                  <label>Nama Toko</label>
                  <Form.Input placeholder="Nama Toko" value={storeName} onChange={onChangeStore}/>
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Dropdown
                  label="Status"
                  placeholder="Pilih Status"
                  options={options}
                  selection
                  onChange={handleStatusChange}
                  value={status}
                  defaultSelectedLabel={status}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className="row-custom">
              <Grid.Column></Grid.Column>
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
        <Button color="teal" as={Link} to="/StoreSetting">
          New
        </Button>
        <DataStoreTable />
      </div>
    </Container>
  );
};

export default Store;
