import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { COLORS } from '@src/themes/colors';

import Logo from '@src/assets/images/identidadeVisual.png';
import Button from '@src/components/buttonComponent';
import InputComponent from '@src/components/inputComponent';

const Login:React.FC = () =>{
    return (
        <View style={styles.container}>
            <Image 
                source={Logo} 
                accessibilityLabel='identidade Visual'
                style={styles.logo}
            />
            <InputComponent 
                placeholder="Informe seu email"
                keyboardType="email-address"
                autoCapitalize="none"
                errorMessage="Preencha o campo"
                leftContent={()=><View/>}
            />
            <InputComponent 
                placeholder="Informe sua senha" 
                secureTextEntry
                errorMessage="Preencha o campo"
                leftContent={()=><View/>}
                rightContent={()=><View/>}
            />
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