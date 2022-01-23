import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';
import { DrawerProps } from './types/index.d';
import DrawerHeader from './components/Header';
import DrawerBase from './components/Footer';
import Header from '@src/components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles/styles';
import { COLORS } from '@src/themes/colors';

import StackAutomobilesRoutes from '../customStack';
import Settings from '@src/screens/authenticated/settings';

const Drawer = createDrawerNavigator<DrawerProps>();

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <DrawerHeader/>
            <DrawerContentScrollView {...props} style={styles.drawerSection}>
                <DrawerItemList  {...props}>
                    <DrawerItem
                        label="Home"
                        onPress={() => props.navigation.navigate('Home')}
                    />
                    <DrawerItem
                        label="Preferências"
                        onPress={() => props.navigation.navigate('Settings')}
                    />
                </DrawerItemList>
            </DrawerContentScrollView>
            <DrawerBase />
        </SafeAreaView>
    );
}

const DrawerNavigation = () => (
    <Drawer.Navigator
        initialRouteName="Origin"
        screenOptions={{
            headerTintColor: COLORS.dark,
            drawerActiveTintColor: COLORS.primary,
            header: ({route}) => <Header {...route}/> 
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
    >
        <Drawer.Screen
            name="Origin"
            component={StackAutomobilesRoutes}
            options={{
                drawerLabel:'Home',
                drawerIcon: ({ focused }) => <Icon name="home" size={18} color={focused ? COLORS.primary : COLORS.dark} />
            }} 
        />
        <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{
                drawerIcon: ({ focused }) => <Icon name="settings" size={18} color={focused ? COLORS.primary : COLORS.dark} />
            }} 
        />
        {/* <Drawer.Screen
            name="Details"
            component={Details}
            options={{
                drawerItemStyle:{ height:0 },
                drawerIcon: ({ focused }) => <Icon name="settings" size={18} color={focused ? COLORS.primary : COLORS.dark} />
            }} 
        /> */}
    </Drawer.Navigator>
)

export default DrawerNavigation;