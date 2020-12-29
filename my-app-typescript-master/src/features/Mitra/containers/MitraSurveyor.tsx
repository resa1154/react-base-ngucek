import React, { ChangeEvent, useState } from "react";
import { Button, Container, Form, Grid, InputOnChangeData, Menu } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import MitraTable from "../components/DataMitraSurveyorTable";

const MitraSurveyor = () =>{
    const options = [
        { key: "request", text: "Request", value: "request" },
        { key: "verified", text: "Verified", value: "verified" },
        { key: "survey", text: "Survey", value: "survey" },
        { key: "approved", text: "Approved", value: "approved" },
        { key: "rejected", text: "Rejected", value: "rejected" },
    ];

    //initial state form
const [ownerName, setName] = useState("");
const [status, setStatus] = useState("");
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

const onChangeName = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setName(value);
    console.log(value);
  }

const handleStatusChange = (e: any, data: any) => {
  setStatus(data.value);
  console.log(data.value);
};

    return (
        <Container fluid>
          <Menu secondary className="menu-header">
            <Menu.Item>
              <h3 className="h3">Business Partner message</h3>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button color="teal">Back</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
    
          <div className="form-content">
            <p className="title-content">Filter</p>
            <Form  >
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
    
                    <Form.Field>
                      <label>Name</label>
                      <Form.Input placeholder="Name" onChange={onChangeName} value={ownerName} />
                    </Form.Field>
                    {/* <Form.Select
                      fluid
                      label="Status"
                      options={options}
                      placeholder="Pilih Status"
                      onChange={selectedHandle}
                    /> */}
                    <Form.Dropdown
                      label="Status"
                      placeholder="Pilih Status"
                      options={options}
                      selection
                      onChange={handleStatusChange}
                      value={status}
                      defaultSelectedLabel={status}
                    />
                    <Form.Group widths="equal">
                      <Form.Field>
                        <label>Start Date</label>
                        <DatePicker
                          dateFormat="MMMM d, yyyy"
                          selected={startDate}
                          selectsStart
                          onChange={(date) => setStartDate(date as Date)}
                          
                        />
                      </Form.Field>
    
                      <Form.Field>
                        <label>End Date</label>
                        <DatePicker
                        dateFormat="MMMM d, yyyy"
                          selected={endDate}
                          selectsStart
                          onChange={(date) => setEndDate(date as Date)}
                        />
                      </Form.Field>
                      {/* <Form.Input fluid label="Start Date" placeholder="" /> 
    
                            <Form.Input fluid label="End Date" placeholder="" /> */}
                    </Form.Group>
                 
                </Grid.Column>
                <Grid.Column verticalAlign="bottom">
                  <div className="form-btn">
                    <Button >Reset</Button>
                    <Button color="teal">Submit Filter</Button>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            </Form>
          </div>
    
          <div className="form-content">
            {/* <Button color="teal" as={Link} to="/MitraCreate">
              New Store Request
            </Button> */}
            <MitraTable/>              

          </div>
        </Container>
      );
}

export default MitraSurveyor



