import React from 'react';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';
import { View, Text, StyleSheet } from 'react-native';
import { IInfoProps } from './index.d';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const InfoItems: React.FC<IInfoProps> = props => {
    const { km, fuel, exchange } = props;
    return (
        <View style={styles.container}>
            <View style={styles.wrapperContent}>
                <View style={styles.contentItem}>
                    <Ionicons name="speedometer-outline" size={18} />
                    <Text style={styles.text}>
                        {km}km
                    </Text>
                </View>
                <View style={styles.contentItem}>
                    <MaterialCommunityIcons name="steering" size={20} />
                    <Text style={styles.text}>
                        {exchange}
                    </Text>
                </View>
            </View>
            <View style={styles.wrapperContent}>
                <View style={styles.contentItem}>
                    <Feather name="droplet" size={18} />
                    <Text style={styles.text}>
                        {fuel}
                    </Text>
                </View>
                <View style={styles.contentItem}>
                    <Text>
                        <Feather name="info" size={18} />
                    </Text>
                    <Text style={styles.text}>
                        Mais Info
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default InfoItems;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 40
    },
    wrapperContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5
    },
    contentItem: {
        width: 100,
        height: 90,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,

        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    text: {
        fontFamily: FONTS.regular,
        textAlign: 'center',
        marginTop: 5
    }
})