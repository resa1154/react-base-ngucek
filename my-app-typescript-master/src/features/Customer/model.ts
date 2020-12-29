export interface CustomerModel{
    fullname:string,
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    address:string,
    province:string,
    district:string,
    subDistrict:string,
    city:string,
    postal_code:string,
    status:string,
    password:string,
    confirm_password:string
}

export interface CreateDataCustomerSuccessResponse {
    id:string,
    no:string,
    fullname:string,
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    address:string,
    province:string,
    district:string,
    subDistrict:string,
    city:string,
    postal_code:string,
    status:string,
    password:string,
    confirm_password:string}