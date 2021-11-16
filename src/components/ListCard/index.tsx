import React from 'react';
import { View, Text, Image, FlatListProps } from 'react-native';
import OnixPlus from '@src/assets/images/onix-plus.png';
import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../Card';

type CardProps = {
    id?:string;
    name?:string;
    brand?:string,
    price?:string,
    year?:number,
    image?:string;
}

type DataProps = {
    data:CardProps[];
}

const ListCardComponent:React.FC<DataProps> = props => {
    const { data } = props;
    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => {
                return (
                    <>
                    <Card 
                        name={item.name}
                        brand={item.brand}
                        price={item.price}
                        image={item.image}
                        
                    />  
                    </>
                );
            }}
            keyExtractor={item => item.id}

        ></FlatList>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:COLORS.white,
        borderRadius:6,
        paddingVertical:10,
        paddingHorizontal:10,
        marginVertical:10,

        elevation:1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
  
    },
    brand:{
        fontFamily:FONTS.regular,
        fontSize:12,
    },
    headerContent:{
        marginBottom:2
        
    },
    title:{
        fontFamily:FONTS.bold,
        fontSize:18
    },
    label:{
        fontFamily:FONTS.regular,
        fontSize:12,
        color:COLORS.success
    },
    value:{
        fontFamily:FONTS.bold,
        fontSize:16,
        color:COLORS.primary
    },
    image:{
        width:200,
        height:90,
        resizeMode:'contain'
    }
});

export default ListCardComponent;