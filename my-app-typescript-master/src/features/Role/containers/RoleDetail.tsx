import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Container, Form, InputOnChangeData, List, Menu, Radio } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import "../containers/Role.css";
import { getDataRoleSingle } from "../role.reducer";

const RoleDetail = () => {
    const [name, setName] = useState('');
    const [checklist,setChecklist] = useState<Array<String>>([]);
    const dispatch = useDispatch();

    const RoleState = useSelector((state:RootState) => state.role.single);

    let history = useHistory();
    const search = history.location.search;
    const params = new URLSearchParams(search);
    const paramID = params.get("id") ?? "";
      useEffect(() => {
        dispatch(getDataRoleSingle(paramID));
      }, []);

      useEffect(() => {
          if(RoleState !== undefined){
              setName(RoleState.roles);
          }
      }, [RoleState !== undefined]);

    const onNameChange = (e:ChangeEvent<HTMLInputElement>,{value} :InputOnChangeData) => {
        setName(value);
        console.log(value);
      }
    
      const checkItem = (item:string) =>{
        let newArr = [];
        if(!checklist.includes(item)){
          newArr = [...checklist, item];
        }else{
          newArr = checklist.filter((a) => a !== item);
        }
    
        setChecklist(newArr);
        console.log(newArr);
      }
      
    return(
    <Container fluid>
     <Form>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master Roles</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/Role">Back</Button>
          </Menu.Item>
          {/* <Menu.Item>
            <Button color="teal">Save</Button>
          </Menu.Item> */}
        </Menu.Menu>
      </Menu>

      <div className="form-content">
          <Form.Field inline>
            <label>Role Name</label>
            <Form.Input placeholder="Nama" value={name} style={{ minWidth: 350 }} onChange={onNameChange} readOnly />
          </Form.Field>
      </div>
      <div className="form-content">
      <div className="card-content-item">
          <Card>
            <Card.Content>
              <div className="title-card">
                <Radio toggle id="master-service-toggle" onClick={()=> checkItem("Master-service")}/>
                <h3>Master Service</h3>
              </div>
            </Card.Content>
            <Card.Content>
              <List>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="view-toggle" onClick={() => checkItem("View")}/>
                    <h3>View</h3>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="delete-toggle" onClick={() => checkItem("Delete")}/>
                    <h3>Delete</h3>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="create-toggle" onClick={() => checkItem("Create")}/>
                    <h3>Create</h3>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="update-toggle" onClick={() => checkItem("Update")}/>
                    <h3>Update</h3>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="copy-toggle" onClick={() => checkItem("Copy")}/>
                    <h3>Copy</h3>
                  </div>
                </List.Item>
              </List>
            </Card.Content>
          </Card>
        </div>

        <div className="card-content-item">
          <Card>
            <Card.Content>
              <div className="title-card">
                <Radio toggle id="master-category-service" onClick={() => checkItem("Master-category-layanan")}/>
                <h3>Master Kategori Layanan</h3>
              </div>
            </Card.Content>
            <Card.Content>
              <List>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="category-service-view" onClick={() => checkItem("category-service-view")}/>
                    <h3>View</h3>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="category-service-delete" onClick={() => checkItem("category-service-delete")}/>
                    <h3>Delete</h3>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="category-service-create" onClick={() => checkItem("category-service-create")}/>
                    <h3>Create</h3>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="category-service-update" onClick={() => checkItem("category-service-update")}/>
                    <h3>Update</h3>
                  </div>
                </List.Item>
                <List.Item>
                  <div className="title-card">
                    <Radio toggle id="category-service-copy" onClick={() => checkItem("category-service-copy")}/>
                    <h3>Copy</h3>
                  </div>
                </List.Item>
              </List>
            </Card.Content>
          </Card>
        </div>
      </div>
      </Form>
        </Container>
    );
}

export default RoleDetail