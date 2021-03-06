import React, { MouseEventHandler, useState } from "react";
import Header from "../components/Header";
import { Menu, Image, List, Accordion, Icon, Button } from "semantic-ui-react";
import { Switch, Route, NavLink } from "react-router-dom";
import Logo from "../../../assets/image/logo_ngucek_horizontal.png";
import Dashboard from "../../Dashboard/containers/DashboardPage";
import Mitra from "../../Mitra/containers/MitraPage";
import Kurir from "../../Kurir/containers/KurirPage";
import MitraDetail from "../../Mitra/containers/MitraDetailPage";
import MitraCreate from "../../Mitra/containers/MitraCreate";
import KurirCreate from "../../Kurir/containers/KurirCreatePage";
import KurirDetail from "../../Kurir/containers/KurirDetailPage";
import ServiceCategory from "../../ServiceCategory/containers/ServiceCategoryPage";
import ServiceCategoryDetail from "../../ServiceCategory/containers/ServiceCategoryDetail";
import ServiceCategoryCreate from "../../ServiceCategory/containers/ServiceCreateCategory";
import Service from "../../ServiceCategory/containers/Service";
import ServiceCreate from "../../ServiceCategory/containers/ServiceCreate";
import ServiceDetail from "../../ServiceCategory/containers/ServiceDetail";
import Store from "../../Store/containers/Store";
import StoreSetting from "../../Store/containers/StoreSetting";
import MitraSurveyor from "../../Mitra/containers/MitraSurveyor";
import RoleSystem from "../../Role/containers/RolePage";
import RoleSystemDetail from "../../Role/containers/RoleDetail";
import RoleSystemCreate from "../../Role/containers/RoleCreate";
import UserSystem from "../../User/containers/UserPage";
import UserSystemCreate from "../../User/containers/UserCreate";
import Customer from "../../Customer/containers/CustomerPage";
import CustomerDetail from "../../Customer/containers/CustomerDetailPage";
import CustomerCreate from "../../Customer/containers/CustomerCreate";
import CustomerUpdate from "../../Customer/containers/CustomerUpdatePage";
import OrderReguler from "../../Order/containers/OrderPage";
import OrderRegulerDetail from "../../Order/containers/OrderDetailPage";
import OrderEksklusif from "../../Order/containers/OrderPageNgucek";
import OrderEksklusifDetail from "../../Order/containers/OrderDetailPageNgucek";
import HelpPage from "../../Help/containers/HelpPage"; 
import HelpCreate from "../../Help/containers/HelpCreatePage";
import HelpDetail from "../../Help/containers/HelpDetailPage";
import TermsandCondition from "../../Setting/containers/TermsandConditionsPage";
import TermsandConditionsCreate from "../../Setting/containers/TermsandConditonsCreatePage";
import TermsandConditionsDetail from "../../Setting/containers/TermsandConditionDetailPage";

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

  const logOutUser = () => {
    localStorage.removeItem("__ngucekuser");
  }
  

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
          <a onClick={logOutUser} href="/Login" className="item">Log Out</a>
        </Menu>
      </div>
      <div className="main-container">
        <Switch>
          <Route path="/Admin" component={Dashboard} />
          <Route path="/Mitra" component={Mitra} />
          <Route path="/MitraDetail" component={MitraDetail} />
          <Route path="/MitraCreate" component={MitraCreate}/>
          <Route path="/Kurir" component={Kurir} />
          <Route path="/KurirCreate" component={KurirCreate}/>
          <Route path="/KurirDetail" component={KurirDetail} />
          <Route path="/ServiceCategory" component={ServiceCategory}/>
          <Route path="/ServiceCategoryDetail" component={ServiceCategoryDetail}/>
          <Route path="/ServiceCategoryCreate" component={ServiceCategoryCreate}/>
          <Route path="/Service" component={Service}/>
          <Route path="/ServiceCreate" component={ServiceCreate}/>
          <Route path="/ServiceDetail" component={ServiceDetail}/>
          <Route path="/Store" component={Store}/>
          <Route path="/StoreSetting" component={StoreSetting}/>
          <Route path="/MitraSurveyor" component={MitraSurveyor}/>
          <Route path="/Role" component={RoleSystem}/>
          <Route path="/RoleCreate" component={RoleSystemCreate}/>
          <Route path="/RoleDetail" component={RoleSystemDetail}/>
          <Route path="/User" component={UserSystem}/>
          <Route path="/UserCreate" component={UserSystemCreate} />
          <Route path="/Customer" component={Customer}/>
          <Route path="/CustomerDetail" component={CustomerDetail}/>
          <Route path="/CustomerCreate" component={CustomerCreate}/>
          <Route path="/CustomerUpdate" component={CustomerUpdate}/>
          <Route path="/Order" component={OrderReguler}/>
          <Route path="/OrderDetail" component={OrderRegulerDetail}/>
          <Route path="/OrderEksklusif" component={OrderEksklusif}/>
          <Route path="/OrderDetailEksklusif" component={OrderEksklusifDetail}/>
          <Route path="/HelpAdmin" component={HelpPage}/>
          <Route path="/HelpAdminCreate" component={HelpCreate}/>
          <Route path="/HelpDetail" component={HelpDetail}/>
          <Route path="/Syarat" component={TermsandCondition}/>
          <Route path="/SyaratCreate" component={TermsandConditionsCreate}/>
          <Route path="/SyaratDetail" component={TermsandConditionsDetail}/>
        </Switch>
      </div>
    </div>
  );
};

export default AdminPanel;
