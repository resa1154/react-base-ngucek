import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Form, Grid, Menu } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import HelpTable from "../components/DataHelpTable";
import { setFilter } from "../help.reducer";

const HelpPage = () => {
  const [titleHelp, setTitleHelp] = useState("");
  const dispatch = useDispatch();

  const options = [{key:"1", text:"Harga Kiloan", value:"Harga Kiloan"},{key:"2", text:"Harga Satuan", value:"Harga Satuan"}];

  const handleStatusChange = (e: any, data: any) => {
    setTitleHelp(data.value);
    console.log(data.value);
  };

  const resetForm = () => {
    setTitleHelp("")
  };

  const HelpState = useSelector((state: RootState) => state.help.list);

  const getFilteredData = (datainput: any) => {
    const datafilter = HelpState ?? [];
    console.log("data filter:" + datafilter);
    const filteredData = datafilter.filter(
      (find: {
        data: {
          titleHelp: { toString: () => string };
        };
      }) =>
        find.data.titleHelp.toString().toLowerCase() ===
          datainput.titleHelp.toLowerCase()
    );

    return filteredData;
    console.log(filteredData);
  };

  const onSubmit = (titleHelp: string) => {
    const FormFilterSubmit = getFilteredData({ titleHelp });
    console.log("ini submit");
    console.log(FormFilterSubmit);
    console.log("end submit");
    dispatch(setFilter(FormFilterSubmit));
  };

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master - Help</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div className="form-content">
        <p className="title-content">Filter</p>

        <Form onSubmit={() => onSubmit(titleHelp)}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Dropdown
                  label="Status"
                  placeholder="Pilih Status"
                  options={options}
                  selection
                  onChange={handleStatusChange}
                  value={titleHelp}
                  defaultSelectedLabel={titleHelp}
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
        <Button color="teal" as={Link} to="/HelpAdminCreate">
          New
        </Button>
        <HelpTable/>
      </div>
    </Container>
  );
};

export default HelpPage;
