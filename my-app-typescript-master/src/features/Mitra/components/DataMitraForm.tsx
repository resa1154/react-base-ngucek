import React, { useState, ChangeEvent } from "react";
import { Grid, Form, Image, InputOnChangeData, Button, Icon } from "semantic-ui-react";
import ReactDatePicker from "react-datepicker";
import ImageUploading, {ImageListType} from "react-images-uploading";


const DataMitraForm = ({ isLoading = false, ...props }: DataMitraFormProps) => {
  const [startYear, setStartYear] = useState(new Date());
  const [open, setOpen] = useState(false);

 //Initial State Form
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [no_nik, setNo_Nik] = useState("");
 const [npwp, setNpwp] = useState("");
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
const [social_link, setSocialLink] = useState("");
const [social_link1, setSocialLink1] = useState("");
const [social_link2, setSocialLink2] = useState("");

//Initial State Images
const [images_nik, setImagesNik] = useState([]);
const [images_npwp, setImagesNpwp] = useState([]);
const [images_profil, setImagesProfil] = useState([]);
const [images_store, setImagesStore] = useState([]);

const [showPassword,setShowPassword] = useState("");
const [showPassword1,setShowPassword1] = useState("");
const [showPassword2,setShowPassword2] = useState("");
const [showPassword3,setShowPassword3] = useState("");

const [active,SetActive] = useState(false);

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

  const onImageProfilChange = ( imageList: ImageListType,
    addUpdateIndex: number[] | undefined) => {  console.log(imageList, addUpdateIndex);
        setImagesProfil(imageList as never[]);};

const onImageStoreChange = ( imageList: ImageListType,
    addUpdateIndex: number[] | undefined) => {  console.log(imageList, addUpdateIndex);
        setImagesStore(imageList as never[]);};

 const onNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setName(value);
    console.log(value);
  };

  const onEmailChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setEmail(value);
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=>{
      setPhoneNumber(value);
  };

  const onNikChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
      setNo_Nik(value);
  };

  const onNpwpChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
    setNpwp(value);
};

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
      setStatus(value);
  };

  const onCompanyNameChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
    setCompanyName(value);
};

const onShopNameChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
  setShopName(value);
};

const onShopEmailChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
  setShopEmail(value);
};

const onAddressChange = (
  e: ChangeEvent<HTMLTextAreaElement>,
  { value }: any
) => {
  setAddress(value);
};

const onProvinceChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
  setProvince(value);
};

const onDistricChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
  setDistrict(value);
};

const onSubDistricChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
  setsubDistrict(value);
};

const onCityChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
  setCity(value);
};

const onPostalChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
  setPostalCode(value);
};

const onCompanySinceChange = (e: ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData)=> {
  setCompanySince(value);
};

const onChangeSocialLink = (e: ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
  setSocialLink(value);
};

const onChangeSocialLink1 = (e: ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
  setSocialLink1(value);
}

const onChangeSocialLink2 = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
  setSocialLink2(value);
}

const onChangeDriver = (e:any , data:any) => {
  let checked = data.checked;
  // if (checked == true){
  //   className = "display:block"
  // } else{
  //   className = "display:none"
  // }
  SetActive(checked);
  console.log(checked);
  // console.log(data.value);
}

