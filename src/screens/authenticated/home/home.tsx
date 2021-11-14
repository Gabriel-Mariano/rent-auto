import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import Button from '@src/components/Button';
import AuthContext from '@src/contexts/auth';


const Home:React.FC = () =>{
    const { signOut } = useContext(AuthContext);

    return (
        <>
        <View style={styles.container}>
            <Text>Bem-vindo ao Rent Auto 🚗 </Text>
            <Button title="Sair" onPress={signOut}/>
        </View>
        </>
    );
}

export default Home;