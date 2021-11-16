import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, KeyboardAvoidingView, Platform, Keyboard, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { StackAuthRoutesParams } from '@src/routes/unauthenticated/index.d';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { styles } from './styles';
import { COLORS } from '@src/themes/colors';

import Logo from '@src/assets/images/identidadeVisual.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextInput from '@src/components/TextInput';
import Button from '@src/components/Button';
import Modal from '@src/components/Modal';
import AuthContext from '@src/contexts/auth';

type FormValues = {
    username:string;
    email:string;
    password:string;
}

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [inProgress, setInProgress] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const { register, setUser } = useContext(AuthContext);

    const navigation = useNavigation<NativeStackNavigationProp<StackAuthRoutesParams>>();

    const handleRegister = async ({username, email, password }:FormValues) => {

        setInProgress(true);
        const data = await register({ username, email, password });
        setInProgress(false);

        data.status === 201 && successResponse(username, email, password);
    }

    const successResponse = (username:string, email:string, password:string) => { 
        setIsVisible(true);

        setUsername(username);
        setEmail(email);
        setPassword(password);
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
        <Modal
            title="Conta criada com sucesso"
            describe="Sua conta foi criada com sucesso 🎉. Agora você será redirecionado para Home."
            isVisible={isVisible}
            buttonText="Ok"
            onClose={closeModal}
        />
    );

    const closeModal = () => {
        setIsVisible(false);
        setUser({ 
            username:username, 
            email:email,
            password:password 
        });
    }

    const goToLogin = () => navigation.navigate('SignIn');

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}   
                keyboardVerticalOffset={-50}
            >
                <Pressable onPress={Keyboard.dismiss}>
                    <Image
                        source={Logo}
                        accessibilityLabel='identidade Visual'
                        style={styles.logo}
                    />
                    <Controller 
                        control={control}
                        name="username"
                        rules={{ required: true }}
                        render={ ({ field: {onChange, onBlur, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Informe seu nome"
                                autoCapitalize="none"
                                leftContent={ <Icon name="account" size={18} color={COLORS.dark}/> }
                                errorMessage={
                                    errors.username?.type === 'required' 
                                    ? "Preencha o campo" 
                                    : ''
                                }
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        rules={{ required: true, pattern: /\S+@\S+\.\S+/ }}
                        render={ ({ field: {onChange, onBlur, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Informe seu melhor email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                leftContent={<Icon name="email" size={18} color={COLORS.dark} />}
                                errorMessage={
                                    errors.email?.type === 'required'
                                    ? "Preencha o campo"
                                    : errors.email?.type === 'pattern'
                                    ? "E-mail inválido"
                                    :  ''
                                }
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        rules={{ required: true }}
                        render={ ({ field: {onChange, onBlur, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Informe sua senha"
                                secureTextEntry={!isVisible}
                                showPassword={showPassword}
                                leftContent={<Icon name="lock" size={18} color={COLORS.dark}/>}
                                rightContent={renderIconEyes}
                                errorMessage={
                                    errors.password?.type === 'required' 
                                    ? "Preencha o campo"
                                    : ''
                                }
                            />
                        )}
                    />
                    <Button
                        title="Cadastrar"
                        onPress={handleSubmit(handleRegister)}
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