import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { IRouteProps } from './index.d';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

import BottomNavigator from '@src/components/BottomNavigator';
import ButtonComponent from '@src/components/Button';
import InfoItems from '@src/components/InfoItems';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackProps } from '@src/routes/customized/customStack/types';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';


const Details = (props: IRouteProps) => {
    const { name, brand, photo, km, fuel, exchange } = props.route.params;
    const navigation = useNavigation<NativeStackNavigationProp<DrawerProps>>();

    const renderPaths = () => {
        const path = {
            onixPlus: {
                uri: require('@src/assets/images/onix-plus.png')
            }
        }
        return path[photo!].uri;
    }

    const goToCalendarScreen = () => {
       navigation.navigate('Home', {
           screen:'Calendar'
       });
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
            <View>

            </View>
            <View style={styles.footerContent}>
                <ButtonComponent title='Próximo' onPress={goToCalendarScreen} />
            </View>
            <BottomNavigator focused="Home" />
        </SafeAreaView>
    );
}

export default Details;