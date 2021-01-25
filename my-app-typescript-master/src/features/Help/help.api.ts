import axios from "axios";

export default class HelpApi{
    private static endpoint = 'https://ngucek-firebase-default-rtdb.firebaseio.com';

    static getDataHelp(token:string){
        return axios.get<any>(this.endpoint + '/Helps.json', {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        })
        .then((res) => res.data);
    }
    static getSingleHelp( Id: string) {
        return axios.get<any>(this.endpoint + '/Helps.json?id=' + Id, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }
}