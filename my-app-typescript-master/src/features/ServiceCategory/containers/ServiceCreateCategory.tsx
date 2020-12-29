import React, { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategoryModel } from "../model";
import {createServiceCategory} from "../service.reducer";
import { RootState } from "../../../app/store";

const ServiceCreateCategory = ({ isLoading = false}:DataServiceFormProps) => {
  let history = useHistory();
  const [imgCategory, setImgCategory] = useState([]);

  //initial state form
  const [id, setId] = useState(Number);
  const [no, setName] = useState(Number);
  const [categoryname,  setCategoryName] = useState("");
  const [headcategory, setHeadCategory] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");

  const option = [
    {key:"kilat", text:"Layanan Kilat", value:"kilat"},
    {key:"express", text:"Layanan Express", value:"express"},
    {key:"biasa", text:"Layanan Biasa", value:"biasa"}
];
  const optionStatus = [{ key: "request", text: "Request", value: "request" },
  { key: "verified", text: "Verified", value: "verified" },
  { key: "survey", text: "Survey", value: "survey" },
  { key: "approved", text: "Approved", value: "approved" },
  { key: "rejected", text: "Rejected", value: "rejected" }];

  const dispatch = useDispatch();
  const ServiceState = useSelector((state:RootState)=> state.services);

  const onImageCardChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImgCategory(imageList as never[]);
  };

  const onCategoryNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setCategoryName(value);
  };

  const HeadCategoryChange = (e: any, data: any) => {
    setHeadCategory(data.value);
    console.log(data.value);
  };

  const onNoteChange = (e: ChangeEvent<HTMLTextAreaElement>, {value}:any) =>{
    setNote(value);
  }

  const StatusChange = (e: any, data: any) => {
    setStatus(data.value);
    console.log(data.value);
  };

  const onSubmit = (
    id:number,
    no:number,
    categoryname: string,
    headcategory: string,
    note: string,
    status: string
  ) => {
    dispatch(createServiceCategory({
      id : 3,
      no : 3,
      categoryname,
      headcategory,
      note,
      status,
    } as ServiceCategoryModel ));
    console.log("input data")
  }

  const handleSubmit = () => {

  }

  return (
    <Container fluid>
      <Form id="form-input" loading={isLoading} onSubmit={() => onSubmit(id,no, categoryname, headcategory, note, status)}>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master Data - Service Category</h3>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/ServiceCategory">
              Cancel
            </Button>
          </Menu.Item>

          <Menu.Item>
            {/* <Button color="teal" as={Link} to="/Mitra">Verify</Button> */}
            {/* <Button color="teal" >
              Save
            </Button> */}
            <Button color="teal" onClick={() => {
            history.push("/ServiceCategory");
          }} >Save</Button>
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
                  <Form.Input placeholder="Name" value={categoryname} onChange={onCategoryNameChange}/>
                </Form.Field>
                <Form.Dropdown
                  fluid
                  label="Head Category"
                  options={option}
                  placeholder="Pilih Kategori"
                  selection
                  onChange={HeadCategoryChange}
                  value={headcategory}
                  defaultSelectedLabel={headcategory}
                />
                <Form.TextArea label="Note" placeholder="Catatan" onChange={onNoteChange}/>
                <Form.Dropdown
                  fluid
                  label="Status"
                  options={optionStatus}
                  placeholder="Pilih Status"
                  selection
                  onChange={StatusChange}
                  value={status}
                  defaultSelectedLabel={status}
                />
             
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Category Photos</p>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Form>
    </Container>
  );
};

interface DataServiceFormProps {
  onSubmit: (
    id:number,
    no:number,
    categoryname: string,
    headcategory: string,
    note: string,
    status: string
  ) => void;
  isLoading?: boolean;
}

export default ServiceCreateCategory;
