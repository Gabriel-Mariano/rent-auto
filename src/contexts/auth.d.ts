interface IUserType {
    username:string;
    email:string;
    password?:string;
    profile?:string;
    status?:boolean;
}

export { IUserType };