import React, { ChangeEvent, useState } from "react";
import { Container, Form, Grid, Image, Button, InputOnChangeData } from "semantic-ui-react";

const ShopInformation = () => {
  const [storename,setStoreName] = useState("");
  const [emailstore,setEmailStore] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [province,setProvince] = useState("");
  const [district,setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [city,setCity] = useState("");
  const [postal_code, setPostalCode] = useState("");

  const onChangeStore = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) =>{
    setStoreName(value);
  }

  const onEmailStore = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setEmailStore(value);
  }

  

  return (
    <Container fluid>
      <Form>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <label>Nama Toko</label>
                <Form.Input placeholder="" />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Form.Input placeholder="" />
              </Form.Field>
              <Form.Field>
                <label>Telepon</label>
                <Form.Input placeholder="" />
              </Form.Field>

              <div className="form-content form-store">
              <p className="title-content">Store Photos</p>
              <Image.Group className="image-container">
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Tampak Depan</p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Kasir</p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Packing</p>
                </div>
        
              </Image.Group>
              <Image.Group className="image-container">
              <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Mesin</p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Penyimpanan</p>
                </div>
                <div className="image-content">
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  />
                  <p className="title-image">Other Photo</p>
                </div>
              </Image.Group>
            </div>
            </Grid.Column>
            <Grid.Column>
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
                <Form.TextArea label="Alamat" placeholder=""/>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Provinsi"
                    placeholder=""
                    readOnly
                  />
                  <Form.Input
                    fluid
                    label="Kecamatan"
                    placeholder=""
                    readOnly
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Kelurahan"
                    placeholder=""
                    readOnly
                  />
                  <Form.Input fluid label="Kota" placeholder="" />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    fluid
                    label="Kode Pos"
                    placeholder=""
                    readOnly
                  />
                </Form.Group>
                <Button color="teal" style={{float:'right'}}>Save</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

export default ShopInformation;
