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
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '@src/components/Header';

import { styles } from './styles/styles';
import { COLORS } from '@src/themes/colors';

import Settings from '@src/screens/authenticated/settings';
import Details from '@src/screens/authenticated/details';
import Home from '@src/screens/authenticated/home';

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
        initialRouteName="Home"
        screenOptions={{
            headerTintColor: COLORS.dark,
            drawerActiveTintColor: COLORS.primary,
            header: () => <Header />
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
    >
        <Drawer.Screen
            name="Home"
            component={Home}
            options={{
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
        <Drawer.Screen
            name="Details"
            component={Details}
            options={{
                drawerItemStyle:{ height:0 },
                drawerIcon: ({ focused }) => <Icon name="settings" size={18} color={focused ? COLORS.primary : COLORS.dark} />
            }} 
        />
    </Drawer.Navigator>
)

export default DrawerNavigation;