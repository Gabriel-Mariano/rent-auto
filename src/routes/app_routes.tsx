import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/auth/signIn';
import Register from '@src/screens/auth/register';
import Home from '@src/screens/authenticated/home/home';

export type StackParams = {
    SignIn: undefined;
    Register: undefined;
    Home: undefined;
}

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default AppRoutes;