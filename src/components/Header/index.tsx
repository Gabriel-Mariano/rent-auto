import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PressableArrowIcon, PressableTabBars } from '../Pressable';
import { FONTS } from '@src/themes/fonts';
import { COLORS } from '@src/themes/colors';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';
import { RouteProp, useRoute } from '@react-navigation/native';

import Logo from '@src/assets/images/identidadeVisual03.png';

const HeaderComponent: React.FC = () => {
    const { params } = useRoute<RouteProp<DrawerProps>>();

    const renderPressableIcon = () => (
        params?.screen === 'Home' || params?.screen === undefined
            ? <PressableTabBars />
            : <PressableArrowIcon screen={params.screen} />
    )

    return (
        <View style={styles.container}>
            <View style={styles.leftContent}>
                {renderPressableIcon()}
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
}


export default HeaderComponent;

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