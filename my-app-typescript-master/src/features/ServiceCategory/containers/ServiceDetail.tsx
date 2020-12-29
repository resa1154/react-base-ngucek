import React, {useEffect, useState} from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Container, Menu, Button, Modal, Form, Grid, Image } from "semantic-ui-react";
import Viewer from "react-viewer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getServicesSingle } from "../service.reducer";

const ServiceDetail = () => {
    const [open, setOpen] = useState(false);
    const [imgVisible, setImgVisible] = useState(false);
 
    
    const [servicesname,setServicesName] = useState('');
    const [headcategory, setHeadCategory] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState('');
    const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const[partnercomission, setPartnerComission] = useState('');

    const dispatch = useDispatch();
    const ServiceState = useSelector((state:RootState) => state.services.singleservices);
    const location = useLocation();
    const idServiceCategory = location.search.substring(4);
  console.log(ServiceState);

  let history = useHistory();
const search = history.location.search;
const params = new URLSearchParams(search);
const paramID = params.get("id") ?? "";
  useEffect(() => {
    dispatch(getServicesSingle(paramID));
  }, []);

  useEffect(() => {
    if (ServiceState !== undefined) {
      setServicesName(ServiceState.servicesname);
      setHeadCategory(ServiceState.headcategory);
      setNote(ServiceState.note);
      setDescription(ServiceState.description);
      setStatus(ServiceState.status);
      setPrice(ServiceState.price);
      setPartnerComission(ServiceState.partnercommision);
    }
  }, [ServiceState !== undefined]);
  
  
    return (
      <Container fluid>
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
            {/* <Button color="teal">Reject</Button> */}
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
                  to="/Service"
                >
                  Verify
                </Button>
              </Modal.Actions>
            </Modal>
          </Menu.Item>
          <Menu.Item>
            {/* <Button color="teal" as={Link} to="/Mitra">Verify</Button> */}
            <Button color="teal" as={Link} to="/Service">
              Verify
            </Button>
          </Menu.Item>
        </Menu.Menu>
        </Menu>
  
        <Form>
        <Grid>
          <Grid.Row columns={2} only="computer">
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Category Info</p>
                  <Form.Field>
                    <label>Nama</label>
                    <Form.Input placeholder="Name" value={servicesname} readOnly/>
                  </Form.Field>
                  <Form.Field>
                    <label>Category</label>
                    <Form.Input placeholder="Category" value={headcategory} readOnly/>
                  </Form.Field>
                  <Form.TextArea label="Description" placeholder=""  value={description} readOnly/>
                  <Form.TextArea label="Note" placeholder="" value={note} readOnly/>
                  <Form.Field>
                    <label>Status</label>
                    <Form.Input placeholder="Status" value={status} readOnly/>
                  </Form.Field>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Service Photos</p>
                <Image.Group className="image-container">
                  <div className="image-content">
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
                </Image.Group>
              </div>
              <div className="form-content">
                  <p className="title-content">Pricing</p>
                  <Form.Field>
                    <label>Price</label>
                    <Form.Input placeholder="" value={price} readOnly/>
                  </Form.Field>
                  <Form.Field>
                    <label>Partner Commission (%)</label>
                    <Form.Input placeholder="" value={partnercomission} readOnly/>
                  </Form.Field>
              </div>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Form>
      </Container>
    );
}

export default ServiceDetail