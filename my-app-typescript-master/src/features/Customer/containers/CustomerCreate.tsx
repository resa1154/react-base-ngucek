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
} from "semantic-ui-react";
import ImageUploading, { ImageListType } from "react-images-uploading";

const CustomerCreate = () => {
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

  //Initial State Images
  const [images_ktp, setImagesKTP] = useState([]);
  const [images_diri, setImagesDiri] = useState([]);

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

  const onChangeFirstName = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) =>{
    setFirstName(value);
  }

  const onChangeLastName = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) =>{
    setLastName(value);
  }

  const onChangeEmail = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) =>{
    setEmail(value);
  }

  const onChangePhone = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setPhone(value);
  }

  const onChangeAddress = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
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

  const onChangeStatus = (e:any , data:any) => {
    setStatus(data.value);
  }

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
            <Button color="teal">Save</Button>
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
                  <Form.Input placeholder="Nama Depan" value={firstname} />
                </Form.Field>
                <Form.Field>
                  <label>Nama Belakang</label>
                  <Form.Input placeholder="Nama Belakang" value={lastName} />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" value={email} />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <input placeholder="Telepon" value={phone} />
                </Form.Field>
                <Form.TextArea
                  label="Alamat"
                  placeholder="Alamat"
                  value={address}
                />

                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Provinsi"
                    placeholder="Provinsi"
                    value={province}
                  />
                  <Form.Input
                    fluid
                    label="Kecamatan"
                    placeholder="Kecamatan"
                    value={district}
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
                    value={city}
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
                  <Form.Dropdown
                    label="Status"
                    placeholder="Pilih Status"
                    options={optionStatus}
                    selection
                    onChange={onChangeStatus}
                    value={status}
                    defaultSelectedLabel={status}
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
                  <label>Nomor Tlp/ Email</label>
                  <Form.Input placeholder="" value={email} />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Form.Input placeholder="" value={password} type="password"/>
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default CustomerCreate;
