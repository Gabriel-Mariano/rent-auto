import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import ButtonComponent from '@src/components/buttonComponent';
import ModalComponent from '@src/components/modal';


const Home:React.FC = () =>{
    const [isVisible, setIsVisible] = useState(true);

    const onClose = () => {
        setIsVisible(false);
    }

    return (
        <>
        <View style={styles.container}>
            
            <Text>Bem-vindo ao Rent Auto 🚗 </Text>
          
        </View>
        <ModalComponent 
            title="Conta criada com sucesso"
            describe="Sua conta foi criada com sucesso 🎉. Agora você será redirecionado para Home."
            isVisible={isVisible}
            buttonText="Ok"  
            onClose={onClose}
            />
        </>
    );
}

export default Home;