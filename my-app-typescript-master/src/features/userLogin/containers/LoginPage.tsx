import React from "react";
import { Container, Header, Image } from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginCredential } from "../models";
import { logUserIn } from "../user.reducer";
import { RootState } from "../../../app/store";
import LogoImg from "../../../assets/image/logo_ngucek.png";
// import "../containers/login.css";


const UserLoginPage = () => {
  // hooks
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  const onSubmit = (username: string, password: string) => {
    dispatch(
      logUserIn({
        username,
        password,
      } as LoginCredential)
    );
  };

  if (userState.token) {
    return <Redirect to="/data-test" />;
  }

  return (
    <div className="outer-main">
    <Container>
      <Header as="h1" textAlign="center" className="app-header">
        <Image src={LogoImg} className="app-logo" alt="ngucek-logo"></Image>
      </Header>
      <div className="app-content">
        <h4 className="form-title">
          Sign in to start app
        </h4>
          <LoginForm isLoading={userState.isLoading} onSubmit={onSubmit} />
      </div>
    </Container>
  </div>
  );
};

export default UserLoginPage;
