import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Grid,
  Menu,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";
import Viewer from "react-viewer";
import "../containers/Customer.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Link, useHistory } from "react-router-dom";
import { getCustomerSingle } from "../customer.reducer";

const CustomerDetailPage = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [city, setCity] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [status, setStatus] = useState("");
  const [password,setPassword] = useState("");

  const [imgVisible, setImgVisible] = useState(false);
  const [imgVisible1, setImgVisible1] = useState(false);
  const [imgVisible2, setImgVisible2] = useState(false);
const dispatch = useDispatch();

  const downloadFile = () => {
    var element = document.createElement("a");
    var file = new Blob(
      [
        // "https://timesofindia.indiatimes.com/thumb/msid-70238371,imgsize-89579,width-400,resizemode-4/70238371.jpg"
      ],
      { type: "image/*" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };

  const CustomerState = useSelector((state:RootState) => state.customer.single);

  let history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);
  const paramID = params.get("id") ?? "";
//   const formvalue = CustomerState ?? [];

useEffect(() => {
    dispatch(getCustomerSingle(paramID));
  }, []);

  useEffect(() => {
    if (CustomerState !== undefined) {
      setFirstName(CustomerState.firstName);
      setLastName(CustomerState.lastName);
      setEmail(CustomerState.email);
      setPhone(CustomerState.phoneNumber);
      setAddress(CustomerState.address);
      setProvince(CustomerState.province);
      setDistrict(CustomerState.district);
      setSubDistrict(CustomerState.subDistrict);
      setCity(CustomerState.city);
      setPostalCode(CustomerState.postal_code);
      setStatus(CustomerState.status);
      setPassword(CustomerState.password);
    }
  }, [CustomerState !== undefined]);

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Data - Customer</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/Customer">
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
        <Grid.Row columns={2} only="computer">
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Info Customer</p>
              <Form>
                <Form.Field>
                  <label>Nama Depan</label>
                  <Form.Input placeholder="Name" value={firstname} readOnly />
                </Form.Field>
                <Form.Field>
                  <label>Nama Belakang</label>
                  <Form.Input placeholder="Name" value={lastName} readOnly />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" value={email} readOnly />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <input placeholder="Telepon" value={phone} readOnly />
                </Form.Field>
                <Form.TextArea label="Alamat" placeholder="Alamat" value={address} readOnly />

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Provinsi"
                    placeholder="Provinsi" value={province}
                    readOnly
                  />
                  <Form.Input
                    fluid
                    label="Kecamatan"
                    placeholder="Kecamatan" value={district}
                    readOnly
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Kelurahan"
                    placeholder="Kelurahan" value={subDistrict}
                    readOnly
                  />
                  <Form.Input fluid label="Kota" placeholder="Kota" value={city} readOnly />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    fluid
                    label="Kode Pos"
                    placeholder="Kode Pos" value={postal_code}
                    readOnly
                  />
                </Form.Group>
                <Form.Group widths={2}>
                <Form.Input
                    fluid
                    label="Status"
                    placeholder="Status" value={status}
                    readOnly
                  />
                </Form.Group>
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Foto Customer</p>
              <Image.Group className="image-container img-container-customer">
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                    onClick={() => {
                      setImgVisible(true);
                    }}
                  />
                  {/* <button onClick={() => { setVisible(true); } }>show</button> */}
                  <Viewer
                    visible={imgVisible}
                    onClose={() => {
                      setImgVisible(false);
                    }}
                    images={[
                      {
                        src:
                          "https://react.semantic-ui.com/images/wireframe/image.png",
                        alt: "",
                      },
                    ]}
                  />
                  <p className="title-image">KTP</p>

                  <Button
                    color="teal"
                    href="https://timesofindia.indiatimes.com/thumb/msid-70238371,imgsize-89579,width-400,resizemode-4/70238371.jpg"
                    download
                    onClick={() => downloadFile()}
                    target="_Blank"
                  >
                    <Icon name="download"></Icon> Download
                  </Button>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                    onClick={() => {
                      setImgVisible1(true);
                    }}
                  />
                  <Viewer
                    visible={imgVisible1}
                    onClose={() => {
                      setImgVisible1(false);
                    }}
                    images={[
                      {
                        src:
                          "https://react.semantic-ui.com/images/wireframe/image.png",
                        alt: "",
                      },
                    ]}
                  />
                  <p className="title-image">Diri (Opsional) </p>

                  <Button
                    color="teal"
                    href="https://timesofindia.indiatimes.com/thumb/msid-70238371,imgsize-89579,width-400,resizemode-4/70238371.jpg"
                    download
                    onClick={() => downloadFile()}
                    target="_Blank"
                  >
                    <Icon name="download"></Icon> Download
                  </Button>
                </div>
              </Image.Group>
            </div>
            <div className="form-content">
              <p className="title-content">Akun</p>
              <Form>
                <Form.Field>
                  <label>Nomor Tlp/ Email</label>
                  <Form.Input placeholder="" value={email} readOnly />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Form.Input placeholder="" value={password} readOnly />
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default CustomerDetailPage;
