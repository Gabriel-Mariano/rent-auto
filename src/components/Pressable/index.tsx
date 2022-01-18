import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';

import Icon from 'react-native-vector-icons/Ionicons';

export const PressableTabBars = () => {
    const drawer = useNavigation<DrawerNavigationProp<DrawerProps>>();

    return (
        <Pressable onPress={() => drawer.openDrawer()}>
            <Icon name="menu-outline" size={24} />
        </Pressable>
    )
}