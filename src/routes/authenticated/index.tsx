import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@src/screens/authenticated/home/home';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default AppRoutes;