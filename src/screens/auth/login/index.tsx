import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

const Login:React.FC = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Bem-vindo ao RentCar 🚗 
            </Text>
        </View>
    );
}

export default Login;