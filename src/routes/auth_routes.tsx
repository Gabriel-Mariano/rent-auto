import React from 'react';
import SignIn from '@src/screens/auth/signIn';
import Register from '@src/screens/auth/register';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type StackParams = {
    SignIn: undefined;
    Register: undefined;
    Home: undefined;
}

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </AuthStack.Navigator>
)

export default AuthRoutes;