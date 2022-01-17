import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@src/screens/authenticated/home';
import Details from '@src/screens/authenticated/details';
import { StackProps } from './types';

const { Navigator, Screen } = createNativeStackNavigator<StackProps>();

const StackAutomobilesRoutes = () => (
    <Navigator 
         screenOptions={{ headerShown:false}}

    >
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
    </Navigator>
)

export default StackAutomobilesRoutes;