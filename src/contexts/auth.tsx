import React, { createContext, useCallback, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const [isLoading,setIsLoading] = useState(true);
    const [user, setUser] = useState('');

    useEffect(()=>{
        const loadStorageData = async () =>{
            const storagedUser = await  AsyncStorage.getItem('@rentAuto:username');
            const storagedToken = await AsyncStorage.getItem('@rentAuto:token');

            if( storagedUser && storagedToken){
                setUser(storagedUser);
            }
            setIsLoading(false);
        }
        
        loadStorageData();
    },[]);

    const signIn = useCallback(async({ email, password }:ISignInPros) => {
        const dataFormat = {
            email:email,
            password:password
        }
        try{
            const { data } = await api.post<IResponse>('/login',dataFormat);

            const { token, username } = data;

            setUser(username);
            AsyncStorage.setItem('@rentAuto:username',username);
            AsyncStorage.setItem('@rentAuto:token',token);

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