import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { IDataProps } from './index.d';

import Card from '../Card';

const ListCardComponent:React.FC<IDataProps> = props => {
    const { data } = props;

    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <Card 
                        id={item.id}
                        name={item.name}
                        brand={item.brand.name}
                        price={item.price.toFixed(2)}
                        photo={item.photo}
                        available={item.available}
                        nextDateAvailable={item.nextDateAvailable}
                        fuel={item.fuel}
                        km={item.km}
                        exchange={item.exchange}
                        renavam={item.renavam}
                        licensePlate={item.licensePlate}
                    />  
                );
            }}
            keyExtractor={item => item.id}
        />
    );
}

export default ListCardComponent;