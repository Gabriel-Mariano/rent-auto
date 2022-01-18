import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    link:{
        fontFamily:FONTS.italic,
        color:COLORS.primary,
        padding:20,
        marginLeft:10,
        textDecorationLine:'underline',
        zIndex:999,
    },
    contentImage: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',

        paddingHorizontal: 40,
    },
    image: {
        width: '100%',
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    wrapperContent: {
        alignItems: 'center'
    },
    brand: {
        fontFamily: FONTS.regular,
        fontSize: 12,
    },
    title: {
        fontFamily: FONTS.bold,
        fontSize: 18
    },
    label: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.success
    },
    value: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLORS.danger
    },
    footerContent:{
        width:'100%',
        position:'absolute',
        bottom:90,
        justifyContent:'center',
        paddingHorizontal:50
    }
});