import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Grid,
  Icon,
  Menu,
  Image,
  InputOnChangeData,
  Checkbox,
} from "semantic-ui-react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useDispatch } from "react-redux";
import { createDataCustomer } from "../customer.reducer";
import { CustomerModel } from "../model";

const CustomerCreate = ({isLoading = false}) => {
  const optionStatus = [
    { key: "aktif", text: "Aktif", value: "aktif" },
    { key: "nonAktif", text: "Non Aktif", value: "nonAktif" },
  ];

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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username,setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  //Initial State Images
  const [images_ktp, setImagesKTP] = useState([]);
  const [images_diri, setImagesDiri] = useState([]);

  const dispatch = useDispatch();

  const handleStatusChange = (e: any, data: any) => {
    setStatus(data.value);
    console.log(data.value);
  };

  const onImageCardChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImagesKTP(imageList as never[]);
  };

  const onImageFotoCardChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImagesDiri(imageList as never[]);
  };

  const onChangeFirstName = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setFirstName(value);
  };

  const onChangeLastName = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setLastName(value);
  };

  const onChangeEmail = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setEmail(value);
  };

  const onChangePhone = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setPhone(value);
  };

  const onChangeAddress = (
    e: ChangeEvent<HTMLTextAreaElement>,
    { value }: any
  ) => {
    setAddress(value);
  };

  const onChangeProvince = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setProvince(value);
  };

  const onChangeDistrict = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setDistrict(value);
  };

  const onChangeSubDistrict = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setSubDistrict(value);
  };

  const onChangeCity = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setCity(value);
  };

  const onChangePostalCode = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setPostalCode(value);
  };

  const onChangeUserName = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
    setUsername(value);
  }

  const onChangePassword = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setPassword(value);
  }

  const onChangeStatus = (e: any, data: any) => {
    let checked = data.checked;
    if (checked == true) {
      setStatus((data.value = "Aktif"));
    } else {
      setStatus((data.value = "Non-Aktif"));
    }
    console.log(checked);
    console.log(data.value);
  };

  const onSubmit = (
    id:string,
    firstName:string,
    lastName:string,
    phoneNumber:string,
    email:string,
    username:string,
    provinceId:string,
    cityId:string,
    subDistrictId:string,
  ) =>{
    dispatch (createDataCustomer(
      {
       id,
        firstName,
        lastName,
        phoneNumber,
        email,
        username,
        password,
        provinceId,
        cityId,
        subDistrictId,
      } as  CustomerModel
    ));
  }

  return (
    <Container fluid>
      <Form loading={isLoading} onSubmit={() => onSubmit("3fa85f64-5717-4562-b3fc-2c963f66afa6",firstname,lastName,phone,email,username,province,city,district)}>
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
              <Button color="teal">Save</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Grid>
          <Grid.Row columns={2} only="computer">
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Info Customer</p>

                <Form.Field>
                  <label>Nama Depan</label>
                  <Form.Input placeholder="Nama Depan" value={firstname} onChange={onChangeFirstName} />
                </Form.Field>
                <Form.Field>
                  <label>Nama Belakang</label>
                  <Form.Input placeholder="Nama Belakang" value={lastName} onChange={onChangeLastName}/>
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <Form.Input placeholder="Email" value={email} onChange={onChangeEmail} />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <Form.Input placeholder="Telepon" value={phone} onChange={onChangePhone}/>
                </Form.Field>
                <Form.TextArea
                  label="Alamat"
                  placeholder="Alamat"
                  value={address} onChange={onChangeAddress}
                />

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Provinsi"
                    placeholder="Provinsi"
                    value={province}
                    onChange={onChangeProvince}
                  />
                  <Form.Input
                    fluid
                    label="Kecamatan"
                    placeholder="Kecamatan"
                    value={district}
                    onChange={onChangeDistrict}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Kelurahan"
                    placeholder="Kelurahan"
                    value={subDistrict}
                  />
                  <Form.Input
                    fluid
                    label="Kota"
                    placeholder="Kota"
                    value={city} onChange={onChangeCity}
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    fluid
                    label="Kode Pos"
                    placeholder="Kode Pos"
                    value={postal_code}
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Field>
                    <label>Status</label>
                    <Checkbox toggle onChange={onChangeStatus} value={status} />
                  </Form.Field>
                </Form.Group>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Foto Customer</p>
                <Image.Group className="image-container img-container-customer">
                  <div className="image-content">
                    <ImageUploading
                      multiple
                      value={images_ktp}
                      onChange={onImageCardChange}
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          <Button
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            <Icon name="upload" /> Upload Files
                          </Button>
                          &nbsp;
                          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <Image src={image.dataURL} alt="" size="small" />
                              <div className="image-item__btn-wrapper">
                                <Button
                                  color="teal"
                                  onClick={() => onImageUpdate(index)}
                                >
                                  <Icon name="redo" style={{ margin: 0 }} />
                                </Button>
                                <Button
                                  color="red"
                                  onClick={() => onImageRemove(index)}
                                >
                                  <Icon name="trash" style={{ margin: 0 }} />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                    <p className="title-image">KTP</p>
                  </div>
                  <div className="image-content">
                    <ImageUploading
                      multiple
                      value={images_diri}
                      onChange={onImageFotoCardChange}
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          <Button
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            <Icon name="upload" /> Upload Files
                          </Button>
                          &nbsp;
                          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <Image src={image.dataURL} alt="" size="small" />
                              <div className="image-item__btn-wrapper">
                                <Button
                                  color="teal"
                                  onClick={() => onImageUpdate(index)}
                                >
                                  <Icon name="redo" style={{ margin: 0 }} />
                                </Button>
                                <Button
                                  color="red"
                                  onClick={() => onImageRemove(index)}
                                >
                                  <Icon name="trash" style={{ margin: 0 }} />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                    <p className="title-image">Diri (Opsional)</p>
                  </div>
                </Image.Group>
              </div>
              <div className="form-content">
                <p className="title-content">Akun</p>
                <Form>
                  <Form.Field>
                    <label>Nomor Tlp / Email</label>
                    <Form.Input placeholder="" value={email} onChange={onChangeUserName}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <Form.Input
                      placeholder=""
                      value={password}
                      type={showPassword ? "text" : "password"}
                      icon={<Icon name={showPassword ? "eye slash" : "eye"} onChange={onChangePassword} />}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Confirm Password</label>
                    <Form.Input
                      placeholder=""
                      value={confirmPassword}
                      type={showPassword1 ? "text" : "password"}
                      icon={<Icon name={showPassword1 ? "eye slash" : "eye"} />}
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

export default CustomerCreate;
