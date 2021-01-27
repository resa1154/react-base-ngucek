import React, { useState, useReducer } from "react";
import {
  Container,
  Menu,
  Button,
  Image,
  Form,
  Grid,
  Modal,
  TextArea,
} from "semantic-ui-react";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../../../app/store";
import { Link } from "react-router-dom";
import "../containers/Mitra.css";
import ReactDatePicker from "react-datepicker";
import MitraForm from "../components/DataMitraForm";
import {createDataMitra} from "../mitra.reducer";
import {MitraModel} from "../models";


const MitraCreate = () =>{
  const dispatch = useDispatch();
    const DataMitraState = useSelector((state: RootState) => state.dataTest);

    const onSubmit = (
      name: string,
      email: string,
      no_nik:string,
      npwp:string,
      companyName:string,
      shopName:string,
      shopEmail:string,
      phoneNumber:string,
      province:string,
      District:string,
      subDistrict:string,
      city:string,
      postal_code:string
    ) => {
      // dispatch(
      //   createDataMitra({
      //     name,
      //     email,
      //     no_nik,
      //     npwp,
      //     companyName,
      //     shopName,
      //     shopEmail,
      //     phoneNumber,
      //     province,
      //     District,
      //     subDistrict,
      //     city,
      //     postal_code
      //   } as MitraModel)
      // );
    };
    
    return(
        <Container fluid>
        <Menu secondary className="menu-header">
          <Menu.Item>
            <h3 className="h3">Business Partner - Request Detail</h3>
          </Menu.Item>
  
          <Menu.Menu position="right">
            <Menu.Item>
              <Button color="teal" as={Link} to="/Mitra">
                Cancel
              </Button>
            </Menu.Item>
          
            <Menu.Item>
              <Button color="teal" as={Link} to="/Mitra">Submit</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      <MitraForm isLoading={DataMitraState.isLoading}
                  onSubmit={onSubmit}/>
    </Container>
    );
}

export default MitraCreate;