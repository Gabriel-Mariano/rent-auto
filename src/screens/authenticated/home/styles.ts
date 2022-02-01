import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    wrapperContent:{
        flex:1,
        backgroundColor:COLORS.background,
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:40
    },
    warningText:{
        alignSelf:'center',
        marginTop:30,
        fontFamily:FONTS.bold,
        color:COLORS.dark,
    },
    wrapperListCards:{
        flex:1
    }
});