import axios from "axios";
import { AccountBankModel } from "./model";

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
    // static getDataStore(token:string){
    //     return axios.get<any>(this.endpoint + '/Stores', {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     })
    //     .then((res) => res.data);
    // }

    static createAccountBank(token:string,data:AccountBankModel){
        return axios.post('https://my-json-server.typicode.com/resa1154/react-db-info/BankAccount', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.data);
    }
}