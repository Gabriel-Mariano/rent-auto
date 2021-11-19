import BottomNavigator from '@src/components/BottomNavigator';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Settings:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Tela de Configurações</Text>
            <BottomNavigator focused="Settings"/>
        </View>
    );
}

export default Settings;