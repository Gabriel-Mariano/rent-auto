import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { IBottomNavigationPros } from './index.d';
import { StackAppRoutesParams } from '@src/routes/authenticated/index.d';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS } from '@src/themes/colors';

import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavigator: React.FC<IBottomNavigationPros> = ({ focused }) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackAppRoutesParams>>();


    const renderScreenCurrent = (nameScreen: 'Home' | 'Settings') => {
        navigation.navigate(nameScreen);
    }

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.item}
                onPress={() => renderScreenCurrent('Home')}
            >
                <Icon
                    name="home"
                    size={18}
                    color={
                        focused === 'Home'
                            ? COLORS.primary
                            : COLORS.placeholder
                    }
                />
            </Pressable>

            <Pressable
                style={styles.item}
                onPress={() => renderScreenCurrent('Settings')}
            >
                <Icon
                    name="settings"
                    size={18}
                    color={
                        focused === 'Settings'
                            ? COLORS.primary
                            : COLORS.placeholder
                    }
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: 90,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.white,

        shadowColor: '#000',
        shadowOpacity: 0.1,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
    },
    item: {
        width: '50%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default BottomNavigator;