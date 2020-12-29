import axios from "axios";

export default class RoleApi{
    private static endpoint = 'https://my-json-server.typicode.com/resa1154/react-db';
    // private static endpoint = 'https://my-json-server.typicode.com/resa1154/react-ngucek';

    static getDataRole(token: string) {
        return axios.get<any>(this.endpoint + '/Roles', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static getSingle( Id: string) {
        return axios.get<any>(this.endpoint + '/Roles?id=' + Id, {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
        }).then((res) => res.data);
    }
}