import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';
import { IPaymentProps } from './index.d';

import PaymentOptionsComponent from '../PaymentOptions';

const PaymentCompent:React.FC<IPaymentProps> = (props) => {
    const { title } = props;
    const payments = [
        {
            label:'Boleto',
            value:0,
        },
        {
            label:'Cartão',
            value:1
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.areaTitle}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View style={styles.areaPayments}>
                <PaymentOptionsComponent
                    data={payments}
                />
            </View>
        </View>
    );
}

export default PaymentCompent;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30
    },
    areaTitle:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,

        borderWidth:2,
        borderStyle:'dotted',
        borderColor:COLORS.dark,
        borderRadius:3
    },
    title:{
        fontFamily:FONTS.bold,
        fontSize:16,
        color:COLORS.dark
    },
    areaPayments:{
        marginTop:20,
    }
})