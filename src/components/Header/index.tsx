import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PressableTabBars } from '../Pressable';
import { FONTS } from '@src/themes/fonts';
import { COLORS } from '@src/themes/colors';

import Logo from '@src/assets/images/identidadeVisual03.png';

const Header: React.FC = () => (
    <View style={styles.container}>
        <View style={styles.leftContent}>
            <Text>
                <PressableTabBars />
            </Text>
        </View>
        <View>
            <Image
                source={Logo}
                accessibilityLabel="Identidade Visual"
                style={styles.logo}
                resizeMode='contain'
            />
        </View>
        <View />
    </View>
)


export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        width: '100%',
        height: 50,
        backgroundColor: COLORS.white,
    },
    leftContent: {
        alignItems: 'center'
    },
    title: {
        fontFamily: FONTS.bold
    },
    logo: {
        width: 90,
        height: 30
    }

})