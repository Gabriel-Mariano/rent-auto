import React, { createContext, useCallback, useState } from "react";
import api from '@src/services/api.default';

interface ISignInPros {
    email:string;
    password:string;
}

interface IResponse {
    token:string;
    username:string;
}


interface IAuthContextData {
    signed:boolean;
    user:string | null;
    signIn:(data: ISignInPros)=>Promise<void>;
    isLoading:boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [isLoading,setIsLoading] = useState(false);
    const [user, setUser] = useState('');

    const signIn = useCallback(async({ email, password }:ISignInPros) => {
        const dataFormat = {
            email:email,
            password:password
        }
        try{
            const { data } = await api.post<IResponse>('/login',dataFormat);

            const { token, username } = data;
            setUser(username);
        }catch(err){
            /* console.log(err) */
        }
        
    },[]);

    const signOut = () =>{
        // setUser(null)
    }
    
    return (
        <AuthContext.Provider value={{ signed:!!user, user, isLoading, signIn }}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext;