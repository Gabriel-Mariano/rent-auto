import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.dark,
    },
    logo:{
        width:180,
        resizeMode:'contain',
        alignSelf:'center'
    },
    linking:{
        alignSelf:'flex-end',
        fontWeight:'bold',
        color:COLORS.white,
        textDecorationLine:'underline',
        padding:10,
        marginBottom:12, 
    }
    
});

