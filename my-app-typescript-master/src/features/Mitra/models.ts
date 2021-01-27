// export interface MitraModel {
//   name: string,
//   email: string,
//   no_nik:string,
//   npwp:string,
//   companyName:string,
//   shopName:string,
//   shopEmail:string,
//   address:string,
//   phoneNumber:string,
//   province:string,
//   District:string,
//   subDistrict:string,
//   city:string,
//   postal_code:string
//   }

export interface MitraModel {
  firstName: string,
  lastName:string,
  phoneNumber:string,
  storeName:string,
  storeEmail:string,
  storePhone:string,
  latitude:string,
  longitude:string,
  address:string,
  provinceId:string,
  cityId:string,
  subdistrictId:string,
  postalCode:string,
  yearEstablished:string,
  hasCourier:boolean,
  isVerified:boolean,
  email:string,
  username:string,
  password:string,
  }
  
  export interface MitraDetailModel{
    id:number,
    nama:string,
    email:string,
    phoneNumber:string,
    no_nik:string,
    npwp:string,
    status:string,
    companyName:string,
    shopName:string,
  shopEmail:string,
  address:string,
  province:string,
  District:string,
  subDistrict:string,
  city:string,
  postal_code:string

  }
  
  export interface CreateDataMitraSuccessResponse {
    id:string,
    no:string,
    name: string,
    email: string,
    phoneNumber:string,
    no_nik:string,
    npwp:string,
    status:string,
    companyName:string,
    shopName:string,
    shopEmail:string,
    address:string,
    province:string,
    District:string,
    subDistrict:string,
    city:string,
    postal_code:string,
    companySince:string,
    date:string
  }

  export interface GetDataTestSuccessResponse {
    name: string;
    code: string;
    symbol: string;
    description: string;
    id: string;
    createdById: string;
    createdBy: string;
    createdDate: Date;
    modifiedById: string;
    modifiedBy: string;
    modifiedDate: Date;
    isActive: boolean;
    createdByName: string;
  }
  