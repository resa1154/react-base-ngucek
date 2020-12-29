import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Grid, Button, InputOnChangeData } from "semantic-ui-react";
import { AccountBankModel } from "../model";
import { createAccountBank } from "../store.reducer";

const BankAccount = ({isLoading = false, ...props}) => {
  const [bankname, setBankName] = useState("");
  const [norekening, setRekening] = useState("");
  const [membername, setMemberName] = useState("");
  const [branch, setBranch] = useState("");

  const dispatch = useDispatch();

  const onChangeBankName = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setBankName(value);
    console.log(value);
  }

  const onChangeRekening = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setRekening(value);
  }

  const onChangeMember = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setMemberName(value);
  }

  const onChangeBranch = (e:ChangeEvent<HTMLInputElement>,{value}:InputOnChangeData) => {
    setBranch(value);
  }

  const onSubmit = (
    bank: string,
    no_rekening: string,
    member_name: string,
    branch: string
  ) => {
    dispatch(
      createAccountBank({
        bank,
        no_rekening,
        member_name,
        branch,
      } as AccountBankModel)
    );
  };

  return (
    <Container fluid>
      <Form loading={isLoading} onSubmit={()=>onSubmit(bankname,norekening, membername, branch)}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Tambah Informasi Akun Bank</p>
                <Form.Field>
                  <label>Bank</label>
                  <Form.Input placeholder="" onChange={onChangeBankName} value={bankname}/>
                </Form.Field>
                <Form.Field>
                  <label>No Rekening</label>
                  <Form.Input placeholder="" onChange={onChangeRekening} value={norekening}/>
                </Form.Field>
                <Form.Field>
                  <label>Atas Nama</label>
                  <Form.Input placeholder="" onChange={onChangeMember} value={membername} />
                </Form.Field>
                <Form.Field>
                  <label>Cabang</label>
                  <Form.Input placeholder="" onChange={onChangeBranch} value={branch} />
                </Form.Field>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="form-content">
                <p className="title-content">Akun Bank Aktif</p>

                <h4>
                  BCA - <span>088112312</span>
                </h4>
                <p>a/n John Doe</p>
                <p>Cabang Moh. Toha</p>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button color="teal" style={{ float: "right" }}>
                Save
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  );
};

export default BankAccount;
