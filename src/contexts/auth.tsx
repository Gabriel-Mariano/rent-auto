import React, { createContext, useCallback, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '@src/services/api.default';
import { Alert, StatusBarIOS } from "react-native";
import { IUserType } from './auth.d';

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

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [isLoading,setIsLoading] = useState(true);
    const [user, setUser] = useState<IUserType | null>(null);

    useEffect(()=>{
        const loadStorageData = async () =>{
            const storagedUser = await  AsyncStorage.getItem('@rentAuto:user');
            const storagedToken = await AsyncStorage.getItem('@rentAuto:token');

            if( storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
            }
            setIsLoading(false);
        }
        
        loadStorageData();
    },[]);

    const signIn = useCallback(async({ email, password}:ISignInPros) => {
        console.log('ou')
        try{
            const { data } = await api.post<IResponse>('/login',{ email, password });

            const { token, user } = data;
            
            setUser(user);
            await AsyncStorage.setItem('@rentAuto:username',user.username);
            await AsyncStorage.setItem('@rentAuto:token',token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        }catch(err){
            if(err.response.status === 401){
                console.log(err.response)
                return Alert.alert("Ops",err.response.data.message || "Falha na autenticação"); 
            }
            Alert.alert("Ops","Houve uma falha. Tente novamente mais tarde!");
        }
        
    },[]);

    const signOut = () =>{
        AsyncStorage.clear();
        setUser(null);
    }

    const register = useCallback(async({username,email,password}:IRegisterProps) => {
        try {
            const  data  = await api.post<IRegisterResponse>('/register', { username, email, password });

            const { token, user } = data.data;
            
            await AsyncStorage.setItem('@rentAuto:username',user.username);
            await AsyncStorage.setItem('@rentAuto:email',user.email);
            await AsyncStorage.setItem('@rentAuto:token',token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            return data;

        }catch(err){
            if(err.response.status === 409){
                return Alert.alert("Ops...", err?.response?.data?.message || "Usuário já existente 😑");
            }
            Alert.alert("Ops...", err.response.message || "Houve uma falha. Tente novamente mais tarde!");   
        }
    },[]);
    
    return (
        <AuthContext.Provider 
            value={{ 
                signed:!!user, 
                user,
                setUser, 
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