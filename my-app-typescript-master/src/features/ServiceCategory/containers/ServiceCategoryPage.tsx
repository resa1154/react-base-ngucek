import React, { ChangeEvent, useEffect, useState } from "react";
import {Container, Menu, Button, Grid, Table, Form, Select, InputOnChangeData} from "semantic-ui-react";
import {Link} from "react-router-dom";
import ServiceCategoryTable from "../components/DataServiceCategoryTable";
import "../containers/Service.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getDataServices, setFilter } from "../service.reducer";

const ServiceCategoryPage = ({ isLoading = false, ...props }) =>{
   
  const optionStatus = [
        { key: "request", text: "Request", value: "request" },
        { key: "verified", text: "Verified", value: "verified" },
        { key: "survey", text: "Survey", value: "survey" },
        { key: "approved", text: "Approved", value: "approved" },
        { key: "rejected", text: "Rejected", value: "rejected" },
    ];

    const option = [
      {key:"kilat", text:"Layanan Kilat", value:"kilat"},
      {key:"express", text:"Layanan Express", value:"express"},
      {key:"biasa", text:"Layanan Biasa", value:"biasa"}
  ];

  const [servicename,setServiceName] = useState("");
    const [category,setCategory] = useState("");
    const [status,setStatus] = useState("");

    const onChangeName = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) =>{
      setServiceName(value);
      console.log(value);
    }

    const onCategoryChange = (e:any, data:any) =>{
      setCategory(data.value);
      console.log(data.value);
    }

    const onStatusChange = (e:any, data:any) => {
      setStatus(data.value);
      console.log(data.value);
    }

    const ServicesCategoryState = useSelector((state: RootState) => state.services.list);
    const dispatch = useDispatch();

    console.log(ServicesCategoryState);
    
    const getFilteredData = (datainput:any) => {
      const datafilter = ServicesCategoryState ?? [];

      const filteredData = datafilter.filter(
        (find:{
          categoryname:{toString: () => string};
          headcategory:{toString: () => string};
          status:{toString: () => string};
        }) => find.categoryname.toString().toLowerCase() === datainput.servicename || find.headcategory.toString().toLowerCase() === datainput.category || find.status.toString().toLowerCase() === datainput.status);
      
        return filteredData;
      }
      
      const onSubmit = (
        servicename:string,
        category:string,
        status:string,
      ) => {
      const FormFilterSubmit = getFilteredData({servicename,category, status});
      console.log(FormFilterSubmit);
      dispatch(setFilter(FormFilterSubmit));
      };
      

      const resetForm = () =>{
        setServiceName("")
        setCategory("")
        setStatus("")
      }

    return(
        <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master Data - Service Category</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div className="form-content">
        <p className="title-content">Filter</p>
        <Form loading={isLoading} onSubmit={() => onSubmit(servicename,category, status)}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              
                <Form.Field>
                  <label>Name</label>
                  <Form.Input placeholder="Name" onChange={onChangeName} value={servicename}/>
                </Form.Field>
              
            </Grid.Column>
            <Grid.Column>
              
                <Form.Group>
                <Form.Dropdown className="select-head-category"
                  fluid
                  label="Head Category"
                  options={option}
                  selection
                  placeholder="Auto Complete.."
                  onChange={onCategoryChange}
                  value={category}
                  defaultSelectedLabel={category}
                />
                </Form.Group>
             
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} className="row-custom">
            <Grid.Column>
            
                <Form.Group widths={2}>
                <Form.Dropdown fluid lavel="Status" 
                label="Status"
                  options={optionStatus}
                  selection
                  placeholder="Pilih Status"
                  onChange={onStatusChange}
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
        <Button color="teal" as={Link} to="/ServiceCategoryCreate">
          New
        </Button>
        <ServiceCategoryTable/>
      </div>
   
        </Container>
    );
}

export default ServiceCategoryPage