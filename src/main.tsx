import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppRoutes from './routes/app_routes';

const Main:React.FC = () =>{
    return (
        <AppRoutes/>
    );
}

export default Main;
