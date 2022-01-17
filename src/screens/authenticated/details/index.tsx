import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { IRouteProps } from './index.d';

import BottomNavigator from '@src/components/BottomNavigator';

const Details = (props:IRouteProps) => {
    const { name, brand} = props.route.params;

    return (
        <View style={styles.container}>
            <Text>
                Tela de detalhes
            </Text>
            <BottomNavigator focused="Home"/>
        </View>
    );
}

export default Details;