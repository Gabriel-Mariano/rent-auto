import {  IUserType } from '@src/@types/userType.d';

interface ISignInPros {
    email:string;
    password:string;
}

interface IRegisterProps {
    username:string;
    email:string;
    password:string;
}

interface ISignInResponse {
    token:string;
    user:IUserType;
}

interface IRegisterResponse {
    token:string;
    user:IUserType;
}

interface IAuthContextData {
    signed:boolean;
    user:IUserType | null;
    setUser:React.Dispatch<React.SetStateAction<IUserType | null>>;
    signIn:(data:ISignInPros)=>Promise<void>;
    signOut:()=>void;
    register:(data:IRegisterProps)=>Promise<any>;
    isLoading:boolean;
}

export { 
    IUserType, 
    ISignInPros, 
    IRegisterProps, 
    ISignInResponse,
    IRegisterResponse,
    IAuthContextData  
};