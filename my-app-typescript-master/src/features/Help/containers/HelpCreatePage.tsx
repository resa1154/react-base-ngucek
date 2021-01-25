import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  Icon,
  Menu,
  Image,
} from "semantic-ui-react";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import ImageUploading, { ImageListType } from "react-images-uploading";
import "../containers/help.css";

const HelpCreatePage = () => {
  const handleEditorChange = (content: any, editor: any) => {
    console.log("Content was updated:", content);
  };

  //Initial State Images
  const [images_upload, setImagesUpload] = useState([]);

  const onImageCardChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImagesUpload(imageList as never[]);
  };

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master - Help</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/HelpAdmin">
              Cancel
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button color="teal">Save</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Help Info</p>
              <Form>
                <Form.Field>
                  <label>Judul</label>
                  <Form.Input placeholder="" />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <Editor
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                    }}
                    onEditorChange={handleEditorChange}
                  />
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Help Photos</p>
              <Image.Group className="image-container">
                <div className="image-content" style={{"width":"100%"}}>
                  <ImageUploading
                    multiple
                    value={images_upload}
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
                        <Button className="btn-help-add"
                          style={isDragging ? { color: "red"} : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <Icon name="upload" /> Add Photos
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
                  {/* <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    size="small"
                  /> */}
                </div>
              </Image.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default HelpCreatePage;
