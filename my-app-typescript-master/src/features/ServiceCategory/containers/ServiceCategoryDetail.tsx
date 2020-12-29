import React, { useEffect, useState } from "react";
import { Container, Menu, Button, Modal, Form, Grid, Image } from "semantic-ui-react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Viewer from "react-viewer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getServiceCategorySingle } from "../service.reducer";

const ServiceCategoryDetail = () => {
  const [open, setOpen] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);

  const [categoryname,setCategoryName] = useState('');
  const [headcategory, setHeadCategory] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();
  const ServiceCategoryState = useSelector((state:RootState) => state.services.single);
  const location = useLocation();
  const idServiceCategory = location.search.substring(4);
console.log(ServiceCategoryState);

let history = useHistory();
const search = history.location.search;
const params = new URLSearchParams(search);
const paramID = params.get("id") ?? "";
  useEffect(() => {
    dispatch(getServiceCategorySingle(paramID));
  }, []);

  useEffect(() => {
    if (ServiceCategoryState !== undefined) {
      setCategoryName(ServiceCategoryState.categoryname);
      setHeadCategory(ServiceCategoryState.headcategory);
      setNote(ServiceCategoryState.note);
      setStatus(ServiceCategoryState.status);
    }
  }, [ServiceCategoryState !== undefined]);
  
  return (
    <Container fluid>
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
          {/* <Menu.Item>
            
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
                  to="/ServiceCategory"
                >
                  Verify
                </Button>
              </Modal.Actions>
            </Modal>
          </Menu.Item> */}
          <Menu.Item>
            {/* <Button color="teal" as={Link} to="/Mitra">Verify</Button> */}
            <Button color="teal" as={Link} to="/ServiceCategory">
              Approved
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Grid>
        <Grid.Row columns={2} only="computer">
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Category Info</p>
              <Form>
                <Form.Field>
                  <label>Nama</label>
                  <Form.Input placeholder="Name" value={categoryname} readOnly/>
                </Form.Field>
                {/* <Form.Field>
                  <label>Head Category</label>
                  <input placeholder="Email" />
                </Form.Field> */}
                <Form.Field>
                <label>Head Category</label>
                    <Form.Input placeholder="Head Category" value={headcategory} readOnly/>
                  </Form.Field>
                <Form.TextArea label="Note" placeholder="" value={note} readOnly />
                <Form.Field>
                <label>Status</label>
                    <Form.Input placeholder="Status" value={status} readOnly/>
                  </Form.Field>
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Service Photos</p>
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
                  {/* <p className="title-image">KTP</p> */}
                </div>
              </Image.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ServiceCategoryDetail;
