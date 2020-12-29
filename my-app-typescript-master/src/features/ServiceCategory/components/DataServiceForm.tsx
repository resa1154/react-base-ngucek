import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Grid, Form, Button, InputOnChangeData} from "semantic-ui-react";
import { RootState } from "../../../app/store";

const DataServiceForm = ({...props}:DataServicesFormProps) => {
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

    const DataServices = useSelector((state:RootState) => state.services.listservices);
    
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
      const resetForm = () =>{
        setServiceName("")
        setCategory("")
        setStatus("")
      }

    return(
        <Form 
        onSubmit={() => props.onSubmit(servicename, category, status)}>
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
             {/* <Form.Select className="select-head-category"
             fluid
              label="Head Category"
              placeholder="Pilih Kategori"
              options={option}
             /> */}
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
                  placeholder="Select Status"
                  onChange={onStatusChange}
                  value={status}
                  defaultSelectedLabel={status}
                />
                {/* <Form.Select
                  fluid
                  label="Status"
                  options={optionStatus}
                  placeholder="Pilih Status"
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
    );
}

export interface DataServicesFormProps {
  onSubmit: (
    servicename: string,
    headcategory: string,
    status: string
  ) => void;
  // isLoading?: boolean;
}
export default DataServiceForm