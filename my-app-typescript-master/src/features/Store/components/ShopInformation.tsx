import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Grid, Image, Button, InputOnChangeData, Icon } from "semantic-ui-react";
import { InformationStoreModel } from "../model";
import { createInfoStore } from "../store.reducer";

const ShopInformation = ({isLoading = false, ...props}) => {
  const [storename,setStoreName] = useState("");
  const [emailstore,setEmailStore] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [province,setProvince] = useState("");
  const [district,setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [city,setCity] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const dispatch = useDispatch();

  const onChangeStore = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) =>{
    setStoreName(value);
  }

  const onChangeEmailStore = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setEmailStore(value);
  }

  const onChangePhone = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setPhone(value);
  }
  const onChangeAddress = ( e: ChangeEvent<HTMLTextAreaElement>,
    { value }: any) => {
    setAddress(value);
  }

  const onChangeProvince = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setProvince(value);
  }

  const onChangeDistrict = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setDistrict(value);
  }

  const onChangeSubDistrict = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setSubDistrict(value);
  }

  const onChangeCity = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setCity(value);
  }

  const onChangePostalCode = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setPostalCode(value);
  }

  const onCHangePassword = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setPassword(value);
  }

  const onChangeConfirmPassword = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setConfirmPassword(value);
  }

  const onTooglePassword = () =>{
    setShowPassword(showPassword ? false : true);
  }

  const onToogleConfirmPassword = () =>{
    setShowPassword1(showPassword1 ? false : true);
  }

  const onSubmit = (
    storename:string,
    email:string,
    phone:string,
    address:string,
    province:string,
    district:string,
    subDistrict:string,
    city:string,
    postalcode:string
  ) => {
    dispatch(
      createInfoStore({
      storename,
      email,
      phone,
      address,
      province,
      district,
      subDistrict,
      city,
      postalcode
    } as InformationStoreModel));
  };

  return (
    <Container fluid>
      <Form loading={isLoading} onSubmit={() => onSubmit(storename,emailstore,phone,address,province,district,subDistrict,city,postal_code)}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <label>Nama Toko</label>
                <Form.Input placeholder="" onChange={onChangeStore} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Form.Input placeholder="" onChange={onChangeEmailStore}/>
              </Form.Field>
              <Form.Field>
                <label>Telepon</label>
                <Form.Input placeholder="" onChange={onChangePhone}/>
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
            <div className="form-content form-store">
              <p className="title-content">Akun</p>
              <Form.Field>
                <label>Nomor Tlp / Email</label>
                <Form.Input placeholder=""/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input placeholder="" type={showPassword ? "text" : "password"} onChange={onCHangePassword} value={password} icon={
                  <Icon name={showPassword ? "eye slash" : "eye"} link onClick={onTooglePassword}/>
                }/>
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <Form.Input placeholder="" type={showPassword1 ? "text" : "password"} onChange={onChangeConfirmPassword} value={confirmPassword} icon={
                  <Icon name={showPassword1 ? "eye slash" : "eye"} link onClick={onToogleConfirmPassword}/>
                }/>
              </Form.Field>
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
                <Form.TextArea label="Alamat" placeholder="" onChange={onChangeAddress}/>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Provinsi"
                    placeholder=""
                    onChange={onChangeProvince}
                  />
                  <Form.Input
                    fluid
                    label="Kecamatan"
                    placeholder=""
                    onChange={onChangeDistrict}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Kelurahan"
                    placeholder=""
                    onChange={onChangeSubDistrict}
                  />
                  <Form.Input fluid label="Kota" placeholder="" onChange={onChangeCity}/>
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    fluid
                    label="Kode Pos"
                    placeholder=""
                    onChange={onChangePostalCode}
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
