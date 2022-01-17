import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@src/screens/authenticated/home';
import Details from '@src/screens/authenticated/details';
import { StackProps } from './types';
import Header from '@src/components/Header';
import { Text } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

const StackAutomobilesRoutes = () => (
    <Navigator 
         screenOptions={{ headerShown:false }}
        
    >
        <Screen name="Origin" component={Home} />
        <Screen name="Details" component={Details} /> 
    </Navigator>
)

export default StackAutomobilesRoutes;