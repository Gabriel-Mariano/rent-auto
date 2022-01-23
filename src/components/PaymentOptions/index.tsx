import React, { useState} from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';
import { IPaymentOptionProps } from './index.d'; 

import Checkbox from 'react-native-bouncy-checkbox';

const PaymentOptionsComponent:React.FC<IPaymentOptionProps> = props => {
    const { text } = props;
    const [checkBoxState, setCheckBoxState] = useState(false);
    
    const changeMethodPayment = (selected:boolean) => {
        if(selected){
            return;
        }
    }

    return (
        <Checkbox
            size={16}
            text={text}
            textStyle={{ fontFamily:FONTS.bold}}
            fillColor={COLORS.success}
            unfillColor={COLORS.white}
            iconStyle={{ borderColor: COLORS.success }}
            onPress={(e)=>{ changeMethodPayment(e)}}
            isChecked={checkBoxState}
            style={styles.container}
        />
    );
}

export default PaymentOptionsComponent;

const styles = StyleSheet.create({
    container:{
        padding:15,
        width:'100%',
        
        borderWidth:1,
        borderRadius:3,
        marginTop:15

    }
})