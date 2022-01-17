import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider } from './contexts/auth';

import Routes from './routes';

const Main:React.FC = () =>{
    return (
        <SafeAreaView style={{ flex:1 }}>
            <StatusBar />
            <NavigationContainer>
                <AuthProvider>
                    <Routes/>
                </AuthProvider>  
            </NavigationContainer>
        </SafeAreaView>   
    );
}

export default Main;
