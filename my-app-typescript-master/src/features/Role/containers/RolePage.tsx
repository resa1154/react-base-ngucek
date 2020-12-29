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
import RoleSystem from "../components/DataRoleTable";
import { setFilter } from "../role.reducer";

const RolePage = ({ isLoading = false, ...props }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onChangeName = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setName(value);
    console.log(value);
  };

  const RoleFilterState = useSelector((state: RootState) => state.role.list);

  const getFilterData = (datainput: any) => {
    const datafilter = RoleFilterState ?? [];
    const filteredData = datafilter.filter(
      (find: { roles: { toString: () => string } }) =>
        find.roles.toString().toLowerCase() === datainput.name
    );

    return filteredData;
  };

  const onSubmit = (name: string) => {
    const FormFilterSubmit = getFilterData({ name });
    dispatch(setFilter(FormFilterSubmit));
  };

  const resetForm = () => {
    setName("");
  };

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master Roles</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div className="form-content">
        <p className="title-content">Filter</p>
        <Form loading={isLoading} onSubmit={() => onSubmit(name)}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Group widths={2}>
                  <Form.Field>
                    <label>Role Name</label>
                    <Form.Input
                      placeholder="Name"
                      onChange={onChangeName}
                      value={name}
                    />
                  </Form.Field>
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
        <Button color="teal" as={Link} to="/RoleCreate">
          New
        </Button>
        <RoleSystem />
      </div>
    </Container>
  );
};

export default RolePage;
