import React, { useEffect } from 'react';
import { View, Text, Image, FlatListProps } from 'react-native';
import OnixPlus from '@src/assets/images/onix-plus.png';
import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';
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
                        image={item.photo}
                        available={item.available}
                    />  
                );
            }}
            keyExtractor={item => item.id}
        />
    );
}

export default ListCardComponent;