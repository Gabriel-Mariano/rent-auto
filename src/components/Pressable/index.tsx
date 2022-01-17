import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';
import { Pressable } from 'react-native';

import  Icon  from 'react-native-vector-icons/Ionicons';
import { StackProps } from '@src/routes/customized/customStack/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const PressableArrow = () => {
    const navigation = useNavigation();

    const goBack = () => navigation.goBack();

    return <Pressable onPress={goBack}>
                <Icon name="chevron-back-outline"size={24}/>
           </Pressable>
}

export const PressableTabBars = () => {
    const drawer = useNavigation<DrawerNavigationProp<DrawerProps>>();

    const openTabBars = () => drawer.openDrawer();

    return <Pressable onPress={openTabBars}>
                <Icon name="menu-outline" size={24}/>
           </Pressable>
}