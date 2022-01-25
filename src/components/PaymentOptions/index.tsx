import React, { useState} from 'react';
import { View } from 'react-native';
import { IPaymentOptionProps } from './index.d'; 

import RadioButton from '../RadioButton';

const PaymentOptionsComponent:React.FC<IPaymentOptionProps> = props => {
    const { data } = props;
    const [checkedValue, setCheckedValue ] = useState({ value:0 });

    const selectMethodPayment = (value:number) => {
        if(value === 0) {
            setCheckedValue({ value:0 });
        }
        if(value === 1) {
            setCheckedValue({ value:1 });
        }
    }

    return (
        <View>
            {data.map((values,index)=> (
                    <RadioButton 
                        title={values.label} 
                        value={values.value}
                        checkedValue={checkedValue}
                        onPress={()=> selectMethodPayment(values.value) }
                        key={index}
                    />
                )
            )}
        </View>
    );
}

export default PaymentOptionsComponent;
