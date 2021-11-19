import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigation from '../customized/customDrawer';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown:false }}>
            <Stack.Screen name="Initial" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}

export default AppRoutes;