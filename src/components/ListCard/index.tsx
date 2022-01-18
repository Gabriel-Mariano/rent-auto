import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { IBrandProps } from '@src/screens/authenticated/home/index.d';
import Card from '../Card';

type CardProps = {
    id:string;
    name?:string;
    brand?:IBrandProps,
    price?:string,
    year?:string,
    photo?:string;
    fuel?: string;
    exchange?: 'Manual' | 'Auto';
    km?: number;
}

type DataProps = {
    data:CardProps[];
}

const ListCardComponent:React.FC<DataProps> = props => {
    const { data } = props;

    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <Card 
                        name={item.name}
                        brand={item.brand.name}
                        price={item.price}
                        photo={item.photo}
                        available={item.available}
                        fuel={item.fuel}
                        km={item.km}
                        exchange={item.exchange}
                    />  
                );
            }}
            keyExtractor={item => item.id}
        />
    );
}

export default ListCardComponent;