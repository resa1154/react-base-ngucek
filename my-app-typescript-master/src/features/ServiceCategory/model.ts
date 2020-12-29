export interface ServiceCategory{
    categoryname:string,
    headcategory:string,
    note:string
}

export interface ServiceCategoryModel{
    id:number,
    no:number,
    categoryname:string,
    headcategory:string,
    note:string,
    status:string
}

export interface ServicesModel{
    id:number,
    no:number,
    servicesname:string,
    headcategory:string,
    description:string,
    note:string,
    status:string,
    price:string,
    partnercomission:string
}

export interface CreateServicesSuccesResponse{
    id:number,
    no:number,
    servicesname:string,
    headcategory:string,
    description:string,
    note:string,
    status:string,
    price:string,
    partnercommission:string
}

export interface CreateCategorySuccessResponse{
    id:number,
    categoryname:string,
    headcategory:string,
    note:string,
    status:string,
    price:string,
}