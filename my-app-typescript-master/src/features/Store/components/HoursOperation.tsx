import React, { useState } from "react";
import { Container, Grid, Button, Form, Checkbox } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TableDayOff from "../components/OffDayTable";

const HoursOperation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(new Date());
  const [startClose, setStartClose] = useState(new Date());
  const [startOpenWeekend, setStartOpenWeekend] = useState(new Date());
  const [startCloseWeekend, setStartCloseWeekend] = useState(new Date());

  return (
    <Container fluid>
      <Form>
        <div className="form-content">
          <p className="title-content">Status Toko Saat Ini</p>
          <div className="status-store">
            <h1>
              <span color="green"></span>Online
            </h1>
            <Checkbox toggle defaultChecked />
          </div>
        </div>

        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Hari Buka</p>
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <div className="checkbox-container">
                        <Checkbox label="Senin" defaultChecked />
                      </div>
                      <div className="checkbox-container">
                        <Checkbox label="Selasa" defaultChecked />
                      </div>
                      <div className="checkbox-container">
                        <Checkbox label="Rabu" defaultChecked />
                      </div>
                      <div className="checkbox-container">
                        <Checkbox label="Kamis" defaultChecked />
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div className="checkbox-container">
                        <Checkbox label="Jumat" defaultChecked />
                      </div>
                      <div className="checkbox-container">
                        <Checkbox label="Sabtu" />
                      </div>
                      <div className="checkbox-container">
                        <Checkbox label="Minggu" />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <div className="weekend-office">
                  <div className="checkbox-container">
                    <Checkbox label="Hari Raya/Libur" defaultChecked />
                  </div>
                  <Form.Group widths="equal">
                  <Form.Field>
                  <label>Buka</label>
                  <DatePicker
                    selected={startOpenWeekend}
                    onChange={(date) => setStartOpenWeekend(date as Date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Tutup</label>
                  <DatePicker
                    selected={startCloseWeekend}
                    onChange={(date) => setStartCloseWeekend(date as Date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </Form.Field>
                  </Form.Group>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Jam Operasional</p>
                <Form.Field>
                  <label>Buka</label>
                  <DatePicker
                    selected={startOpen}
                    onChange={(date) => setStartOpen(date as Date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Tutup</label>
                  <DatePicker
                    selected={startClose}
                    onChange={(date) => setStartClose(date as Date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                  />
                </Form.Field>
              </div>
              <Button color="teal" style={{ float: "right" }}>
                Save
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <div className="form-content">
          <p className="title-content">Off Day</p>

          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Field>
                  <label>Tanggal</label>
                  <DatePicker
                    dateFormat="MMMM d, yyyy"
                    selected={startDate}
                    selectsStart
                    onChange={(date) => setStartDate(date as Date)}
                  />
                </Form.Field>
                <Form.TextArea label="Keterangan"></Form.TextArea>
                <Button color="teal" style={{ float: "right" }}>
                  Submit
                </Button>
              </Grid.Column>
              <Grid.Column>
                <TableDayOff />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Form>
    </Container>
  );
};

export default HoursOperation;
