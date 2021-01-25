export interface StoreModel{
    storename:string,
    status:string
}

export interface  CreateDataStoreSuccessResponse{
    id:string,
    storename:string,
    status:string
}

export interface AccountBankModel{
    id:string,
    bank:string,
    no_rekening:string,
    member_name:string,
    branch:string
}

export interface CreateAccountBankSuccessResponse{

}

export interface InformationStoreModel{
    storename:string,
    email:string,
    phone:string,
    address:string,
    province:string,
    district:string,
    subDistrict:string,
    city:string,
    postalcode:string
}

export interface CreateInformationStoreSuccessResponse{

}

export interface OperationHoursModel{
    openhours:string,
    closehours:string,
    opendays:string,
    openweekend:string,
    weekendhoursopen:string,
    weekendhoursclose:string
}

export interface OffDayStoreModel{
    date_day:string,
    description_day:string
}