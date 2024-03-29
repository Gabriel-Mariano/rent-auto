import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.dark,
    },
    text:{
        fontWeight:'bold'
    },
    logo:{
        width:180,
        resizeMode:'contain',
        alignSelf:'center'
    }
});