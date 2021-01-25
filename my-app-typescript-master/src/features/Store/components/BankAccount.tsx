import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Grid, Button, InputOnChangeData } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import { AccountBankModel } from "../model";
import { createAccountBank, getDataBanking, updateAccountBank } from "../store.reducer";

const BankAccount = ({isLoading = false, ...props}) => {
  const [bankname, setBankName] = useState("");
  const [norekening, setRekening] = useState("");
  const [membername, setMemberName] = useState("");
  const [branch, setBranch] = useState("");
  const [name, setName] = useState("");
  const [showRekening,setShowRekening] = useState("");
  const [bank,setBank] = useState("");
  const [branchBank,setBranchBank] = useState("");

  const dispatch = useDispatch();
  const [id,setID] = useState("-MRNT_zlhjN36t_WgXf6");


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
    id:string,
    bank: string,
    no_rekening: string,
    member_name: string,
    branch: string
  ) => {
    dispatch(
      updateAccountBank({
        id,
        bank,
        no_rekening,
        member_name,
        branch,
      } as AccountBankModel)
    );
  };

  
  const AccountBankState = useSelector((state:RootState) => state.store.listbanking);
  
  useEffect(() => {
    dispatch(getDataBanking())
  }, []);

 
  console.log(AccountBankState);
  // const ItemAccount = AccountBankState ?? [];
  // console.log(ItemAccount);

  // const renderBankAccount = () => {
  //   return ItemAccount.map((item:any) => {
  //       <div key={item.id}><h4>{item.data.bank} - <span>{item.data.no_rekening}</span></h4>
       
  //       </div>
  //   });
  // }

  useEffect(() => {
    if(AccountBankState !== undefined){
       setName(AccountBankState.data.member_name);
       setShowRekening(AccountBankState.data.no_rekening);
       setBank(AccountBankState.data.bank);
       setBranchBank(AccountBankState.data.branch);
    }
     }, [AccountBankState !== undefined])

   
  return (
    <Container fluid>
      <Form loading={isLoading} onSubmit={()=>onSubmit(id,bankname,norekening, membername, branch)}>
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

                {/* {renderBankAccount()} */}

                <h4>
                  {bank} - <span>{showRekening}</span>
                </h4>
                <p>a/n {name}</p>
                <p>{branchBank}</p>
{/* 
                <h4>
                  BCA - <span>088112312</span>
                </h4>
                <p>a/n John Doe</p>
                <p>Cabang Moh. Toha</p> */}

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
