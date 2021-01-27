import axios from "axios";

export default class KurirApi{
    // private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-redux';
    private static endpoint = 'http://ngucek.ultimosolution.com:9096/api/Driver';

    static getDataKurir(token:string){
        return axios.get<any>(this.endpoint + '/GetList', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static getSingle( Id: string) {
        return axios.get<any>('http://my-json-server.typicode.com/resa1154/react-redux/Drivers?id=' + Id, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }
}

