import React, { useEffect, useState } from "react";
import { Container, Menu, Button, Grid, Form, Image, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { getKurirSingle } from "../kurir.reducer";

const KurirDetailPage = () => {
  const dispatch = useDispatch();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [province,setProvince] = useState("");
  const [district,setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [city, setCity] = useState("");
  const [postalcode,setPostalCode] = useState("");
  const [status,setStatus] = useState("");
  const [nopol, setNopol] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [showPassword,setShowPassword] = useState("");
  const [showPassword1,setShowPassword1] = useState("");

  const optionLaundry =[{key:1, text:"Laundry Reguler", value:"reguler"}];

  const KurirState = useSelector((state:RootState)=> state.kurir.single);

  let history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);
  const paramID = params.get("id") ?? "";
  const formvalue = KurirState ?? [];

  useEffect(() => {
    dispatch(getKurirSingle(paramID));
  }, []);


  useEffect(() => {
    if (KurirState !== undefined) {
      setName(KurirState.name);
      setEmail(KurirState.email);
      setPhone(KurirState.phoneNumber);
      setAddress(KurirState.address);
      setProvince(KurirState.province);
      setDistrict(KurirState.district);
      setSubDistrict(KurirState.subDistrict);
      setCity(KurirState.city);
      setPostalCode(KurirState.postal_code);
      setStatus(KurirState.status);
      setNopol(KurirState.nopol);
      setUsername(KurirState.username);
      setPassword(KurirState.password);
      setConfirmPassword(KurirState.confirm_passwod);
    }
  }, [KurirState !== undefined]);

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
                  <input placeholder="Nama" value={name} readOnly/>
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" value={email} readOnly/>
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <input placeholder="Telepon" value={phone} readOnly/>
                </Form.Field>
                <Form.TextArea label="Alamat" placeholder="" value={address} readOnly />

                <Form.Group widths="equal">
                  <Form.Input fluid label="Provinsi" placeholder="Provinsi" value={province} readOnly/>
                  <Form.Input fluid label="Kecamatan" placeholder="Kecamatan" value={district} readOnly />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input fluid label="Kelurahan" placeholder="Kelurahan" value={subDistrict} readOnly />
                  <Form.Input fluid label="Kota" placeholder="Kota" value={city} readOnly />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input fluid label="Kode Pos" placeholder="Kode Pos" value={postalcode} readOnly/>
                </Form.Group>
                <Form.Group widths={2}>
                  {/* <Form.Select
                    fluid
                    label="Status"
                    options={options}
                    placeholder="Aktif"
                  /> */}
                   <Form.Input fluid label="Status" placeholder="Status" value={status} readOnly/>
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Select fluid label="Laundry" placeholder="" options={optionLaundry} readOnly/>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="monday-checkbox"
                      label="Driver Terkait dengan Mitra"
                     
                    />
                  </div>

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
                  <input placeholder="Nomor Polisi" value={nopol} readOnly/>
                </Form.Field>
              </Form>
            </div>

            <div className="form-content">
              <p className="title-content">Akun</p>
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input placeholder="Username" value={username} readOnly/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>   
                    <Form.Input placeholder="" value={password} type={showPassword ? "text" : "password"} icon={
                    <Icon name={showPassword ? "eye slash": "eye"}/>
                  }/> 
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password</label>
                  <Form.Input placeholder="" value={confirmpassword} type={showPassword1 ? "text" : "password"} icon={
                    <Icon name={showPassword1 ? "eye slash": "eye"}/>
                  }/>
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
