import { render } from "@testing-library/react";
import React from "react";
import { Container, Tab } from "semantic-ui-react";
import "../containers/Storesetting.css";
import ShopInfo from "../components/ShopInformation";
import BankAccount from "../components/BankAccount";
import OfficeHours from "../components/HoursOperation";
import DriverInfo from "../components/InfomationDriver";

const StoreSetting = () => {
  const tabPanel = [
    { menuItem: "Informasi Toko", render: () => <Tab.Pane> <ShopInfo/> </Tab.Pane> },
    { menuItem: "Waktu Operasional", render: () => <Tab.Pane> <OfficeHours/> </Tab.Pane> },
    { menuItem: "Akun Bank", render: () => <Tab.Pane> <BankAccount/> </Tab.Pane> },
    { menuItem: "Driver", render: () => <Tab.Pane> <DriverInfo/> </Tab.Pane> },
  ];
  return (
    <Container fluid>
        <div className="tab-container">
        <Tab panes={tabPanel} />
        </div>
    </Container>
  );
};

export default StoreSetting;
