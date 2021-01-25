import React, { useState } from "react";
import { Button, Container, Form, Grid, Menu, TextArea } from "semantic-ui-react";

const OrderDetailPageNgucek = () => {
    const optionStatus = [
        { key: "accept", text: "Diterima", value: "diterima" },
        { key: "denied", text: "Ditolak", value: "ditolak" },
        { key: "noresponse", text: "Belum ada Tanggapan", value: "norespon" },
      ];
    const [statusOrder, setStatusOrder] = useState("");
    const [driver,setDriver] = useState("");

    const handleStatusChange = (e: any, data: any) => {
      setStatusOrder(data.value);
      console.log(data.value);
    };

    const handleDriverChange = (e: any, data: any) => {
      setDriver(data.value);
      console.log(data.value);
    };

    const optionDriver = [{

    }];
  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Detail - Order</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Cancel</Button>
          </Menu.Item>
          <Menu.Item>
            <Button color="teal">Save</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Form>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Data Customer</p>
                <Form>
                  <Form.Field>
                    <label>Nama</label>
                    <input placeholder="Nama" readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Waktu Order</label>
                    <input placeholder="" readOnly />
                  </Form.Field>
                  <Form.Field>
                  <label>No Telepon</label>
                  <input placeholder="No Telepon" readOnly/>
                </Form.Field>
                <Form.TextArea label="Alamat" placeholder="" readOnly />
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" readOnly/>
                </Form.Field>
                </Form>
              </div>

              <div className="form-content">
                <p className="title-content">Data Driver</p>
                <Form>
                  {/* <Form.Field>
                    <label>Nama</label>
                    <input placeholder="Nama" readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>No Telepon</label>
                    <input placeholder="No Telepon" readOnly />
                  </Form.Field>
                <Form.TextArea label="Alamat" placeholder="" readOnly />
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" readOnly/>
                </Form.Field> */}
                        <Form.Dropdown
                    label="Pilih Driver"
                    placeholder="Driver"
                    options={optionDriver}
                    selection
                    onChange={handleDriverChange}
                    value={driver}
                    defaultSelectedLabel={driver}
                  />
                </Form>
              </div>
            </Grid.Column>
            <Grid.Column>
            <div className="form-content">
                <p className="title-content">Data Mitra</p>
                <Form>
                  <Form.Field>
                    <label>Nama</label>
                    <input placeholder="Nama" readOnly />
                  </Form.Field>
                  <Form.Field>
                  <label>No Telepon</label>
                  <input placeholder="No Telepon" readOnly/>
                </Form.Field>
                <Form.TextArea label="Alamat" placeholder="" readOnly />
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" readOnly/>
                </Form.Field>
                </Form>
              </div>

              <div className="form-content">
                  <p className="title-content">Data Order</p>
                  <Form>
                  <Form.TextArea label="Kategori / Service / Jumlah" placeholder="" readOnly />
                  <Form.Field>
                    <label>Waktu Order</label>
                    <input placeholder="" readOnly />
                  </Form.Field>
                  <Form.Field>
                  <label>Status Pembayaran</label>
                  <input placeholder="" readOnly/>
                </Form.Field>
                <Form.Dropdown
                    label="Status Pesanan"
                    placeholder="Pilih Status"
                    options={optionStatus}
                    selection
                    onChange={handleStatusChange}
                    value={statusOrder}
                    defaultSelectedLabel={statusOrder}
                  />
                <Form.Field>
                  <label>Perubahan Status Pesanan dibuat:</label>
                  <input placeholder="Perubahan Status" readOnly/>
                </Form.Field>
                <Form.TextArea label="Keterangan" placeholder=""/>
             
                </Form>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

export default OrderDetailPageNgucek;
