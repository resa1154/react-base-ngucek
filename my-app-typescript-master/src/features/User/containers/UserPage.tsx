import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Grid, Menu } from "semantic-ui-react";
import UserTable from "../components/DataUserTable";

const UserPage = () => {
  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master User</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className="form-content">
        <Button color="teal" as={Link} to="/UserCreate">
          New
        </Button>
       <UserTable/>
      </div>

    </Container>
  );
};

export default UserPage;
