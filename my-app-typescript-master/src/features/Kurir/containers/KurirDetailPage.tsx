import React from "react";
import { Container, Menu, Button, Grid, Form, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const KurirDetailPage = () => {
  const options = [
    { key: "aktif", text: "Aktif", value: "aktif" },
    { key: "nonAktif", text: "Non-Aktif", value: "nonAktif" },
  ];

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master Data - Kurir</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/Kurir">
              Cancel
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button color="teal">Reject</Button>
          </Menu.Item>
          <Menu.Item>
            <Button color="teal">Verify</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Info Kurir</p>
              <Form>
                <Form.Field>
                  <label>Nama</label>
                  <input placeholder="Nama" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <input placeholder="Telepon" />
                </Form.Field>
                <Form.TextArea label="Alamat" placeholder="" />

                <Form.Group widths="equal">
                  <Form.Input fluid label="Provinsi" placeholder="Provinsi" />
                  <Form.Input fluid label="Kecamatan" placeholder="Kecamatan" />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input fluid label="Kelurahan" placeholder="Kelurahan" />
                  <Form.Input fluid label="Kota" placeholder="Kota" />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input fluid label="Kode Pos" placeholder="Kode Pos" />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Select
                    fluid
                    label="Status"
                    options={options}
                    placeholder="Aktif"
                  />
                </Form.Group>
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Foto Kurir</p>
              <Image.Group className="image-container">
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">KTP</p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Diri (Opsional) </p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Foto Motor (Opsional) </p>
                </div>
              </Image.Group>
              <Image.Group className="image-container">
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">STNK (Opsional)</p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">SIM </p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">BPKB (Opsional) </p>
                </div>
              </Image.Group>
            </div>

            <div className="form-content">
              <p className="title-content">Info Kendaraan</p>
              <Form>
                <Form.Field>
                  <label>Nomor Polisi</label>
                  <input placeholder="Nomor Polisi" />
                </Form.Field>
              </Form>
            </div>

            <div className="form-content">
              <p className="title-content">Akun</p>
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input placeholder="Username" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="Password" type="password" />
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password</label>
                  <input placeholder="Confirm Password" type="password" />
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default KurirDetailPage;
