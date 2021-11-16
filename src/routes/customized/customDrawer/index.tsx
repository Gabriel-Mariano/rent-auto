import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';

import Home from '@src/screens/authenticated/home';
import Settings from '@src/screens/authenticated/settings';

type DrawerProps =  {
    Home:undefined;
    Settings:undefined;
}

const Drawer = createDrawerNavigator<DrawerProps>();

const DrawerContent:React.FC = (props:any) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View>
                    <DrawerItem
                        label="Home"
                        onPress={()=> props.navigation.navigate('Home')}
                        
                    />
                    <DrawerItem
                        label="Settings"
                        onPress={()=>props.navigation.navigate('Settings')}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
    );
} 

const DrawerNavigation = () => (
    <Drawer.Navigator 
        initialRouteName="Home" 
        screenOptions={{ headerTintColor:COLORS.dark}}
        drawerContent={(props:any)=> <DrawerContent {...props}/> }
    >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default DrawerNavigation;