import React, {ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Input, Menu, InputOnChangeData } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import { getDataRole } from "../../Role/role.reducer";
import { UserModel } from "../model";
import { createUser } from "../user.reducer";

const UserCreate = ({isLoading=false, ...props}) => {
    const [roleName,setRole] = useState("");
    const [name,setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const onChangeName = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
      setName(value);
      console.log(value);
    }

    const onChangeUsername = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
      setUsername(value);
      console.log(value);
    }

    const onChangePassword = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
      setPassword(value);
    }

    const onChangeConfirmPassword = (e:ChangeEvent<HTMLInputElement>, {value}:InputOnChangeData) => {
      setConfirmPassword(value);
    }

    const onVerifyPassword = () =>{
        if(password !== confirmPassword){
          console.log("password tidak sama");
          return
        }else{
          console.log("OK")
        }
    }

const RoleState = useSelector((state:RootState) => state.role.list );

const itemRoleState = RoleState ?? [];

  let rolesOptions = itemRoleState.map(function (elem: any) {
    return {
      key: elem.id,
      value: elem.roles,
      text: elem.roles,
      
    };
    console.log(elem.roles); 
  });

  useEffect(() => {
    dispatch(getDataRole());
  }, []);
  
    const handleStatusChange = (e: any, data: any) => {
        const { key } = data.options.find(
          (o: { value: any }) => o.value === data.value
        );
        dispatch(getDataRole(key));
        setRole(data.value);
        console.log(data.value);
        // setSelectedProvince(e.target.textContent);
      };

      const onSubmit = (name:string, username:string, password:string,confirmPassword:string, roles:string) => {
        dispatch(createUser({
          
        } as UserModel));
      }

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master User</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
          {/* <Menu.Item>
            <Button color="teal">Save</Button>
          </Menu.Item> */}
        </Menu.Menu>
      </Menu>
      <div className="form-content">
        <Form>
          <Form.Field>
            <label>First name</label>
            <Form.Input placeholder="First name" value={name} onChange={onChangeName}/>
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <Form.Input placeholder="Username" value={username} onChange={onChangeUsername}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input placeholder="Password" type="password" value={password} onChange={onChangePassword} onBlur={onVerifyPassword}/>
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <Form.Input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={onChangeConfirmPassword} onBlur={onVerifyPassword}/>
          </Form.Field>
          <Form.Dropdown
                  label="Roles"
                  placeholder="Pilih Role"
                  options={rolesOptions}
                  selection
                  onChange={handleStatusChange}
                  value={roleName}
                  defaultSelectedLabel={roleName}
                />
                <Button type='submit'color="teal">Save</Button>
        </Form>
      </div>
    </Container>
  );
};

export default UserCreate;
