import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, KeyboardAvoidingView, Platform, Keyboard, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '@src/routes/app_routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { styles } from './styles';
import { COLORS } from '@src/themes/colors';

import Logo from '@src/assets/images/identidadeVisual.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '@src/components/buttonComponent';
import InputComponent from '@src/components/inputComponent';
import ModalComponent from '@src/components/modal';
import AuthContext from '@src/contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const { register, user } = useContext(AuthContext);

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const goToLogin = () => navigation.navigate('SignIn');

    const handleRegister = async () => {
        const status = await register({ username, email, password });
        
        status === 201
        ? successResponse(status)
        : failedResponse(status)
        
    }

    const successResponse = (status:number) =>{ 
        setIsVisible(true);
    }   

    const failedResponse = (status:number) => {
        Alert.alert('Opss','Usuário já existente 😑');
    }

    const renderModal = () => (
        <ModalComponent
            title="Conta criada com sucesso"
            describe="Sua conta foi criada com sucesso 🎉. Agora você será redirecionado para Home."
            isVisible={isVisible}
            buttonText="Ok"
            onClose={onClose}
        />
    );

    const onClose = () => {
        setIsVisible(false);
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={-50}>
                <Pressable onPress={Keyboard.dismiss}>
                    <Image
                        source={Logo}
                        accessibilityLabel='identidade Visual'
                        style={styles.logo}
                    />
                    <InputComponent
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        placeholder="Informe seu nome"
                        autoCapitalize="none"
                        errorMessage="Preencha o campo"
                        leftContent={<Icon name="account" size={18} color={COLORS.dark}
                        />}
                    />
                    <InputComponent
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Informe seu melhor email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        errorMessage="Preencha o campo"
                        leftContent={<Icon name="email" size={18} color={COLORS.dark}
                        />}
                    />
                    <InputComponent
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Informe uma senha"
                        errorMessage="Preencha o campo"
                        leftContent={<Icon name="lock" size={18} color={COLORS.dark}
                        />}
                    />

                    <Button
                        title="Cadastrar"
                        onPress={handleRegister}
                    />
                    <Button
                        title="Voltar"
                        color={COLORS.primary}
                        backgroundColor={COLORS.secondary}
                        onPress={goToLogin}
                    />
                </Pressable>
            </KeyboardAvoidingView>
            {renderModal()}
        </SafeAreaView>
    );
}

export default Register;