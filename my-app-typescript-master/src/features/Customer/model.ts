
export interface CustomerModel{
    firstName:string,
    lastName:string,
    phoneNumber:string,
    email:string,
    username:string,
    password:string,
    provinceId:string,
    cityId:string,
    subDistrictId:string
}

export interface CreateDataCustomerSuccessResponse {
    firstName:string,
    lastName:string,
    phoneNumber:string,
    email:string,
    username:string,
    password:string,
    provinceId:string,
    cityId:string,
    subDistrictId:string
}