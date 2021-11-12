import React, { createContext, useCallback, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '@src/services/api.default';
import { Alert, StatusBarIOS } from "react-native";

interface ISignInPros {
    email:string;
    password:string;
}

interface IRegisterProps {
    username:string;
    email:string;
    password:string;
}

interface IResponse {
    token:string;
    username:string;
}

interface IRegisterResponse {
    token:string;
    user:{
        username:string;
        email:string;
        password:string;
    }
}

interface IAuthContextData {
    signed:boolean;
    user:string | null;
    signIn:(data:ISignInPros)=>Promise<void>;
    signOut:()=>void;
    register:(data:IRegisterProps)=>Promise<any>;
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

    const signIn = useCallback(async({ email, password}:ISignInPros) => {
        try{
            const { data } = await api.post<IResponse>('/login',{ email, password });

            const { token, username } = data;

            setUser(username);
            await AsyncStorage.setItem('@rentAuto:username',username);
            await AsyncStorage.setItem('@rentAuto:token',token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        }catch(err){
            Alert.alert("Ops","Falha na autenticação");
        }
        
    },[]);

    const signOut = () =>{
        AsyncStorage.clear();
        setUser('');
    }

    const register = useCallback(async({username,email,password}:IRegisterProps) => {
        const dataFormat = {
            username,
            email,
            password
        }
        try {
            const  data  = await api.post<IRegisterResponse>('/register', dataFormat);

            const { token, user } = data.data;
            const { status } = data; 

            await AsyncStorage.setItem('@rentAuto:username',JSON.stringify(user.username));
            await AsyncStorage.setItem('@rentAuto:email',JSON.stringify(user.email));
            await AsyncStorage.setItem('@rentAuto:token',token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            return status;

        }catch(err){
            /* console.log(err) */
        }
    },[]);
    
    return (
        <AuthContext.Provider 
            value={{ 
                signed:!!user, 
                user, 
                isLoading, 
                signIn,
                signOut, 
                register 
            }}>
            {children}
        </AuthContext.Provider>
    )
} 

export default AuthContext;