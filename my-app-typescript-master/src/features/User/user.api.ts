import axios from "axios";
import { CreateUserSuccessResponse, UserModel } from "./model";

export default class UserApi{
    // private static endpoint = 'https://my-json-server.typicode.com/resa1154/react-db';
    private static endpoint = 'http://ngucek.ultimosolution.com:9096/api/Account';

    static getDataUser(token:string){
        return axios.get<any>(this.endpoint + '/GetList', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static createDataUser(token: string, createUser: UserModel){
        return axios.post<CreateUserSuccessResponse>(this.endpoint + '/Users', createUser,{
            headers : {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.data);
    }
}