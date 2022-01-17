import BottomNavigator from '@src/components/BottomNavigator';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Details:React.FC = () => {
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