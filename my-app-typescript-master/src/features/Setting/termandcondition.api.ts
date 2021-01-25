import axios from "axios";

export default class TermandConditionApi{
    private static endpoint = 'https://ngucek-firebase-default-rtdb.firebaseio.com';

    static getDataTermandCondition(token:string){
        return axios.get<any>(this.endpoint + '/TermsCondition.json', {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        })
        .then((res) => res.data);
    }
    static getSingle( Id: string) {
        return axios.get<any>(this.endpoint + '/TermsCondition.json?id=' + Id, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }
}