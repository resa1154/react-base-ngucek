import React, { ChangeEvent, useState } from "react";
import {
  Container,
  Menu,
  Button,
  Grid,
  Form,
  Image,
  Icon,
  InputOnChangeData,
} from "semantic-ui-react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { createServices } from "../service.reducer";
import { ServicesModel } from "../model";

const ServiceCreate = ({ isLoading = false }: DataServicesFormProps) => {
  const [imgCategory, setImgCategory] = useState([]);
  const dispatch = useDispatch();

  const option = [
    { key: "kilat", text: "Layanan Kilat", value: "kilat" },
    { key: "express", text: "Layanan Express", value: "express" },
    { key: "biasa", text: "Layanan Biasa", value: "biasa" },
  ];

  const optionUnit = [
    {
      key: 1,
      text: "/Kg",
      value: "kg",
    },
    {
      key: 2,
      text: "/Pcs",
      value: "pcs",
    },
    {
      key: 3,
      text: "/Psg",
      value: "psg",
    },
    {
      key: 4,
      text: "/M",
      value: "m",
    },
  ];

  const optionStatus = [
    { key: "request", text: "Request", value: "request" },
    { key: "verified", text: "Verified", value: "verified" },
    { key: "survey", text: "Survey", value: "survey" },
    { key: "approved", text: "Approved", value: "approved" },
    { key: "rejected", text: "Rejected", value: "rejected" },
  ];

  //initial State
  const [id, setId] = useState(Number);
  const [no, setName] = useState(Number);
  const [servicesname, setServicesName] = useState("");
  const [headcategory, setHeadCategory] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [partnercommision, setPartnerCommision] = useState("");
  const [unitcategory, setUnitCategory] = useState("");

  const ServiceState = useSelector((State: RootState) => State.services);

  const onImageCardChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImgCategory(imageList as never[]);
  };
  const onServiceNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setServicesName(value);
  };
  const onHeadCategoryChange = (e: any, data: any) => {
    setHeadCategory(data.value);
  };
  const onUnitCategoryChange = (e: any, data: any) => {
    setUnitCategory(data.value);
  };
  const onDescriptionChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    { value }: any
  ) => {
    setDescription(value);
  };
  const onNoteChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    { value }: any
  ) => {
    setNote(value);
  };
  const onStatusChange = (e: any, data: any) => {
    setStatus(data.value);
  };
  const onPriceChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setPrice(value);
  };
  const onPartnerChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setPartnerCommision(value);
  };

  const onSubmit = (
    id: number,
    no: number,
    servicesname: string,
    headcategory: string,
    description: string,
    note: string,
    price: string,
    partnercomission: string
  ) => {
    dispatch(
      createServices({
        id: 3,
        no: 3,
        servicesname,
        headcategory,
        description,
        note,
        price,
        partnercomission,
      } as ServicesModel)
    );
  };

  return (
    <Container fluid>
      <Form
        loading={isLoading}
        onSubmit={() =>
          onSubmit(
            id,
            no,
            servicesname,
            headcategory,
            description,
            note,
            price,
            partnercommision
          )
        }
      >
        <Menu secondary className="menu-header">
          <Menu.Item>
            <h3 className="h3">Master Data - Service</h3>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Button color="teal" as={Link} to="/Service">
                Cancel
              </Button>
            </Menu.Item>

            <Menu.Item>
              {/* <Button color="teal" as={Link} to="/Mitra">Verify</Button> */}
              <Button color="teal">Save</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Grid>
          <Grid.Row columns={2} only="computer">
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Category Info</p>
                <Form.Field>
                  <label>Nama</label>
                  <Form.Input
                    placeholder="Name"
                    onChange={onServiceNameChange}
                  />
                </Form.Field>
                <Form.Dropdown
                  fluid
                  label="Category"
                  options={option}
                  selection
                  placeholder="Auto Complete.."
                  onChange={onHeadCategoryChange}
                  value={headcategory}
                  defaultSelectedLabel={headcategory}
                />
                <Form.Dropdown
                  fluid
                  label="Satuan"
                  options={optionUnit}
                  selection
                  placeholder="Pilih Satuan"
                  onChange={onUnitCategoryChange}
                  value={unitcategory}
                  defaultSelectedLabel={unitcategory}
                />
                <Form.Field>
                  <label>Batasan Pengerjaan</label>
                  <div className="group-input">
                  <Form.Input
                    placeholder="Batas Pengerjaan"
                    onChange={onServiceNameChange}
                  />
                  <span>Hari</span>
                  </div>
                </Form.Field>
                <Form.TextArea
                  label="Description"
                  placeholder=""
                  onChange={onDescriptionChange}
                />
                <Form.TextArea
                  label="Note"
                  placeholder=""
                  onChange={onNoteChange}
                />
                <Form.Dropdown
                  fluid
                  label="Status"
                  options={optionStatus}
                  placeholder="Aktif"
                  selection
                  onChange={onStatusChange}
                  value={status}
                  defaultSelectedLabel={status}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Service Photos</p>
                <Image.Group className="image-container">
                  <div className="image-content">
                    <ImageUploading
                      multiple
                      value={imgCategory}
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
                  </div>
                </Image.Group>
              </div>
              <div className="form-content">
                <p className="title-content">Pricing</p>
                <Form.Field>
                  <label>Price</label>
                  <Form.Input placeholder="" onChange={onPriceChange} />
                </Form.Field>
                <Form.Field>
                  <label>Partner Commission (%)</label>
                  <Form.Input placeholder="" onChange={onPartnerChange} />
                </Form.Field>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

interface DataServicesFormProps {
  onSubmit: (
    id: number,
    no: number,
    servicesname: string,
    headcategory: string,
    description: string,
    note: string,
    price: string,
    partnercomision: string
  ) => void;
  isLoading?: boolean;
}

export default ServiceCreate;
