import axios from "axios";

export default class CityApi {
    private static endpoint = 'http://ngucek.ultimosolution.com:9096/api/Location';
    static getAllCity(token: string, provinceId: string) {
        return axios.get<any>(this.endpoint+'/GetCityList?provinceId=' + provinceId, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data.data);
    }
}