const renderAddDriver = () => {
  return(
    <div className="form-content" >
    <p className="title-content">Info Kurir</p>
    <Form >
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
            <Form.Input type={showPassword2 ? "text" : "password"} icon={
              <Icon name={showPassword2 ? "eye slash" : "eye"}/>
            }/>
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <Form.Input type={showPassword3 ? "text" : "password"} icon={
              <Icon name={showPassword3 ? "eye slash" : "eye"}/>
            }/>
          </Form.Field>
        </Form>
      </div>
    </Form>
  </div>
  )
}


  return (
    <Form loading={isLoading} onSubmit={() => props.onSubmit(name,email,no_nik,npwp,companyName,shopName,shopEmail,phoneNumber,province, District, subDistrict,city,postal_code)}>
      <Grid>
        <Grid.Row columns={2} only="computer">
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Owner Info</p>
              <Form>
                <Form.Field>
                  <label>Nama Lengkap</label>
                  <Form.Input placeholder="Name" onChange={onNameChange} value={name}/>
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <Form.Input placeholder="Email" onChange={onEmailChange} value={email} />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <Form.Input placeholder="Telepon" onChange={onPhoneChange} value={phoneNumber}/>
                </Form.Field>
                <Form.Field>
                  <label>NIK</label>
                  <Form.Input placeholder="NIK" onChange={onNikChange} value={no_nik}/>
                </Form.Field>
                <Form.Field>
                  <label>NPWP (Optional)</label>
                  <Form.Input placeholder="NPWP" onChange={onNpwpChange} value={npwp}/>
                </Form.Field>
              </Form>
            </div>
            <div className="form-content">
              <p className="title-content">Store Info</p>
              <Form >
                <Form.Field>
                  <label>Nama Perusahaan</label>
                  <Form.Input placeholder="Nama Perusahaan" onChange={onCompanyNameChange} value={companyName}/>
                </Form.Field>
                <Form.Field>
                  <label>Nama Toko</label>
                  <Form.Input placeholder="Nama Toko" onChange={onShopNameChange} value={shopName} />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <Form.Input placeholder="Telepon" onChange={onPhoneChange} value={phoneNumber}/>
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <Form.Input placeholder="Email" onChange={onShopEmailChange} value={shopEmail}/>
                </Form.Field>
         
                <Form.Group widths="equal">
                  <Form.Input fluid label="Provinsi" placeholder="Provinsi" onChange={onProvinceChange} value={province}/>
                  <Form.Input fluid label="Kecamatan" placeholder="Kecamatan" onChange={onDistricChange} value={District}/>
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input fluid label="Kelurahan" placeholder="Kelurahan" onChange={onSubDistricChange} value={subDistrict} />
                  <Form.Input fluid label="Kota" placeholder="Kota" onChange={onCityChange} value={city}/>
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input fluid label="Kode Pos" placeholder="Kode Pos" onChange={onPostalChange} value={postal_code} />
                </Form.Group>
                <Form.TextArea label="Alamat" placeholder="Alamat" onChange={onAddressChange} value={address}/>
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
                <Form.Checkbox label="Memiliki Kurir" onChange={onChangeDriver}/>
                <Form.Field>
                    <label>Jenis Laundry</label>
                    <Form.Group widths={2}>
                    <Form.Checkbox label="Laundry Reguler"/>
                    <Form.Checkbox label="Laundry By Ngucek"/>
                 </Form.Group>
                  </Form.Field>
             
              </Form>
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
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            ><Icon name="upload"/> Upload Files 
            </Button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image src={image.dataURL} alt="" size="small" />
                <div className="image-item__btn-wrapper">
                <Button color="teal" onClick={() => onImageUpdate(index)}><Icon name="redo" style={{margin:0}}/></Button>
                  <Button color="red" onClick={() => onImageRemove(index)} ><Icon name="trash" style={{margin:0}}/></Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
                  {/* <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  /> */}
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
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            ><Icon name="upload"/> Upload Files
            </Button>
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image src={image.dataURL} alt="" size="small" />
                <div className="image-item__btn-wrapper">
                <Button color="teal" onClick={() => onImageUpdate(index)}><Icon name="redo" style={{margin:0}}/></Button>
                  <Button color="red" onClick={() => onImageRemove(index)} ><Icon name="trash" style={{margin:0}}/></Button>
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
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            ><Icon name="upload"/> Upload Files
            </Button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image src={image.dataURL} alt="" size="small" />
                <div className="image-item__btn-wrapper">
                  <Button color="teal" onClick={() => onImageUpdate(index)}><Icon name="redo" style={{margin:0}}/></Button>
                  <Button color="red" onClick={() => onImageRemove(index)} ><Icon name="trash" style={{margin:0}}/></Button>
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
                  {/* <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  /> */}
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
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            ><Icon name="upload"/> Upload Files
            </Button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            <div className="image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image src={image.dataURL} alt="" size="small" />
                <div className="image-item__btn-wrapper">
                  <Button color="teal" onClick={() => onImageUpdate(index)}><Icon name="redo" style={{margin:0}}/></Button>
                  <Button color="red" onClick={() => onImageRemove(index)} ><Icon name="trash" style={{margin:0}}/></Button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </ImageUploading>
                  <p className="title-image">Foto Daftar Harga</p>
                </div>
                {/* <div className="image-content">
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
                </div> */}
              </Image.Group>
            </div>
            <div className="form-content">
              <p className="title-content">Social Media</p>
              <Form>
                <Form.Field>
                  <label>Instagram</label>
                  <Form.Input onChange={onChangeSocialLink} value={social_link}/>
                </Form.Field>
                <Form.Field>
                  <label>Facebook</label>
                  <Form.Input onChange={onChangeSocialLink1} value={social_link1}/>
                </Form.Field>
              </Form>
            </div>
            <div className="form-content">
              <p className="title-content">Akun</p>
              <Form>
                <Form.Field>
                  <label>Nomor Tlp / Email</label>
                  <Form.Input />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Form.Input type={showPassword ? "text" : "password"} icon={
                        <Icon name={showPassword ? "eye slash" : "eye"}/>
                      }/>
                </Form.Field>
                <Form.Field>
                  <label>Confirm Password</label>
                  <Form.Input type={showPassword1 ? "text" : "password"} icon={
                        <Icon name={showPassword1 ? "eye slash" : "eye"}/>
                      }/>
                </Form.Field>
              </Form>
            </div>
            <div className={active ? 'form-content hidden' :'form-content hidden'} >
              <p className="title-content">Info Kurir</p>
              <Form >
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
                      <Form.Input type={showPassword2 ? "text" : "password"} icon={
                        <Icon name={showPassword2 ? "eye slash" : "eye"}/>
                      }/>
                    </Form.Field>
                    <Form.Field>
                      <label>Confirm Password</label>
                      <Form.Input type={showPassword3 ? "text" : "password"} icon={
                        <Icon name={showPassword3 ? "eye slash" : "eye"}/>
                      }/>
                    </Form.Field>
                  </Form>
                </div>
              </Form>
                
                {/* <button color="teal" onClick={renderAddDriver}>Tambah Driver</button> */}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Store Info</p>
              <Form >
                <Form.Field>
                  <label>Nama Perusahaan</label>
                  <Form.Input placeholder="Nama Perusahaan" onChange={onCompanyNameChange} value={companyName}/>
                </Form.Field>
                <Form.Field>
                  <label>Nama Toko</label>
                  <Form.Input placeholder="Nama Toko" onChange={onShopNameChange} value={shopName} />
                </Form.Field>
                <Form.Field>
                  <label>Telepon</label>
                  <Form.Input placeholder="Telepon" onChange={onPhoneChange} value={phoneNumber}/>
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <Form.Input placeholder="Email" onChange={onShopEmailChange} value={shopEmail}/>
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
                  <Form.Input fluid label="Provinsi" placeholder="Provinsi" onChange={onProvinceChange} value={province}/>
                  <Form.Input fluid label="Kecamatan" placeholder="Kecamatan" onChange={onDistricChange} value={District}/>
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input fluid label="Kelurahan" placeholder="Kelurahan" onChange={onSubDistricChange} value={subDistrict} />
                  <Form.Input fluid label="Kota" placeholder="Kota" onChange={onCityChange} value={city}/>
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input fluid label="Kode Pos" placeholder="Kode Pos" onChange={onPostalChange} value={postal_code} />
                </Form.Group>
                <Form.TextArea label="Alamat" placeholder="Alamat" onChange={onAddressChange} value={address}/>
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
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            ><Icon name="upload"/> Upload Files
            </Button>
            &nbsp;
            <div className="image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Image src={image.dataURL} alt="" size="small" />
                <div className="image-item__btn-wrapper">
                  <Button color="teal" onClick={() => onImageUpdate(index)}><Icon name="redo" style={{margin:0}}/></Button>
                  <Button color="red" onClick={() => onImageRemove(index)} ><Icon name="trash" style={{margin:0}}/></Button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </ImageUploading>
                  <p className="title-image">Foto Daftar Harga</p>
                </div>
                {/* <div className="image-content">
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
                  <Form.Input onChange={onChangeSocialLink} value={social_link}/>
                </Form.Field>
                <Form.Field>
                  <label>Youtube</label>
                  <Form.Input onChange={onChangeSocialLink1} value={social_link1}/>
                </Form.Field>
                <Form.Field>
                  <label>Twitter</label>
                  <Form.Input onChange={onChangeSocialLink2} value={social_link2}/>
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Button color="teal" floated="right" size="medium" style={{ width: 100 }}>
        create
      </Button> */}
    </Form>
  );
};

export interface DataMitraFormProps {
    onSubmit: (
      name: string,
      email: string,
      no_nik:string,
      npwp:string,
      companyName:string,
      shopName:string,
      shopEmail:string,
      phoneNumber:string,
      province:string,
      District:string,
      subDistrict:string,
      city:string,
      postal_code:string
    ) => void;
    isLoading?: boolean;
  }

  export default DataMitraForm;