import React, { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import {
  Container,
  Grid,
  Button,
  Form,
  Checkbox,
  TextArea,
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TableDayOff from "../components/OffDayTable";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { useDispatch } from "react-redux";
import { createOffDays, createOperationDay } from "../store.reducer";
import { OffDayStoreModel, OperationHoursModel } from "../model";

const HoursOperation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startOpen, setStartOpen] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );
  const [startClose, setStartClose] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );
  const [startOpenWeekend, setStartOpenWeekend] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );
  const [startCloseWeekend, setStartCloseWeekend] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );
  const [description, setDescription] = useState("");
  const [isOnline,setIsOnline] = useState(false);

  console.log(startDate);

  const dispatch = useDispatch();

  const [openHours, setOpenHours] = useState<Array<String>>([]);
  const [openWeekend, setWeekendDay] = useState("");

  const checkItem = (item: string) => {
    let newArr = [];
    if (!openHours.includes(item)) {
      newArr = [...openHours, item];
    } else {
      newArr = openHours.filter((a) => a !== item);
    }
    setOpenHours(newArr);
    console.log(newArr);
  };

  const checkItemWeekend = (item: string) => {
    setWeekendDay(item);
  };

  const handleStartDate = (date: Date) => {
    console.log(date);
    console.log(
      "testing :" + startOpen.getHours() + ":" + startOpen.getMinutes()
    );
    let newDate = date.getHours() + ":" + date.getMinutes();
    setStartOpen(date);
  };

  const onChangeDescription = (
    e: ChangeEvent<HTMLTextAreaElement>,
    { value }: any
  ) => {
    setDescription(value);
  };

  const onSubmitOffDay = (date_day: any, description_day: string) => {
    dispatch(createOffDays({ date_day, description_day } as OffDayStoreModel));
  };

  const onChangeStatus = (e:any , data:any) => {
    let checked = data.checked;
    // if (checked == true){
    //   setIsOnline(data.value = "Online");
    // } else{
    //   setIsOnline(data.value = "Offline");
    // }
    setIsOnline(checked);
    console.log(checked);
    console.log(data.value);
  }

  const onSubmit = (
    openhours: any,
    closehours: any,
    openday: string,
    openweekend: any,
    weekendhoursopen: any,
    weekendhoursclose: any
  ) => {
    dispatch(
      createOperationDay(({
        openhours,
        closehours,
        openday,
        openweekend,
        weekendhoursopen,
        weekendhoursclose,
      } as unknown) as OperationHoursModel)
    );
  };
  return (
    <Container fluid>
      <div className="form-content">
        <p className="title-content">Status Toko Saat Ini</p>
        <div className="status-store">
          <h1>
            <span className={isOnline ? 'online-status' : 'offline-status'}></span>{isOnline ? 'Online' : 'Offline'}
          </h1>
          <Checkbox toggle onChange={onChangeStatus} />
        </div>
      </div>
      <Form
        onSubmit={() =>
          onSubmit(
            startOpen.getHours(),
            startClose,
            openHours.toString(),
            openWeekend,
            startOpenWeekend,
            startCloseWeekend
          )
        }
      >
        <div className="form-content">
          <p className="title-content">Hari Buka & Jam Operasional</p>
          <div className="grid-hours">
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="monday-checkbox"
                      label="Senin"
                      onClick={() => checkItem("Senin")}
                    />
                  </div>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="tuesday-checkbox"
                      label="Selasa"
                      onClick={() => checkItem("Selasa")}
                    />
                  </div>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="wednesday-checkbox"
                      label="Rabu"
                      onClick={() => checkItem("Rabu")}
                    />
                  </div>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="thursday-checkbox"
                      label="Kamis"
                      onClick={() => checkItem("Kamis")}
                    />
                  </div>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="friday-checkbox"
                      label="Jum'at"
                      onClick={() => checkItem("Jumat")}
                    />
                  </div>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="saturday-checkbox"
                      label="Sabtu"
                      onClick={() => checkItem("Sabtu")}
                    />
                  </div>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="sunday-checkbox"
                      label="Minggu"
                      onClick={() => checkItem("Minggu")}
                    />
                  </div>
                  <div className="checkbox-container checkbox-center">
                    <Form.Checkbox
                      type="checkbox"
                      id="weekend-checkbox"
                      label="Hari Raya/Libur"
                      onClick={() => checkItemWeekend("Weekend")}
                    />
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Buka</label>
                    <DatePicker
                      selected={startOpen}
                      onChange={handleStartDate}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
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
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
        <div className="btn-store">
        <Button color="teal">
                Save
              </Button>
        </div>
      
        {/* <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Hari Buka</p>
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <div className="checkbox-container">
                        <Form.Checkbox
                          type="checkbox"
                          id="monday-checkbox"
                          label="Senin"
                          onClick={() => checkItem("Senin")}
                        />
                      </div>
                      <div className="checkbox-container">
                        <Form.Checkbox
                          type="checkbox"
                          id="tuesday-checkbox"
                          label="Selasa"
                          onClick={() => checkItem("Selasa")}
                        />
                      </div>
                      <div className="checkbox-container">
                        <Form.Checkbox
                          type="checkbox"
                          id="wednesday-checkbox"
                          label="Rabu"
                          onClick={() => checkItem("Rabu")}
                        />
                      </div>
                      <div className="checkbox-container">
                        <Form.Checkbox
                          type="checkbox"
                          id="thursday-checkbox"
                          label="Kamis"
                          onClick={() => checkItem("Kamis")}
                        />
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div className="checkbox-container">
                        <Form.Checkbox
                          type="checkbox"
                          id="friday-checkbox"
                          label="Jum'at"
                          onClick={() => checkItem("Jumat")}
                        />
                      </div>
                      <div className="checkbox-container">
                        <Form.Checkbox
                          type="checkbox"
                          id="saturday-checkbox"
                          label="Sabtu"
                          onClick={() => checkItem("Sabtu")}
                        />
                      </div>
                      <div className="checkbox-container">
                        <Form.Checkbox
                          type="checkbox"
                          id="sunday-checkbox"
                          label="Minggu"
                          onClick={() => checkItem("Minggu")}
                        />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <div className="weekend-office">
                  <div className="checkbox-container">
                    <Form.Checkbox
                      type="checkbox"
                      id="weekend-checkbox"
                      label="Hari Raya/Libur"
                      onClick={() => checkItemWeekend("Weekend")}
                    />
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
                        dateFormat="HH:mm aa"
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
                    onChange={handleStartDate}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
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
        </Grid> */}
      </Form>
      <div className="form-content">
        <p className="title-content">Off Day</p>
        <Form onSubmit={() => onSubmitOffDay(startDate, description)}>
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
                <Form.TextArea
                  label="Keterangan"
                  value={description}
                  onChange={onChangeDescription}
                ></Form.TextArea>
                <Button color="teal" style={{ float: "right" }}>
                  Submit
                </Button>
              </Grid.Column>
              <Grid.Column>
                <TableDayOff />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    </Container>
  );
};

export default HoursOperation;
