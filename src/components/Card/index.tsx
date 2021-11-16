import React from 'react';
import { View, Text, Image, ImageProps } from 'react-native';
import OnixPlus from '@src/assets/images/onix-plus.png';
import { StyleSheet } from 'react-native';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';

interface CardProps {
    id?:string;
    name?:string;
    brand?:string;
    price?:string;
    year?:number;
    image:ImageProps;
}

const CardComponent:React.FC<CardProps> = props => {
    const { name, brand, price, year, image } = props;
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContent}>
                    <Text style={styles.brand}>{brand}</Text>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Ao dia</Text>
                    <Text style={styles.value}>R$ {price}</Text>
                </View> 
            </View>
            <View>
                <Image 
                    style={styles.image}
                    source={image} 
                    accessibilityLabel="Onix Plus" 
                />
            </View>
        </View>
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

export default CardComponent;