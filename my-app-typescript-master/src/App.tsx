import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./features/userLogin/containers/LoginPage";
import DataTestPage from "./features/dataTest/containers/DataTestPage";
import AdminPage from "./features/adminPanel/containers/AdminPanel";
import "semantic-ui-css/semantic.min.css";
import "./assets/css/login.css";
import "./features/adminPanel/containers/LeftMenu.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login">
            <LoginPage />
          </Route>
          <Route path="/data-test">
            <DataTestPage />
          </Route>
          <Route path="/">
            <AdminPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
