import axios from "axios";
import { isAsExpression } from "typescript";
import { CreateDataCustomerSuccessResponse, CustomerDeleteModel, CustomerModel, CustomerUpdateModel } from "./model";

export default class CustomerApi{
    // private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-db';
    private static endpoint = 'http://ngucek.ultimosolution.com:9096/api/Customer';
    static getDataCustomer(token:string){
        return axios.get<any>(this.endpoint + '/getList', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data.data);
    }

    static createCustomer(token: string, createUOM: CustomerModel) {
        return axios.post<any>(this.endpoint + "/Create", createUOM, {
            headers : {
              Authorization: `Bearer + ${token}`,
            }
             
          }).then((res) => res.data);
          
      }

      static deleteCustomer(token: string, deleteCusId: CustomerDeleteModel) {
        return axios.post<any>(this.endpoint + '/Delete', deleteCusId,  {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static updateCustomer(token: string, updateCustomer: CustomerUpdateModel){
        return axios.post<any>(this.endpoint + '/Update', updateCustomer,{
            headers :{
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => res.data)
    }

    static getSingle(token:string, Id: string) {
        return axios.get<any>(this.endpoint + '/GetSingleItem?id=' + Id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.data.data);
    }

}