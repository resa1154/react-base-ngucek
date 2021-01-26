import axios from "axios";
import { isAsExpression } from "typescript";
import { CreateDataCustomerSuccessResponse, CustomerModel } from "./model";

export default class CustomerApi{
    // private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-db';
    private static endpoint = 'http://ngucek.ultimosolution.com:9096/api/Customer';
    static getDataCustomer(token:string){
        return axios.get<any>(this.endpoint + '/getList', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static createCustomer(token: string, createUOM: CustomerModel) {
        return axios.post<CreateDataCustomerSuccessResponse>(this.endpoint + "/Create", createUOM, {
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

    private static endpointProvince = 'http://ngucek.ultimosolution.com:9096/api/Location/GetProvinceList'
    static getDataProvince(token:string){
        return axios.get<any>(this.endpointProvince,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.data);
    }
}