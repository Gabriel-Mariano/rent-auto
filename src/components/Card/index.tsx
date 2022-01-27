import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Grayscale } from 'react-native-color-matrix-image-filters';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';
import { IAutoProps } from '@src/@types/autoType';

import Icon from 'react-native-vector-icons/MaterialIcons';

const CardComponent: React.FC<IAutoProps> = props => {
    const { 
        id,
        name, 
        brand, 
        price, 
        year, 
        photo, 
        available = true, // data fake
        km,
        exchange,
        fuel,
        renavam,
        licensePlate
     } = props;
    const navigation = useNavigation<NativeStackNavigationProp<DrawerProps>>();
    
    const renderPaths = () => {
        const path = {
            onixPlus: {
                uri: require('@src/assets/images/onix-plus.png')
            },
            camaro: {
                uri: require('@src/assets/images/camaro.png')
            }
        }
        return path[photo!].uri;
    }

    const renderIcons = () => {
        return available
            ? <Icon name="check-circle" size={10} color={COLORS.success} />
            : <Icon name="block" size={10} color={COLORS.danger} />
    }

    const renderText = () => {
        return available
            ? <View>
                <Text style={styles.label}>Ao dia</Text>
                <Text style={styles.value}>R$ {price}</Text>
            </View>
            : <View>
                <Text style={styles.labelUnavailable}>
                    Disponível em:
                </Text>
                <Text style={styles.valueUnavailable}>
                    01/12/2021
                </Text>
            </View>
    }
   
    const goToDetails = () => {
        navigation.navigate('Origin', {
            screen:'Details',
            params: {
                id,
                name,
                brand,
                price,
                photo,
                km,
                fuel,
                exchange,
                renavam,
                licensePlate
            }
        });
    }
    
    return (
        <Pressable
            style={styles.container}
            onPress={goToDetails}
        >
            <View>
                <View style={styles.headerContent}>
                    <Text style={styles.brand}>{brand}</Text>
                    <Text style={styles.title}>{name}</Text>
                </View>
                {renderText()}
            </View>
            <View>
                <View style={styles.contentStatus}>
                    {renderIcons()}
                    <Text style={[
                        styles.textStatus,
                        { color: available ? COLORS.success : COLORS.danger }
                    ]}>
                        {available ? ' Disponível' : ' Indisponível no momento'}
                    </Text>
                </View>
                <View>
                    {
                        available
                            ? <Image
                                style={styles.image}
                                source={renderPaths()}
                                accessibilityLabel={name}
                            />
                            : <Grayscale amount={1}>
                                <Image
                                    style={styles.image}
                                    source={renderPaths()}
                                    accessibilityLabel={name}
                                />
                            </Grayscale>
                    }
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,

        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,

    },
    brand: {
        fontFamily: FONTS.regular,
        fontSize: 12,
    },
    headerContent: {
        marginBottom: 2

    },
    title: {
        fontFamily: FONTS.bold,
        fontSize: 18
    },
    label: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        color: COLORS.success
    },
    value: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLORS.danger
    },
    image: {
        width: 200,
        height: 90,
        resizeMode: 'contain',
        // tintColor:'rgba(0,0,0,0.9)'
    },
    contentStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStatus: {
        fontFamily: FONTS.regular,
        fontSize: 12,
        alignSelf: 'center',
    },
    labelUnavailable: {
        fontFamily: FONTS.regular,
        fontSize: 12,
    },
    valueUnavailable: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        color: COLORS.danger
    }
});

export default CardComponent;