import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { COLORS } from '@src/themes/colors';

import Logo from '@src/assets/images/identidadeVisual.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '@src/components/buttonComponent';
import InputComponent from '@src/components/inputComponent';


const Login:React.FC = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const showPassword = () =>{
        setIsVisible(!isVisible);
    }

    const renderRightContent = () => {
        return isVisible
        ? <Icon name="eye" size={18} color={COLORS.dark}/>
        : <Icon name="eye-off" size={18} color={COLORS.dark}/>
    }

    return (
        <View style={styles.container}>
            <Image 
                source={Logo} 
                accessibilityLabel='identidade Visual'
                style={styles.logo}
            />
            <InputComponent 
                value={email}
                onChangeText={(text)=> setEmail(text) }
                placeholder="Informe seu email"
                keyboardType="email-address"
                autoCapitalize="none"
                errorMessage="Preencha o campo"
                leftContent={<Icon name="email" size={18} color={COLORS.dark}
                />}
            />
            <InputComponent 
                value={password}
                onChangeText={(text)=> setPassword(text) }
                placeholder="Informe sua senha" 
                secureTextEntry={isVisible}
                errorMessage="Preencha o campo"
                leftContent={<Icon name="lock" size={18} color={COLORS.dark}
                 />}
                rightContent={renderRightContent}
                showPassword={showPassword}
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