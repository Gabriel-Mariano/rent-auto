import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@src/screens/authenticated/home';
import Details from '@src/screens/authenticated/details';
import CalendarScreen from '@src/screens/authenticated/calendar';
import FinalizeScreen from '@src/screens/authenticated/finalize';

const { Navigator, Screen } = createNativeStackNavigator();

const StackAutomobilesRoutes = () => (
    <Navigator 
         screenOptions={{ headerShown:false }}
    >
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
        <Screen name="Calendar" component={CalendarScreen} />
        <Screen name="Finalize" component={FinalizeScreen} />
    </Navigator>
)

export default StackAutomobilesRoutes;