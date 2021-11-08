import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.dark,

        paddingHorizontal:50,
    },
    text:{
        fontWeight:'bold'
    },
    logo:{
        width:180,
        resizeMode:'contain',
    }
});

