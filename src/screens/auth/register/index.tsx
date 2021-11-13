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
import { validateEmail } from '@src/utils/validations';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [inProgress, setInProgress] = useState(false);

    const { register, setUser } = useContext(AuthContext);

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const goToLogin = () => navigation.navigate('SignIn');

    const handleRegister = async () => {
        if(!fieldsValidade()){
            return;
        }
        
        setInProgress(true);
        const data = await register({ username, email, password });
        setInProgress(false);

        data.status === 201 && successResponse();
    }

    const fieldsValidade = () => {
        if(!username){
            setErrorUsername('Preencha o campo');
        }else{
            setErrorUsername('');
        }
        if(!email){
            setErrorEmail('Preencha o campo');
        }else{
            setErrorEmail('');
        }
        if(!password){
            setErrorPassword('Preencha o campo');
        }else{
            setErrorPassword('');
        }

        if(!username || !email || !password) {
            return false;
        }

        if(!validateEmail(email)){
            setErrorEmail('E-mail é inválido');
            return false;
        }

        setErrorUsername('');
        setErrorEmail('');
        setErrorPassword('');
        return true;
    }

    const successResponse = () => { 
        setIsVisible(true);
    }   


    const showPassword = () => {
        setIsVisible(!isVisible);
    }

    const renderIconEyes = () => {
        return isVisible
            ? <Icon name="eye" size={18} color={COLORS.dark} />
            : <Icon name="eye-off" size={18} color={COLORS.dark} />
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
        setUser({ 
            username:username, 
            email:email, 
        });
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
                        errorMessage={errorUsername}
                        leftContent={<Icon name="account" size={18} color={COLORS.dark}
                        />}
                    />
                    <InputComponent
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Informe seu melhor email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        errorMessage={errorEmail}
                        leftContent={<Icon name="email" size={18} color={COLORS.dark}
                        />}
                    />
                    <InputComponent
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Informe sua senha"
                        secureTextEntry={!isVisible}
                        errorMessage={errorPassword}
                        leftContent={<Icon name="lock" size={18} color={COLORS.dark}
                        />}
                        rightContent={renderIconEyes}
                        showPassword={showPassword}
                    />

                    <Button
                        title="Cadastrar"
                        onPress={handleRegister}
                        inProgress={inProgress}
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