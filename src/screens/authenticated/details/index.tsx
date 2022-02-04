import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';
import { RouteParams } from '@src/routes/customized/customStack/types/index.d';

import ButtonComponent from '@src/components/Button';
import InfoItems from '@src/components/InfoItems';
import { ScrollView } from 'react-native-gesture-handler';

const Details = (props: RouteParams) => {
    const { id, name, brand, price, photo, km, fuel, exchange, renavam, licensePlate } = props.route.params;
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
    
    const goToCalendarScreen = () => {
       navigation.navigate('Origin', {
           screen:'Calendar',
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
        <SafeAreaView style={styles.container}>
            <ScrollView 
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
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
                            <Text style={styles.value}>R$ {price}</Text>
                        </View>
                    </View>
                    <InfoItems
                        {...{
                            km,
                            exchange,
                            fuel
                        }}
                    />
            </ScrollView>
            <View style={styles.footerContent}>
                <ButtonComponent title='Próximo' onPress={goToCalendarScreen} />
            </View>
            
            {/* <BottomNavigator focused="Home" /> */}
        </SafeAreaView>
    );
}

export default Details;