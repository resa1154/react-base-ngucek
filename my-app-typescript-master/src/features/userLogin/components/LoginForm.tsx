import React, { ChangeEvent, useState } from "react";
import {
  Button,
  Form,
  Header,
  InputOnChangeData,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";


const LoginForm = ({ isLoading = false, ...props }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setUsername(value);
  };

  const onPasswordChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setPassword(value);
  };

  return (
    <Form loading={isLoading} onSubmit={() => props.onSubmit(username, password)}>
    <Form.Input
      placeholder="Username"
         onChange={onUsernameChange}
         value={username}
     />
     <Form.Input placeholder="password" type="password" onChange={onPasswordChange} value={password}></Form.Input>
    {/* <Form.Field>
      <input placeholder="Password" type="password" onChange={onPasswordChange} value={password}></input>
    </Form.Field> */}

    <Button className="btn-login">
      Sign
    </Button>
  </Form>
    // <Form
    //   loading={isLoading}
    //   size="large"
    //   onSubmit={() => props.onSubmit(username, password)}
    // >
    //   <Segment stacked style={{ minHeight: 210 }}>
    //     <Header as="h3">Login</Header>
    //     <Form.Input
    //       fluid
    //       icon="user"
    //       iconPosition="left"
    //       placeholder="E-mail address"
    //       onChange={onUsernameChange}
    //       value={username}
    //     />
    //     <Form.Input
    //       fluid
    //       icon="lock"
    //       iconPosition="left"
    //       placeholder="Password"
    //       type="password"
    //       onChange={onPasswordChange}
    //       value={password}
    //     />

    //     <Link to="/forgot-password" style={{ float: "left" }}>
    //       Forgot Password?
    //     </Link>

    //     <Button
    //       color="teal"
    //       floated="right"
    //       size="medium"
    //       style={{ width: 100 }}
    //     >
    //       Login
    //     </Button>
    //   </Segment>
    // </Form>
  );
};

export interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  isLoading?: boolean;
}

export default LoginForm;
