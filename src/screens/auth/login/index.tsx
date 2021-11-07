import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import { COLORS } from '@src/themes/colors';

import Button from '@src/components/buttonComponent';

const Login:React.FC = () =>{
    return (
        <View style={styles.container}>
            <Button title="Entrar" />
            <Button 
                title="Cadastrar" 
                color={COLORS.primary}
                backgroundColor={COLORS.secondary}
            />
        </View>
    );
}

export default Login;