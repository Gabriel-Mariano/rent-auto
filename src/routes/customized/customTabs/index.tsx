import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@src/screens/authenticated/home';
import Settings from '@src/screens/authenticated/settings';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigation = () => (
    <Navigator>
        <Screen name="Home" component={Home}/>
        <Screen name="Settings" component={Settings}/>
    </Navigator>
);

export default BottomTabNavigation;

