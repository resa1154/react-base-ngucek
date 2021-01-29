
export interface CustomerModel{
    firstName:string,
    lastName:string,
    phoneNumber:string,
    email:string,
    username:string,
    password:string,
    provinceId:string,
    cityId:string,
    subDistrictId:string,
    registrationStatus:0,
    address:string,
    postalCode:string
}

export interface CustomerUpdateModel{
    id:string,
    firstName:string,
    lastName:string,
    phoneNumber:string,
    provinceId:string,
    cityId:string,
    subDistrictId:string,
    registrationStatus:0,
    address:string,
    postalCode:string
}

export interface CustomerDeleteModel{
    id:string
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
    subDistrictId:string,
    name:string
}