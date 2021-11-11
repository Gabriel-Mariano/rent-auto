import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AuthProvider} from './contexts/auth';

import Routes from './routes';


const Main:React.FC = () =>{
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes/>
            </AuthProvider>  
        </NavigationContainer>   
    );
}

export default Main;
