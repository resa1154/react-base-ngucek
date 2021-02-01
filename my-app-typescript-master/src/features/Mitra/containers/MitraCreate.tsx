import React, { useState, useReducer,ChangeEvent,useEffect } from "react";
import {
  Container,
  Menu,
  Button,
  Image,
  Form,
  Grid,
  Modal,
  TextArea,Icon,InputOnChangeData,
} from "semantic-ui-react";
import { useDispatch, useSelector} from "react-redux";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { RootState } from "../../../app/store";
import { Link } from "react-router-dom";
import "../containers/Mitra.css";
import ReactDatePicker from "react-datepicker";
import {createDataMitra} from "../mitra.reducer";
import {MitraModel} from "../models";
import { getAddressProvince } from "../../dataSet/province/province.reducer";
import { getAddressCity } from "../../dataSet/city/city.reducer";
import { getAddressSubDistrict } from "../../dataSet/subDistrict/subDistrict.reducer";


const MitraCreate = () =>{

   const [startYear, setStartYear] = useState(new Date());
  const [open, setOpen] = useState(false);

  //Initial State Form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [no_nik, setNo_Nik] = useState("");
  const [npwp, setNpwp] = useState("");
  const [status, setStatus] = useState("");

  //initial State Store info
  const [companyName, setCompanyName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [storePhone, setStorePhone] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [city, setCity] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companySince, setCompanySince] = useState("");
  const [date, setDate] = useState("");
  const [website_link, setWebsiteLink] = useState("");
  const [twitter_link, setTwitterLink] = useState("");
  const [instagram_link, setInstagramLink] = useState("");
  const [facebook_link, setFacebookLink] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //dropdown
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [isActive, setIsActive] = useState(true);

  //Initial State Images
  const [images_nik, setImagesNik] = useState([]);
  const [images_npwp, setImagesNpwp] = useState([]);
  const [images_profil, setImagesProfil] = useState([]);
  const [images_store, setImagesStore] = useState([]);

  
  const [showPassword1, setShowPassword1] = useState("");
  const [showPassword2, setShowPassword2] = useState("");
  const [showPassword3, setShowPassword3] = useState("");

  const [active, SetActive] = useState(false);
  
  const dispatch = useDispatch();
   const onImageCardChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImagesNik(imageList as never[]);
  };

  const onImageNPWPChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImagesNpwp(imageList as never[]);
  };

  const onImageProfilChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImagesProfil(imageList as never[]);
  };

  const onImageStoreChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImagesStore(imageList as never[]);
  };

  const onFirstNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setFirstName(value);
    console.log(value);
  };
  const onLastNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setLastName(value);
    console.log(value);
  };

  const onEmailChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setEmail(value);
  };

  const onPhoneChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setPhoneNumber(value);
  };

  const onNikChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setNo_Nik(value);
  };

  const onNpwpChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setNpwp(value);
  };

  const onStatusChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setStatus(value);
  };

  const onCompanyNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setCompanyName(value);
  };

  const onShopNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setStoreName(value);
  };

  const onShopEmailChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setStoreEmail(value);
  };

  const onShopPhoneChange = (e:ChangeEvent<HTMLInputElement>, {value}: InputOnChangeData) => {
    setStorePhone(value);
  }

  const onAddressChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    { value }: any
  ) => {
    setAddress(value);
  };

  const onPostalChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setPostalCode(value);
  };

  const onCompanySinceChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setCompanySince(value);
  };

  const onChangeWebsiteLink = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setWebsiteLink(value);
  };

  const onChangeTwitterLink = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setTwitterLink(value);
  };

  const onChangeInstagramLink = (e:ChangeEvent<HTMLInputElement>, {value} : InputOnChangeData) => {
    setInstagramLink(value);
  };

  const onChangeFacebookLink = (e:ChangeEvent<HTMLInputElement>, {value}: InputOnChangeData) => {
      setFacebookLink(value);
  }

  const onChangeUserName = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
    setUsername(value);
  }
  
  const onTooglePassword = () =>{
    setShowPassword(showPassword ? false : true);
  }

  const onChangePassword = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setPassword(value);
  }


  const addressProvinceState = useSelector(
    (state: RootState) => state.province.province
  );
  const addressCityState = useSelector((state: RootState) => state.city.city);
  const addresssubDistrictState = useSelector(
    (state: RootState) => state.subDistrict.subDistrict
  );

  let provinceOptions = addressProvinceState?.map(function (elem) {
    return {
      key: elem.id,
      value: elem.id,
      text: elem.provinceName,
    };
  });

  let cityOptions = addressCityState?.map(function (elem) {
    return {
      key: elem.id,
      value: elem.id,
      text: elem.cityName,
    };
  });

  let subDistrictOptions = addresssubDistrictState?.map(function (elem) {
    return {
      key: elem.id,
      value: elem.id,
      text: elem.subDistrictName,
    };
  });

  useEffect(() => {
    dispatch(getAddressProvince());
  }, []);

  const handleProvinceChange = (e: any, data: any) => {
    const { key } = data.options.find(
      (o: { value: any }) => o.value === data.value
    );
    dispatch(getAddressCity(key));
    setProvince(data.value);
    setSelectedProvince(e.target.textContent);
  };

  const handleCityChange = (e: any, data: any) => {
    const { key } = data.options.find(
      (o: { value: any }) => o.value === data.value
    );
    dispatch(getAddressSubDistrict(key));
    setCity(data.value);
    setSelectedCity(e.target.textContent);
  };

  const handleDistrictChange = (e: any, data: any) => {
    setSubDistrict(data.value);
    setSelectedDistrict(e.target.textContent);
  };

  const onChangeDriver = (e: any, data: any) => {
    let checked = data.checked;
    // if (checked == true){
    //   className = "display:block"
    // } else{
    //   className = "display:none"
    // }
    SetActive(checked);
    console.log(checked);
    // console.log(data.value);
  };

  const renderAddDriver = () => {
    return (
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
            {/* <Form.Select
          fluid
          label="Status"
          options={options}
          placeholder="Aktif"
        /> */}
            <Form.Input fluid label="Status" placeholder="Status" />
          </Form.Group>
          <div className="form-content form-store">
            <p className="title-content">Info Kendaraan</p>
            <Form.Field>
              <label>Nomor Polisi</label>
              <input placeholder="Nomor Polisi" />
            </Form.Field>
          </div>

          <div className="form-content form-store">
            <p className="title-content">Akun</p>
            <Form>
              <Form.Field>
                <label>Nomor Tlp / Email</label>
                <Form.Input />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input
                  type={showPassword2 ? "text" : "password"}
                  icon={<Icon name={showPassword2 ? "eye slash" : "eye"} />}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <Form.Input
                  type={showPassword3 ? "text" : "password"}
                  icon={<Icon name={showPassword3 ? "eye slash" : "eye"} />}
                />
              </Form.Field>
            </Form>
          </div>
        </Form>
      </div>
    );
  };


    // const DataMitraState = useSelector((state: RootState) => state.dataTest);

    const onSubmit = (
      firstName: string,
      lastName:string,
      phoneNumber:string,
      storeName:string,
      storeEmail:string,
      storePhone:string,
      latitude:string,
      longitude:string,
      address:string,
      provinceId:string,
      cityId:string,
      subdistrictId:string,
      postalCode:string,
      yearEstablished:0,
      hasCourier:true,
      isVerified:true,
      email:string,
      username:string,
      password:string,
      images:string,
      type:0,
      nik:string,
      npwp:string,
      website:string,
      youtube:string,
      twitter:string,
      instagram:string,
      facebook:string
    ) => {
      // dispatch(
      //   createDataMitra({
      //     name,
      //     email,
      //     no_nik,
      //     npwp,
      //     companyName,
      //     shopName,
      //     shopEmail,
      //     phoneNumber,
      //     province,
      //     District,
      //     subDistrict,
      //     city,
      //     postal_code
      //   } as MitraModel)
      // );
    };
    
    return(
        <Container fluid>
        <Form>
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
              <Button color="teal">Submit</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
          <Grid>
        <Grid.Row columns={2} only="computer">
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Owner Info</p>
            
                <Form.Field>
                  <label>Nama Depan</label>
                  <Form.Input
                    placeholder="Nama Depan"
                    onChange={onFirstNameChange}
                    value={firstName}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Nama Belakang</label>
                  <Form.Input placeholder="Nama Belakang" onChange={onLastNameChange} value={lastName}/>
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <Form.Input
                    placeholder="Email"
                    onChange={onEmailChange}
                    value={email}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <Form.Input
                    placeholder="Telepon"
                    onChange={onPhoneChange}
                    value={phoneNumber}
                  />
                </Form.Field>
                <Form.Field>
                  <label>NIK</label>
                  <Form.Input
                    placeholder="NIK"
                    onChange={onNikChange}
                    value={no_nik}
                  />
                </Form.Field>
                <Form.Field>
                  <label>NPWP (Optional)</label>
                  <Form.Input
                    placeholder="NPWP"
                    onChange={onNpwpChange}
                    value={npwp}
                  />
                </Form.Field>
              
            </div>
            <div className="form-content">
              <p className="title-content">Store Info</p>
              
                <Form.Field>
                  <label>Nama Perusahaan</label>
                  <Form.Input
                    placeholder="Nama Perusahaan"
                    onChange={onCompanyNameChange}
                    value={companyName}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Nama Toko</label>
                  <Form.Input
                    placeholder="Nama Toko"
                    onChange={onShopNameChange}
                    value={storeName}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <Form.Input
                    placeholder="Telepon"
                    onChange={onShopPhoneChange}
                    value={storePhone}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <Form.Input
                    placeholder="Email"
                    onChange={onShopEmailChange}
                    value={storeEmail}
                  />
                </Form.Field>
                <Form.Group widths="equal">
                  <Form.Dropdown
                    fluid
                    label="Provinsi"
                    placeholder="Pilih Provinsi"
                    options={provinceOptions}
                    selection
                    onChange={handleProvinceChange}
                    value={province}
                    defaultSelectedLabel={province}
                  />
                  <Form.Dropdown
                    fluid
                    label="Kota"
                    placeholder="Pilih Kota"
                    options={cityOptions}
                    selection
                    onChange={handleCityChange}
                    value={city}
                    defaultSelectLabel={city}
                    disabled={province === "" ? isActive : false}
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Dropdown
                    fluid
                    label="Kecamatan / Kelurahan"
                    placeholder="Pilih Kec / Kel"
                    options={subDistrictOptions}
                    selection
                    onChange={handleDistrictChange}
                    value={subDistrict}
                    defaultSelectedLabel={subDistrict}
                    disabled={city === "" ? isActive:false}
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    fluid
                    label="Kode Pos"
                    placeholder="Kode Pos"
                    onChange={onPostalChange}
                    value={postal_code}
                  />
                </Form.Group>
                <Form.TextArea
                  label="Alamat"
                  placeholder="Alamat"
                  onChange={onAddressChange}
                  value={address}
                />
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
                <Form.Checkbox
                  label="Memiliki Kurir"
                  onChange={onChangeDriver}
                />
                <Form.Field>
                  <label>Jenis Laundry</label>
                  <Form.Group widths={2}>
                    <Form.Checkbox label="Laundry Reguler" />
                    <Form.Checkbox label="Laundry By Ngucek" />
                  </Form.Group>
                </Form.Field>
              
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Owner Photos</p>
              <Image.Group className="image-container">
                <div className="image-content">
                  <ImageUploading
                    multiple
                    value={images_nik}
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
                  {/* <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  /> */}
                  <ImageUploading
                    multiple
                    value={images_npwp}
                    onChange={onImageNPWPChange}
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
                  <p className="title-image">NPWP (Opsional) </p>
                </div>
                <div className="image-content">
                  {/* <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  /> */}
                  <ImageUploading
                    multiple
                    value={images_profil}
                    onChange={onImageProfilChange}
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
                  <p className="title-image">Diri (Opsional) </p>
                </div>
              </Image.Group>
            </div>
            <div className="form-content">
              <p className="title-content">Store Photos</p>
              <Image.Group className="image-container">
                <div className="image-content">
                  <ImageUploading
                    multiple
                    value={images_store}
                    onChange={onImageStoreChange}
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
                        <div className="image-wrapper">
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
                      </div>
                    )}
                  </ImageUploading>
                  <p className="title-image">Foto Daftar Harga</p>
                </div>

              </Image.Group>
            </div>
            <div className="form-content">
              <p className="title-content">Social Media</p>
                <Form.Field>
                  <label>Website</label>
                  <Form.Input onChange={onChangeWebsiteLink} value={website_link}/>
                </Form.Field>
                <Form.Field>
                  <label>Twitter</label>
                  <Form.Input onChange={onChangeTwitterLink} value={twitter_link}/>
                </Form.Field>
                <Form.Field>
                  <label>Instagram</label>
                  <Form.Input
                    onChange={onChangeInstagramLink}
                    value={instagram_link}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Facebook</label>
                  <Form.Input
                    onChange={onChangeFacebookLink}
                    value={facebook_link}
                  />
                </Form.Field>
            </div>
            <div className="form-content">
              <p className="title-content">Akun</p>
           
                <Form.Field>
                  <label>Nomor Tlp / Email</label>
                  <Form.Input placeholder="" value={username} onChange={onChangeUserName}/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Form.Input
                    type={showPassword ? "text" : "password"}
                    icon={<Icon name={showPassword ? "eye slash" : "eye"} link onClick={onTooglePassword}/>}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password</label>
                  <Form.Input
                    type={showPassword1 ? "text" : "password"}
                    icon={<Icon name={showPassword1 ? "eye slash" : "eye"} />}
                  />
                </Form.Field>
             
            </div>
            <div
              className={active ? "form-content hidden" : "form-content hidden"}
            >
              <p className="title-content">Info Kurir</p>
              
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
                  {/* <Form.Select
                    fluid
                    label="Status"
                    options={options}
                    placeholder="Aktif"
                  /> */}
                  <Form.Input fluid label="Status" placeholder="Status" />
                </Form.Group>
                <div className="form-content form-store">
                  <p className="title-content">Info Kendaraan</p>
                  <Form.Field>
                    <label>Nomor Polisi</label>
                    <input placeholder="Nomor Polisi" />
                  </Form.Field>
                </div>

                <div className="form-content form-store">
                  <p className="title-content">Akun</p>
                  <Form>
                    <Form.Field>
                      <label>Nomor Tlp / Email</label>
                      <Form.Input />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <Form.Input
                        type={showPassword2 ? "text" : "password"}
                        icon={
                          <Icon name={showPassword2 ? "eye slash" : "eye"} />
                        }
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Confirm Password</label>
                      <Form.Input
                        type={showPassword3 ? "text" : "password"}
                        icon={
                          <Icon name={showPassword3 ? "eye slash" : "eye"} />
                        }
                      />
                    </Form.Field>
                  </Form>
                </div>
              

              {/* <button color="teal" onClick={renderAddDriver}>Tambah Driver</button> */}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
</Form>
    </Container>
    );
}

export default MitraCreate;