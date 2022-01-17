import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { IRouteProps } from './index.d';

import BottomNavigator from '@src/components/BottomNavigator';

const Details = (props: IRouteProps) => {
    const { name, brand, photo } = props.route.params;

    const renderPaths = () => {
        const path = {
            onixPlus: {
                uri: require('@src/assets/images/onix-plus.png')
            }
        }
        return path[photo!].uri;
    }

    return (
        <View style={styles.container}>
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
            <View>

            </View>
            <BottomNavigator focused="Home" />
        </View>
    );
}

export default Details;