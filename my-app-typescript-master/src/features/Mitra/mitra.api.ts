import axios from "axios";
import { MitraModel, CreateDataMitraSuccessResponse } from './models';

export default class MitraApi{
    // private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-redux';
    private static endpoint = 'http://ngucek.ultimosolution.com:9096/api/Mitra';

    static getDataMitra(token: string) {
        return axios.get<any>(this.endpoint + '/GetList', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static createMitra(token: string, createUOM: MitraModel) {
        return axios.post<CreateDataMitraSuccessResponse>(this.endpoint + "/Mitra", createUOM, {
            headers : {
              Authorization: `Bearer + ${token}`,
            }
             
          }).then((res) => res.data);
          
      }
      static getSingle( Id: string) {
        return axios.get<any>(this.endpoint + '/Mitra?id=' + Id, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }
}