import axios from "axios";

export default class OrderApi{
    private static endpoint = 'https://ngucek-firebase-default-rtdb.firebaseio.com';

    static getDataOrderReguler(token:string){
        return axios.get<any>(this.endpoint + '/Order.json', {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        })
        .then((res) => res.data);
    }

    static getSingleReguler( Id: string) {
        return axios.get<any>(this.endpoint + '/Order.json?id=' + Id, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }
}