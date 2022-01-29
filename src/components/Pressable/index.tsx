import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

export const PressableTabBars = () => {
    const drawer = useNavigation<DrawerNavigationProp<DrawerProps>>();

    return (
        <Pressable onPress={() => drawer.openDrawer()}>
            <Icon name="menu-outline" size={24} />
        </Pressable>
    )
}

export const PressableArrowIcon = (props:any) => {
    const navigation = useNavigation<NativeStackNavigationProp<DrawerProps>>();
    const location   = useRoute<RouteProp<DrawerProps>>();

    const goBackTo = () => {
        if(props.screen === 'Details') {
            navigation.navigate('Origin', {
                screen:'Home'
            });
        }
        if(props.screen === 'Calendar') {
            navigation.navigate('Origin', {
                screen:'Details',
                params:{...location.params?.params}
            });
        }
        if(props.screen === 'Finalize') {
            navigation.navigate('Origin', {
                screen:'Calendar',
                params:{...location.params?.params}
            });
        }
        if(props.screen === 'Identifier') {
            navigation.navigate('Origin', {
                screen:'Calendar',
                params:{...location.params?.params}
            });
        }

    }

    return (
        <Pressable onPress={goBackTo}>
            <Icon name="chevron-back-outline" size={24} />
        </Pressable>
    )
}