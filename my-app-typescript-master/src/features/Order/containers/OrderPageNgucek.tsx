import React, { ChangeEvent, useState } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  InputOnChangeData,
  Menu,
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setFilter } from "../order.reducer";
import OrderTableNgucek from "../components/DataOrderNgucekTable";
import AutoComplete from "react-autocomplete";

const OrderPageNgucek = () => {
  const optionStatus = [
    { key: "accept", text: "Diterima", value: "diterima" },
    { key: "denied", text: "Ditolak", value: "ditolak" },
    { key: "noresponse", text: "Belum ada Tanggapan", value: "norespon" },
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [statusOrder, setStatusOrder] = useState("");
  const [noOrder, setNoOrder] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [value,setValue] = useState("Autocomplete. .");

  const dispatch = useDispatch();

  const onChangeNoPesanan = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setDocumentNumber(value);
    console.log(value);
  };

  const handleStatusChange = (e: any, data: any) => {
    setStatusOrder(data.value);
    console.log(data.value);
  };

  const resetForm = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setStatusOrder("");
    setDocumentNumber("");
    setNoOrder("");
    setValue("Autocomplete. .");
  };

  const OrderState = useSelector((state: RootState) => state.order.list);


  const getFilteredData = (datainput: any) => {
    const datafilter = OrderState ?? [];
    console.log("data filter:" + datafilter);
    const filteredData = datafilter.filter(
      (find: {
        data: {
          documentNumber: { toString: () => string };
          statusOrder: { toString: () => string };
        };
      }) =>
        find.data.documentNumber.toString().toLowerCase() === datainput.documentNumber.toLowerCase() ||
        find.data.statusOrder.toString().toLowerCase() === datainput.statusOrder
    );
    return filteredData;
  };

  const onSubmit = (documentNumber: string, statusOrder: string) => {
    const FormFilterSubmit = getFilteredData({ documentNumber, statusOrder });
    console.log("ini submit");
    console.log(FormFilterSubmit);
    console.log("end submit");
    dispatch(setFilter(FormFilterSubmit));
  };



  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Order Laundry By Ngucek</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal">Back</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div className="form-content">
        <p className="title-content">Filter</p>
        <Form onSubmit={()=> onSubmit(documentNumber, statusOrder)}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Group widths={2}>
                  <Form.Field>
                    <label>No Order</label>
                    {/* <Form.Input
                      placeholder="No Order"
                      onChange={onChangeNoPesanan}
                      value={noOrder}
                    /> */}
                  <div className="auto-complete-text">
                    <AutoComplete
                      getItemValue={(item) => item.label}
                      items={[
                        { label: 'A01' },
                        { label: 'A02' },
                        { label: 'A03' }
                      ]}
                      renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white'}}>
                          {item.label}
                        </div>
                      }
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      onSelect={(val) => setValue(val)}/>
                    </div>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Field>
                    <label>Start Date</label>
                    <DatePicker
                      dateFormat="MMMM d, yyyy"
                      selected={startDate}
                      selectsStart
                      onChange={(date) => setStartDate(date as Date)}
                    />
                  </Form.Field>

                  <Form.Field>
                    <label>End Date</label>
                    <DatePicker
                      dateFormat="MMMM d, yyyy"
                      selected={endDate}
                      selectsStart
                      onChange={(date) => setEndDate(date as Date)}
                    />
                  </Form.Field>
                </Form.Group>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className="row-custom">
              <Grid.Column>
                <Form.Group widths={2}>
                  <Form.Dropdown
                    label="Status Pesanan"
                    placeholder="Pilih Status"
                    options={optionStatus}
                    selection
                    onChange={handleStatusChange}
                    value={statusOrder}
                    defaultSelectedLabel={statusOrder}
                  />
                </Form.Group>
              </Grid.Column>
              <Grid.Column verticalAlign="bottom">
                <div className="form-btn">
                  <Button onClick={resetForm}>Reset</Button>
                  <Button color="teal">Submit Filter</Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>

      <div className="form-content">
        <Button color="teal">Export</Button>
        <Button color="grey">Print</Button>
        <OrderTableNgucek />
      </div>
    </Container>
  );
};

export default OrderPageNgucek;
