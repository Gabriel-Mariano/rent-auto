import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Home:React.FC = () =>{
    return (
        <View style={styles.container}>
            <Text>Bem-vindo ao Rent Auto 🚗 </Text>
        </View>
    );
}

export default Home;