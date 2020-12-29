import axios from "axios";
import { CreateDataCustomerSuccessResponse, CustomerModel } from "./model";

export default class CustomerApi{
    private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-db';

    static getDataCustomer(token:string){
        return axios.get<any>(this.endpoint + '/Customer', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static createCustomer(token: string, createUOM: CustomerModel) {
        return axios.post<CreateDataCustomerSuccessResponse>(this.endpoint + "/Customer", createUOM, {
            headers : {
              Authorization: `Bearer + ${token}`,
            }
             
          }).then((res) => res.data);
          
      }

    static getSingle( Id: string) {
        return axios.get<any>(this.endpoint + '/Customer?id=' + Id, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }
}