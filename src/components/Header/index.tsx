import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PressableArrow, PressableTabBars } from '../Pressable';
import { FONTS } from '@src/themes/fonts';
import { COLORS } from '@src/themes/colors';
import Logo from '@src/assets/images/identidadeVisual03.png';

const Header:React.FC = () => {
    const location = useRoute()
    
    const renderLeftContent = () => {
        return location.name === 'Home' || location.name === 'Settings'
            ? <PressableTabBars/>
            : <PressableArrow/>
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftContent}>
                <Text>
                    {renderLeftContent()}
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
            <View/>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        width:'100%',
        height:50,
        backgroundColor:COLORS.white,
    },
    leftContent:{
        alignItems:'center'
    },
    title:{
        fontFamily:FONTS.bold
    },
    logo:{
        width:90,
        height:30
    }

})