import React, { useState, useEffect } from "react";
import {
  Container,
  Menu,
  Button,
  Image,
  Form,
  Grid,
  Modal,
  TextArea,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Link } from "react-router-dom";
import "../containers/Mitra.css";
import ReactDatePicker from "react-datepicker";
import MitraForm from "../components/DataMitraForm";
import Viewer from "react-viewer";
import { getMitraSingle} from "../mitra.reducer";

const MitraDetailPage = () => {
  const [startYear, setStartYear] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [imgVisible, setImgVisible] = useState(false);
  const [imgVisible1, setImgVisible1] = useState(false);
  const [imgVisible2, setImgVisible2] = useState(false);

  const dispatch = useDispatch();
  //
  const [nama, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [no_nik, setNo_Nik] = useState("-");
  const [npwp, setNpwp] = useState("-");
  const [status, setStatus] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopEmail, setShopEmail] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [District, setDistrict] = useState("");
  const [subDistrict, setsubDistrict] = useState("");
  const [city,setCity] = useState("");
  const [postal_code,setPostalCode] = useState("");
  const [companySince, setCompanySince] = useState("");
  const [date, setDate] = useState("");

  // const MitraState = useSelector((state: RootState) => state.dataTest);
  const MitraState = useSelector((state: RootState) => state.mitra.single);
  console.log(MitraState)

  // const[stateValue,setStateValue] = useState(MitraState ?? {});

  const itemValue = MitraState ?? [];

useEffect(()=>{
    dispatch(getMitraSingle("1"));
})


  // useEffect(() =>{
  //   if ( MitraState !== undefined) {
  //   setName(MitraState.nama);
  //   setEmail(MitraState.email);
  //   }
  // },[MitraState !== undefined])

//   useEffect(() => {
//     if ( MitraState !== undefined) {
//       setName(MitraState.nama)
//     }
// }, [ MitraState !== undefined])

  const onSubmit = (
    name: string,
    email: string
    // symbol: string,
    // description: string
  ) => {
    // dispatch(
    //   createDataTest({
    //     name,
    //     code,
    //     symbol,
    //     description,
    //   } as DataTestModel)
    // );
  };

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Business Partner - Request Detail</h3>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/Mitra">
              Cancel
            </Button>
          </Menu.Item>
          <Menu.Item>
            {/* <Button color="teal">Reject</Button> */}
            <Modal
              closeIcon
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              size="small"
              trigger={<Button color="teal">Reject</Button>}
            >
              <Modal.Header className="modal-header">
                Konfirmasi Penolakan Pendaftaran
              </Modal.Header>
              <Modal.Content>
                <Form>
                  <Form.TextArea
                    label="Alasan Penolakan"
                    placeholder=""
                    style={{ minHeight: 120 }}
                  />
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color="teal"
                  onClick={() => setOpen(false)}
                  as={Link}
                  to="/Mitra"
                >
                  Confirm
                </Button>
              </Modal.Actions>
            </Modal>
          </Menu.Item>
          <Menu.Item>
            {/* <Button color="teal" as={Link} to="/Mitra">Verify</Button> */}
             <Button color="teal" as={Link} to="/Mitra">Approved</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Grid>
        <Grid.Row columns={2} only="computer">
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Owner Info</p>
              <Form>
                <Form.Field>
                  <label>Nama Lengkap</label>
                  <input placeholder="Name" value={itemValue.nama} disabled/>
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" value={itemValue.email} disabled/>
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <input placeholder="Telepon" value={itemValue.phoneNumber} disabled/>
                </Form.Field>
                <Form.Field>
                  <label>NIK</label>
                  <input placeholder="NIK" value={itemValue.no_nik} disabled/>
                </Form.Field>
                <Form.Field>
                  <label>NPWP (Optional)</label>
                  <input placeholder="NPWP" value={itemValue.npwp} disabled/>
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Owner Photos</p>
              <Image.Group className="image-container">
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
                  <p className="title-image">NPWP (Opsional) </p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                    onClick={() => {
                      setImgVisible2(true);
                    }}
                  />
                    <Viewer
                    visible={imgVisible2}
                    attribute={false}
                    onClose={() => {
                      setImgVisible2(false);
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
                </div>
              </Image.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Store Info</p>
              <Form>
                <Form.Field>
                  <label>Nama Perusahaan</label>
                  <input placeholder="Nama Perusahaan" value={itemValue.companyName} disabled/>
                </Form.Field>
                <Form.Field>
                  <label>Nama Toko</label>
                  <input placeholder="Nama Toko" value={itemValue.shopName} disabled/>
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <input placeholder="Telepon" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" value={itemValue.email} disabled/>
                </Form.Field>
                <Form.Group widths={2}>
                  <Form.Field>
                    <label>Tahun Berdiri</label>

                    <ReactDatePicker
                      selected={startYear}
                      onChange={(date) => setStartYear(date as Date)}
                      showYearPicker
                      dateFormat="yyyy"
                    ></ReactDatePicker>
                  </Form.Field>
                </Form.Group>
                <Form.Checkbox label="Memiliki Kurir" />

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
                <Form.TextArea label="Alamat" placeholder="Alamat" />
                <Form.Field>
                  <label>Map</label>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6028835490106!2d107.56859841431734!3d-6.9379733698426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef5257dd90f3%3A0x868caac6bb2f20fb!2sUltimo%20Solution!5e0!3m2!1sen!2sid!4v1604626512281!5m2!1sen!2sid"
                    width="100%"
                    height="250"
                    // frameborder="0"
                    style={{ border: 0 }}
                    // allowfullscreen=""
                    aria-hidden="false"
                    // tabindex="0"
                  ></iframe>
                </Form.Field>
          
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Store Photos</p>
              <Image.Group className="image-container">
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Foto Daftar Harga</p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Foto 1 </p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Foto 2 </p>
                </div>
              </Image.Group>
            </div>
            <div className="form-content">
              <p className="title-content">Social Media</p>
              <Form>
                <Form.Field>
                  <label>Website</label>
                  <input />
                </Form.Field>
                <Form.Field>
                  <label>Youtube</label>
                  <input />
                </Form.Field>
                <Form.Field>
                  <label>Twitter</label>
                  <input />
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MitraDetailPage;
