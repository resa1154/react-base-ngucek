import React, { useState } from "react";
import { Container, Form, Grid, Icon } from "semantic-ui-react";

const InformationDriver = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [driverName,setdriverName] = useState("");


  const onTooglePassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const onToogleConfirmPassword = () => {
    setShowPassword1(showPassword1 ? false : true);
  };

  return (
    <Container fluid>
      <Form>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Info Kurir</p>
                <Form>
                  <Form.Field>
                    <label>Nama</label>
                    <Form.Input placeholder="Nama" />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <Form.Input placeholder="Email" />
                  </Form.Field>
                  <Form.Field>
                    <label>Telepon</label>
                    <Form.Input placeholder="Telepon" />
                  </Form.Field>
                  <Form.TextArea label="Alamat" placeholder="" />

                  <Form.Group widths="equal">
                    <Form.Input fluid label="Provinsi" placeholder="Provinsi" />
                    <Form.Input
                      fluid
                      label="Kecamatan"
                      placeholder="Kecamatan"
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Kelurahan"
                      placeholder="Kelurahan"
                    />
                    <Form.Input fluid label="Kota" placeholder="Kota" />
                  </Form.Group>
                  <Form.Group widths={2}>
                    <Form.Input fluid label="Kode Pos" placeholder="Kode Pos" />
                  </Form.Group>
                  <Form.Group widths={2}>
                    {/* <Form.Select
                    fluid
                    label="Status"
                    options={options}
                    placeholder="Aktif"
                  /> */}
                    <Form.Input fluid label="Status" placeholder="Status" />
                  </Form.Group>
                </Form>
              </div>
            </Grid.Column>
            <Grid.Column>
              {/* <div className="form-content">
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
            </div> */}

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
                    <Form.Input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      icon={
                        <Icon
                          name={showPassword ? "eye slash" : "eye"}
                          link
                          onClick={onTooglePassword}
                        />
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Confirm Password</label>
                    <Form.Input
                      placeholder="Confirm Password"
                      type={showPassword1 ? "text" : "password"}
                      icon={
                        <Icon
                          name={showPassword1 ? "eye slash" : "eye"}
                          link
                          onClick={onToogleConfirmPassword}
                        />
                      }
                    />
                  </Form.Field>
                </Form>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

export default InformationDriver;
