import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import PaymentOptionsComponent from '../PaymentOptions';
import { IPaymentListProps } from './index.d';

const PaymentListComponent:React.FC<IPaymentListProps> = props => {
    const { data } = props;

    return (
        <FlatList 
            data={data}
            renderItem={({ item, index })=> {
                return (
                    <PaymentOptionsComponent text={item}/>
                )
            }}
        />
    )
}

export default PaymentListComponent;