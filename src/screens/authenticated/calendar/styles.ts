import { COLORS } from "@src/themes/colors";
import { FONTS } from "@src/themes/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        width:'100%',
        height:90,
        backgroundColor:COLORS.white,

        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontFamily:FONTS.bold,
        fontSize:16,
        color:COLORS.black,
        marginLeft:10
    },
    wrapperInfo:{
        width:'100%',
        height:150,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30
    },
    label:{
        fontFamily: FONTS.regular,
        fontSize: 14,
    },
    describe:{
        fontFamily: FONTS.bold,
        fontSize: 16, 
    },
    total:{
        alignSelf:'flex-end',
        fontFamily: FONTS.bold,
        fontSize: 18, 
    }

});