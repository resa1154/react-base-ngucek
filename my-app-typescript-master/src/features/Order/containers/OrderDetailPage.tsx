import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Grid,
  Menu,
  TextArea,
} from "semantic-ui-react";
import { RootState } from "../../../app/store";
import {
  getCustomerSingle,
  getDataCustomer,
} from "../../Customer/customer.reducer";
import { getKurirSingle } from "../../Kurir/kurir.reducer";
import { getMitraSingle } from "../../Mitra/mitra.reducer";
import { getDataOrderSingle } from "../order.reducer";

const OrderDetailPage = () => {
  const optionStatus = [
    { key: "accept", text: "Diterima", value: "diterima" },
    { key: "denied", text: "Ditolak", value: "ditolak" },
    { key: "noresponse", text: "Belum ada Tanggapan", value: "norespon" },
  ];

  const [statusOrder, setStatusOrder] = useState("");

  //DataCostumer
  const [customerName, setCustomerName] = useState("");
  const [TglOrder, setTglOrder] = useState("");
  const [customerTlp, setCustomerTlp] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  //DataMitra
  const [mitraName, setMitraName] = useState("");
  const [mitraTlp, setMitraTlp] = useState("");
  const [mitraAddress, setMitraAddress] = useState("");
  const [mitraEmail, setMitraEmail] = useState("");

  //DataDriver
  const [driverName, setDriverName] = useState("");
  const [driverTlp, setDriverTlp] = useState("");
  const [driverAddress, setDriverAddress] = useState("");
  const [driverEmail, setDriverEmail] = useState("");

  const dispatch = useDispatch();

  const handleStatusChange = (e: any, data: any) => {
    setStatusOrder(data.value);
    console.log(data.value);
  };

  const CustomerState = useSelector(
    (state: RootState) => state.customer.single
  );
  const OrderState = useSelector((state: RootState) => state.order.single);
  const KurirState = useSelector((state: RootState) => state.kurir.single);
  const MitraState = useSelector((state: RootState) => state.mitra.single);

  const ItemOrder = OrderState ?? [];

  let history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);
  const paramID = params.get("id") ?? "";

  useEffect(() => {
    dispatch(getDataOrderSingle(paramID));
    dispatch(getCustomerSingle(paramID));
    dispatch(getKurirSingle(paramID));
    dispatch(getMitraSingle(paramID));
  }, []);

  useEffect(() => {
    if (OrderState !== undefined) {
      setTglOrder(OrderState.data.tanggalOrder);
    }
  }, [OrderState !== undefined]);

  useEffect(() => {
    if (CustomerState !== undefined) {
      setCustomerName(CustomerState.fullname);
      setCustomerTlp(CustomerState.phoneNumber);
      setCustomerAddress(CustomerState.address);
      setCustomerEmail(CustomerState.email);
    }
  }, [CustomerState !== undefined]);

  useEffect(() => {
    if (KurirState !== undefined) {
      setDriverName(KurirState.name);
      setDriverTlp(KurirState.phoneNumber);
      setDriverEmail(KurirState.email);
      setDriverAddress(KurirState.address);
    }
  }, [KurirState !== undefined]);

  useEffect(() => {
    if (MitraState !== undefined) {
      setMitraName(MitraState.shopName);
      setMitraTlp(MitraState.phoneNumber);
      setMitraAddress(MitraState.address);
      setMitraEmail(MitraState.email);
    }
  }, [MitraState !== undefined]);

  const editablefield = () => {
    if (ItemOrder.status === "norespon") {
      return (
        <Form.Dropdown
          label="Status Pesanan"
          placeholder="Pilih Status"
          options={optionStatus}
          selection
          onChange={handleStatusChange}
          value={statusOrder}
          defaultSelectedLabel={statusOrder}
        />
      );
    } else {
      return (
        <Form.Field>
          <label>Status Pesanan</label>
          <input placeholder="Status Pesanan" readOnly />
        </Form.Field>
      );
    }
  };

  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Detail - Order</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/Order">
              Cancel
            </Button>
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
                    <input placeholder="Nama" readOnly value={customerName} />
                  </Form.Field>
                  <Form.Field>
                    <label>Waktu Order</label>
                    <input placeholder="" readOnly value={TglOrder} />
                  </Form.Field>
                  <Form.Field>
                    <label>No Telepon</label>
                    <input
                      placeholder="No Telepon"
                      readOnly
                      value={customerTlp}
                    />
                  </Form.Field>
                  <Form.TextArea
                    label="Alamat"
                    placeholder=""
                    value={customerAddress}
                    readOnly
                  />
                  <Form.Field>
                    <label>Email</label>
                    <input placeholder="Email" value={customerEmail} readOnly />
                  </Form.Field>
                </Form>
              </div>

              <div className="form-content">
                <p className="title-content">Data Driver</p>
                <Form>
                  <Form.Field>
                    <label>Nama</label>
                    <input
                      placeholder="Nama"
                      id="driverName"
                      value={driverName}
                      readOnly
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>No Telepon</label>
                    <input
                      placeholder="No Telepon"
                      value={driverTlp}
                      readOnly
                    />
                  </Form.Field>
                  <Form.TextArea
                    label="Alamat"
                    placeholder=""
                    value={driverAddress}
                    readOnly
                  />
                  <Form.Field>
                    <label>Email</label>
                    <input placeholder="Email" value={driverEmail} readOnly />
                  </Form.Field>
                </Form>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Data Mitra</p>
                <Form>
                  <Form.Field>
                    <label>Nama</label>
                    <input
                      placeholder="Nama"
                      id="mitraName"
                      value={mitraName}
                      readOnly
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>No Telepon</label>
                    <input placeholder="No Telepon" value={mitraTlp} readOnly />
                  </Form.Field>
                  <Form.TextArea
                    label="Alamat"
                    placeholder=""
                    value={mitraAddress}
                    readOnly
                  />
                  <Form.Field>
                    <label>Email</label>
                    <input placeholder="Email" value={mitraEmail} readOnly />
                  </Form.Field>
                </Form>
              </div>

              <div className="form-content">
                <p className="title-content">Data Order</p>
                <Form>
                  <Form.TextArea
                    label="Kategori / Service / Jumlah"
                    placeholder=""
                    readOnly
                  />
                  <Form.Field>
                    <label>Waktu Order</label>
                    <input placeholder="" readOnly />
                  </Form.Field>
                  <Form.Field>
                    <label>Status Pembayaran</label>
                    <input placeholder="" readOnly />
                  </Form.Field>
                  {editablefield()}
                  {/* <Form.Dropdown
                    label="Status Pesanan"
                    placeholder="Pilih Status"
                    options={optionStatus}
                    selection
                    onChange={handleStatusChange}
                    value={statusOrder}
                    defaultSelectedLabel={statusOrder}
                  /> */}
                  <Form.Field>
                    <label>Perubahan Status Pesanan dibuat:</label>
                    <input placeholder="Perubahan Status" readOnly />
                  </Form.Field>
                  <Form.TextArea label="Keterangan" placeholder="" />
                </Form>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

export default OrderDetailPage;
