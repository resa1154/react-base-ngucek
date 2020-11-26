import React, {useState, ChangeEvent, useEffect} from "react";
import { Container, Menu, Button, Form, Grid, InputOnChangeData } from "semantic-ui-react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../containers/Mitra.css";
import MitraTable from "../components/DataMitraTable";
import DataMitraForm from "../components/DataMitraForm";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector} from "react-redux";
import { setFilter } from "../mitra.reducer";

const MitraPage = ({ isLoading = false, ...props }) => {
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
  const [dataSet, setData] = useState([]);

  const onChangeName = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setName(value);
    console.log(value);
  }

const handleStatusChange = (e: any, data: any) => {
  setStatus(data.value);
  console.log(data.value);
};

const MitraFilterState = useSelector((state: RootState) => state.mitra.list);
console.log(MitraFilterState);
const dispatch = useDispatch();

useEffect(() => {
  // dispatch(setFilter);
  // console.log(setFilter);
  // dispatch(MitraFilterState);
});

const getFilteredData = (datainput:any) => {
  const datafilter = MitraFilterState ?? [];
  const filteredData = datafilter.filter(
    (find:{
      nama:{toString: () => string};
      status:{toString: () => string};
    }) => find.nama.toString().toLowerCase() === datainput.ownerName || find.status.toString().toLowerCase() === datainput.status);
  
    return filteredData;
    console.log(filteredData);

  }

const onSubmit = (
  ownerName:string,
  status:string,
  startDate:Date,
  endDate:Date
) => {
  // getFilteredData({ownerName, status});
const FormFilterSubmit = getFilteredData({ownerName, status});
console.log("ini submit");
console.log(FormFilterSubmit);
dispatch(setFilter(FormFilterSubmit));
//   dispatch(setData ([
//     {
//     no:"1",
//     ownerName,
//     status,
//     date:"17/11/2020",
//     ownerEmail:"ngucek@gmail.com",
//     ownerPhone:"081-234-342-211",
//     storeAddress:"Jl Sudirman",
//     startDate,
//     endDate
//   }
//   {name,status,startDate,endDate}
// ])
//   );
};

const resetForm = () =>{
  setName("")
  setStatus("")
  setStartDate(new Date())
  setEndDate(new Date())
}

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
        <Form  loading={isLoading}
     onSubmit={() =>
     onSubmit(
       ownerName, status, startDate,endDate
      )
    }
             >
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
                <Button onClick={resetForm}>Reset</Button>
                <Button color="teal">Submit Filter</Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Form>
      </div>

      <div className="form-content">
        <Button color="teal" as={Link} to="/MitraCreate">
          New Store Request
        </Button>
        <MitraTable/>              
      </div>
    </Container>
  );
};

// export interface DataMitraFilterForms {
//   onSubmit: (
//     name: string,
//     status: string,
//     startDate: Date,
//     endDate: Date
//   ) => void;
//   isLoading?: boolean;
// }


export default MitraPage;
