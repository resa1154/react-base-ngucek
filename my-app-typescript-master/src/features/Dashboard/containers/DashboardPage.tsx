import React from "react";
import { Container, Grid, Icon, Card } from "semantic-ui-react";
import "../containers/Dashboard.css";
import {RadialChart} from "react-vis";

const DashboardPage = () =>{
const myData = [{angle:2, label:"Paket 1"}, {angle:3, label:"Paket 2"}]

    return(
        <Container fluid>
        <div className="container-content">
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column computer={4} tablet={8}>
                <div className="small-box user-box">
                  <div className="main-box">
                    <div className="icon">
                      <Icon name="user" className="icon-box"></Icon>
                    </div>
                    <div className="inner">
                      <h3>15</h3>
                      <p>Mitra</p>
                    </div>
                  </div>

                  <a href="#" className="small-box-footer">
                    View Detail{" "}
                    <Icon name="arrow alternate circle right outline"></Icon>
                  </a>
                </div>
              </Grid.Column>
              <Grid.Column computer={4} tablet={8}>
                <div className="small-box customer-box">
                  <div className="main-box">
                    <div className="icon">
                      <Icon name="users" className="icon-box"></Icon>
                    </div>
                    <div className="inner">
                      <h3>120</h3>
                      <p>Customer</p>
                    </div>
                  </div>

                  <a href="#" className="small-box-footer">
                    View Detail{" "}
                    <Icon name="arrow alternate circle right outline"></Icon>
                  </a>
                </div>
              </Grid.Column>
              <Grid.Column computer={4} tablet={8}>
                <div className="small-box order-box">
                  <div className="main-box">
                    <div className="icon">
                      <Icon name="chart pie" className="icon-box"></Icon>
                    </div>
                    <div className="inner">
                      <h3>270</h3>
                      <p>Order minggu ini</p>
                    </div>
                  </div>

                  <a href="#" className="small-box-footer">
                    View Detail{" "}
                    <Icon name="arrow alternate circle right outline"></Icon>
                  </a>
                </div>
              </Grid.Column>
              <Grid.Column computer={4} tablet={8}>
                <div className="small-box order-week-box">
                  <div className="main-box">
                    <div className="icon">
                      <Icon name="chart pie" className="icon-box"></Icon>
                    </div>
                    <div className="inner">
                      <h3>88</h3>
                      <p>Order Hari Ini</p>
                    </div>
                  </div>

                  <a href="#" className="small-box-footer">
                    View Detail{" "}
                    <Icon name="arrow alternate circle right outline"></Icon>
                  </a>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column computer={8} tablet={16}>
                <Card>
                  <Card.Content header="New Register this month" />
                  <Card.Content>
                    <div className="item-card">
                      <p className="title">Mitra</p>
                      <p>10</p>
                    </div>
                    <div className="item-card">
                      <p className="title">Customer</p>
                      <p>35</p>
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column computer={8} tablet={16}>
                <Card className="chart-card">
                  <Card.Content header="Penjualan Per Kategori" />
                  <Card.Content>
                    <div className="chart-card">
                      {/* <CanvasJSChart options={options}></CanvasJSChart> */}
                      <RadialChart data={myData} width={300} height={300}></RadialChart>
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    );
}

export default DashboardPage