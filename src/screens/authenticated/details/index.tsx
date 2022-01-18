import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { IRouteProps } from './index.d';
import { useNavigation } from '@react-navigation/native';

import BottomNavigator from '@src/components/BottomNavigator';
import ButtonComponent from '@src/components/Button';
import InfoItems from '@src/components/InfoItems';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = (props: IRouteProps) => {
    const { name, brand, photo, km, fuel, exchange } = props.route.params;
    const navigation = useNavigation();

    const renderPaths = () => {
        const path = {
            onixPlus: {
                uri: require('@src/assets/images/onix-plus.png')
            }
        }
        return path[photo!].uri;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.link} onPress={() => navigation.goBack()} >
                Voltar
            </Text>
            <View style={styles.contentImage}>
                <Image
                    source={renderPaths()}
                    resizeMode='contain'
                    style={styles.image}
                />
            </View>
            <View style={styles.headerContent}>
                <View style={styles.wrapperContent}>
                    <Text style={styles.brand}>{brand}</Text>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.wrapperContent}>
                    <Text style={styles.label}>Ao dia</Text>
                    <Text style={styles.value}>R$XX,XX</Text>
                </View>
            </View>
            <InfoItems
                {...{
                    km,
                    exchange,
                    fuel
                }}
            />
            <View style={styles.footerContent}>
                <ButtonComponent title='Confirmar' />
            </View>
            <BottomNavigator focused="Home" />
        </SafeAreaView>
    );
}

export default Details;