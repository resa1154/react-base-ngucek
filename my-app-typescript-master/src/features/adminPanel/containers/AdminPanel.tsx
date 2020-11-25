import React, { MouseEventHandler, useState } from "react";
import Header from "../components/Header";
import { Menu, Image, List, Accordion, Icon } from "semantic-ui-react";
import { Switch, Route, NavLink } from "react-router-dom";
import Logo from "../../../assets/image/logo_ngucek_horizontal.png";
import Dashboard from "../../Dashboard/containers/DashboardPage";
import Mitra from "../../Mitra/containers/MitraPage";
import Kurir from "../../Kurir/containers/KurirPage";
import MitraDetail from "../../Mitra/containers/MitraDetailPage";
import MitraCreate from "../../Mitra/containers/MitraCreate";
import KurirDetail from "../../Kurir/containers/KurirDetailPage";

// import "../containers/LeftMenu.css";

const AdminPanel = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [activeIndex, setActiveIndex] = useState(0);

  const state = { activeIndexs: [] };

  const handleItemClick = () => {
    setActiveItem(activeItem);
  };

  // const handleClick = (e:any, titleProps:any) => {
  //   const { index } = titleProps;
  //   const { activeIndexs } = state;
  //   const newIndex = activeIndexs;

  //   const currentIndexPosition = activeIndexs.indexOf(index);
  //   if (currentIndexPosition > -1) {
  //     newIndex.splice(currentIndexPosition, 1);
  //   } else {
  //     newIndex.push(index);
  //   }

  //   e.setState({ activeIndexs: newIndex });
  // };

  

  return (
    <div>
      <Header />
      <div className="left-menus">
        <Menu>
          <NavLink className="item" activeClassName="active" exact to="/Admin">
            <Image src={Logo} rounded size="small"></Image>
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/Username">
            <List horizontal>
              <List.Item>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
                />
                <List.Content>Username</List.Content>
              </List.Item>
            </List>
          </NavLink>
        </Menu>
        <Menu>
          <NavLink to="/Mitra" activeClassName="active" className="item" exact>
            Mitra
          </NavLink>
          <NavLink to="/Kurir" activeClassName="active" className="item" exact>Kurir</NavLink>
     
          {/* <Menu.Item
            as="a"
            name="table"
            active={activeItem === "table"}
            onClick={this.handleItemClick}
          >
           
            <Accordion className="dropdown-menus">
              <Accordion.Title
         
              >
                Table
                <Icon name="dropdown" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <List>
                  <List.Item>
                    {" "}
                    <Menu.Item
                      as={"a"}
                      name="table1"
                        active={activeItem === "table1"}
                        onClick={this.handleItemClick}
                    >
                   
                      Table View 1
                    </Menu.Item>
                  </List.Item>
                  <List.Item>
                    {" "}
                    <Menu.Item
                      as="a"
                      name="table1"
                        active={activeItem === "table1"}
                        onClick={this.handleItemClick}
                    >
                      Table View 2
                    </Menu.Item>
                  </List.Item>
                </List>
              </Accordion.Content>
            </Accordion>
          </Menu.Item> */}
          <NavLink to="/Form" activeClassName="active" className="item">Form</NavLink>
        </Menu>
        <Menu>
          <NavLink to="/Profil" activeClassName="active" className="item">Profil</NavLink>
          <NavLink to="/Setting" activeClassName="active" className="item">General Setting</NavLink>
          <NavLink to="/Login" className="item">Log Out</NavLink>
        </Menu>
      </div>
      <div className="main-container">
        <Switch>
          <Route path="/Admin" component={Dashboard} />
          <Route path="/Mitra" component={Mitra} />
          <Route path="/MitraDetail" component={MitraDetail} />
          <Route path="/MitraCreate" component={MitraCreate}/>
          <Route path="/Kurir" component={Kurir} />
          <Route path="/KurirDetail" component={KurirDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminPanel;
