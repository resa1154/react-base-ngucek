import axios from "axios";

export default class SubDistrictApi {
    private static endpoint = 'http://ngucek.ultimosolution.com:9096/api/Location';
    static getAllSubDistrict(token: string, cityId: string) {
        return axios.get<any>(this.endpoint + '/GetSubDistrictList?cityId=' + cityId, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data.data);
    }
}