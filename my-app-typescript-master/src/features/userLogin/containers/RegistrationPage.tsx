import React from "react";
import { useState } from "react";
import { Container, Header, Image } from "semantic-ui-react";
import LogoImg from "../../../assets/image/logo_ngucek.png";

const RegistrationPage = ({ isLoading = false, ...props }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="outer-main">
      <Container>
        <Header as="h1" textAlign="center" className="app-header">
          <Image src={LogoImg} className="app-logo" alt="ngucek-logo"></Image>
        </Header>
      </Container>
    </div>
  );
};

export default RegistrationPage;
