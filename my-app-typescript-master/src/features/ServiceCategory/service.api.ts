import axios from "axios";
import { CreateCategorySuccessResponse, CreateServicesSuccesResponse, ServiceCategoryModel, ServicesModel } from "./model";


export default class ServiceApi{
    private static endpoint = 'http://my-json-server.typicode.com/resa1154/react-redux';

    static getDataServiceCategory(token: string) {
        return axios.get<any>(this.endpoint + '/ServiceCategory', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static CreateServiceCategory(createUOM:ServiceCategoryModel){
        return axios.post<CreateCategorySuccessResponse>(this.endpoint + '/ServiceCategory', createUOM, {
            headers : {
              Authorization: "Bearer ",
            }   
          }).then((res) => res.data);
    }

    static getSingleCategory( Id: string) {
        return axios.get<any>(this.endpoint + '/ServiceCategory?id=' + Id, {
        }).then((res) => res.data);
    }
    
    static getDataServices(token: string){
        return axios.get<any>(this.endpoint + '/Services', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data);
    }

    static CreateServices(createUOM:ServicesModel){
        return axios.post<CreateServicesSuccesResponse>(this.endpoint + '/Services', createUOM,{
            headers :{
                Authorization: "Bearer ",
            }
        }).then((res) => res.data);
    }

    static getSingleServices(Id: String){
        return axios.get<any>(this.endpoint + '/Services?id=' +Id,{}).then((res) => res.data);
    }
}

