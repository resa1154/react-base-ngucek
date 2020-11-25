import React from "react";
import {Menu, Button, Icon } from "semantic-ui-react";
import "../components/Header.css";

const Header = () => {
    return (
      <div className="header-container">
        <Menu secondary>
          <Menu.Item>
            <Button as="a" className="notification-header">
              <Icon name="align left"></Icon>
            </Button>
          </Menu.Item>
          {/* <Menu/> */}
          <Menu.Menu position="right">
            <Menu.Item>
              <Button as="a" className="notification-header">
                <Icon name="bell"></Icon>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );

};

export default Header
