import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        width:'100%',
        height:40,
        backgroundColor:COLORS.primary,

        justifyContent:'center',
        alignItems:'center'
    },
    titleScreen:{
        alignSelf:'center',
        fontFamily:FONTS.bold,
        fontSize:18,
        color:COLORS.white
    },
    title:{
        fontFamily:FONTS.semiBold,
        fontSize:16,
        color:COLORS.dark,
        alignSelf:'center'
    },
    body:{
        paddingHorizontal:30,
    },
    areaTitle:{
        paddingVertical:20,
    },
    label:{
        fontFamily:FONTS.semiBold,
        fontSize:16,
        color:COLORS.dark,
        marginTop:10
    }
});

export default styles;