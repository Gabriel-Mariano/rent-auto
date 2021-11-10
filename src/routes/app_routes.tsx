import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/auth/login';
import Register from '@src/screens/auth/register';
import Home from '@src/screens/authenticated/home/home';

export type StackParams = {
    Login:undefined;
    Register:undefined;
    Home:undefined;
}

const Stack = createNativeStackNavigator();

const AppRoutes = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{             headerShown:false
                }}/>
                <Stack.Screen name="Register" component={Register} options={{             headerShown:false
                }}/>
                <Stack.Screen name="Home" component={Home} options={{             headerShown:false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;