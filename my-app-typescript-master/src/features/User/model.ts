export interface User {
    name:string,
    password:string,
    confirmPassword:string,
    roles:string
}

export interface UserModel{
    name:string,
    username:string,
    password:string,
    confirmPassword:string,
    roles:string
}

export interface CreateUserSuccessResponse{
    id:number,
    no:number,
    name:string,
    username:string,
    password:string,
    confirmPassword:string,
    roles:string
}