import axios from "axios";

export default class ProvinceApi {
    private static endpoint = 'http://ngucek.ultimosolution.com:9096/api/Location';

    static getAllProvince(token: string) {
        return axios.get<any>(this.endpoint + '/GetProvinceList', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data.data);
    }
}