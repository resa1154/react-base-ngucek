import React from "react";
import { Container, Menu, Button, Grid, Table, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../containers/Kurir.css";
const KurirPage = () => {
  const optionStatus = [
    { key: "aktif", text: "Aktif", value: "aktif"},
    { key: "nonAktif", text: "Non Aktif", value: "nonAktif" },
  ];

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master Data - Kurir</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className="form-content">
        <p className="title-content">Filter</p>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input placeholder="Name" />
                </Form.Field>
                <Form.Field>
                  <label>Username</label>
                  <input placeholder="Username" />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>No. Telepon</label>
                  <input placeholder="No Telepon" />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2} className="row-custom">
            <Grid.Column>
              <Form>
                <Form.Group widths={2}>
                  <Form.Select
                    fluid
                    label="Status"
                    options={optionStatus}
                    placeholder="Aktif"
                  />
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column verticalAlign="bottom">
              <div className="form-btn">
                <Button>Reset</Button>
                <Button color="teal">Submit Filter</Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <div className="form-content">
        <Button color="teal" as={Link} to="/KurirDetail">
          New
        </Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Nama</Table.HeaderCell>
              <Table.HeaderCell>No. Telepon</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>First</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Container>
  );
};

export default KurirPage;
