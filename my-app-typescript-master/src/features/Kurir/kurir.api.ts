import axios from "axios";

export default class KurirApi{
    private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-redux';

    static getDataKurir(token:string){
        return axios.get<any>(this.endpoint + '/Drivers', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static getSingle( Id: string) {
        return axios.get<any>(this.endpoint + '/Drivers?id=' + Id, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }
}

