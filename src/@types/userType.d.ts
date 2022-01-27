interface IUserType {
    username:string;
    email:string;
    password?:string;
    avatar?:string;
    status?:boolean;
    cpf?:string;
}

export { IUserType };