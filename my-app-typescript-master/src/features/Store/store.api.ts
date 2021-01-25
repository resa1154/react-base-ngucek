import axios from "axios";
import { AccountBankModel, CreateInformationStoreSuccessResponse, InformationStoreModel, OffDayStoreModel, OperationHoursModel } from "./model";

export default class StoreApi{
    private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-db';
    private static endpointfirebase ='https://ngucek-firebase-default-rtdb.firebaseio.com/'

    static getDataStore(token:string){
        return axios.get<any>(this.endpointfirebase + '/Store.json', {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
           
        })
        .then((res) => res.data);
    }

    static getDataOffDay(token:string){
        return axios.get<any>(this.endpointfirebase + '/OffDay.json', {

        }).then((res) => res.data);
    }
    // static getDataStore(token:string){
    //     return axios.get<any>(this.endpoint + '/Stores', {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })
    //     .then((res) => res.data);
    // }

    //Get Data Bank
    static getDataAccountBank(token:string){
        return axios.get<any>(this.endpointfirebase + 'BankAccount.json',{

        }).then((res) => res.data);
    }

    //Create Information Store
    static createInformationStore(token: string, data:InformationStoreModel) {
        return axios.post(this.endpointfirebase  + "/InformationStore.json", data, {
            // headers : {
            //   Authorization: `Bearer + ${token}`,
            // }
             
          }).then((res) => res.data);
          
      }

      //Create Account Bank
    static createAccountBank(token:string, data:AccountBankModel){
        return axios.post('https://ngucek-firebase-default-rtdb.firebaseio.com/BankAccount.json', data, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }

    static updateAccountBank(token:string, update:AccountBankModel){
        return axios.patch('https://ngucek-firebase-default-rtdb.firebaseio.com/BankAccount.json/', update, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }

    //Create Operation Hours
    static createHoursOperation(token:string, data:OperationHoursModel){
        return axios.post('https://ngucek-firebase-default-rtdb.firebaseio.com/Hours.json', data, {

        }).then((res) => res.data);
    }

         //Create Off Day
         static createOffDay(token:string, data:OffDayStoreModel){
            return axios.post('https://ngucek-firebase-default-rtdb.firebaseio.com/OffDay.json', data, {
                // headers: {
                //     Authorization: `Bearer ${token}`,
                // },
            }).then((res) => res.data);
        }
}