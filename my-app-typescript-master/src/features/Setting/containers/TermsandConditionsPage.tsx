import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Form, Grid, Menu } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import DataTableTerms from "../components/DataTermsandConditionTable";
import { setFilter } from "../termandcondition.reducer";

const TermsandConditionPage = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  
  const options = [{key:"1", text:"Harga Kiloan", value:"Harga Kiloan"},{key:"2", text:"Harga Satuan", value:"Harga Satuan"}];


  const handleStatusChange = (e: any, data: any) => {
    setTitle(data.value);
    console.log(data.value);
  };

  
  const resetForm = () => {
    setTitle("")
  };

  const TermState = useSelector((state: RootState) => state.term.list);

  const getFilteredData = (datainput: any) => {
    const datafilter = TermState ?? [];
    console.log("data filter:" + datafilter);
    const filteredData = datafilter.filter(
      (find: {
        data: {
          title: { toString: () => string };
        };
      }) =>
        find.data.title.toString().toLowerCase() ===
          datainput.title.toLowerCase()
    );

    return filteredData;
    console.log(filteredData);
  };

  const onSubmit = (title: string) => {
    const FormFilterSubmit = getFilteredData({ title });
    console.log("ini submit");
    console.log(FormFilterSubmit);
    console.log("end submit");
    dispatch(setFilter(FormFilterSubmit));
  };

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master - Syarat & Ketentuan</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div className="form-content">
        <p className="title-content">Filter</p>

        <Form onSubmit={() => onSubmit(title)}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Dropdown
                  label="Status"
                  placeholder="Pilih Status"
                  options={options}
                  selection
                  onChange={handleStatusChange}
                  value={title}
                  defaultSelectedLabel={title}
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
        <Button color="teal" as={Link} to="/SyaratCreate">
          New
        </Button>
        <DataTableTerms />
      </div>
    </Container>
  );
};

export default TermsandConditionPage;
