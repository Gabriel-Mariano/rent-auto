import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Pressable,
    TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/core';
import { StackAuthRoutesParams } from '@src/routes/unauthenticated/index.d';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { styles } from './styles';
import { COLORS } from '@src/themes/colors';

import Logo from '@src/assets/images/identidadeVisual.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '@src/components/Button';
import TextInput from '@src/components/TextInput';
import AuthContext from '@src/contexts/auth';

type FormValues = {
    email:string;
    password:string;
}

const SignIn: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [inProgress, setInProgress ] = useState(false);

    const { control, handleSubmit, formState: { errors }} = useForm<FormValues>();
    const { signIn } = useContext(AuthContext);

    const navigation = useNavigation<NativeStackNavigationProp<StackAuthRoutesParams>>();

    const handleSignIn = async ({email, password }:FormValues) => {

        setInProgress(true);
        await signIn({ email, password });
        setInProgress(false);
    }

    const showPassword = () => {
        setIsVisible(!isVisible);
    }

    const renderIconEyes = () => {
        return isVisible
            ? <Icon name="eye" size={18} color={COLORS.dark} />
            : <Icon name="eye-off" size={18} color={COLORS.dark} />
    }

    const goToRegister = () => navigation.navigate('Register');
    const goToForgotPassword = () => console.log('Go to forgot password ');

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={-50}
            >
                <Pressable onPress={Keyboard.dismiss}>
                    <View>
                        <Image
                            source={Logo}
                            accessibilityLabel='identidade Visual'
                            style={styles.logo}
                        />
                    </View>
                    <View>
                        <Controller
                            control={control}
                            name="email"
                            rules={{ required:true, pattern:/\S+@\S+\.\S+/ }}
                            render={( { field: {onChange, onBlur, value} }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Informe seu email"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    leftContent={ <Icon name="email" size={18} color={COLORS.dark}/> }
                                    errorMessage={
                                        errors.email?.type === 'required'
                                        ? 'Preencha o campo'
                                        : errors.email?.type === 'pattern'
                                        ? 'E-mail inválido'
                                        : ''
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
                        <TouchableWithoutFeedback onPress={goToForgotPassword}>
                            <Text style={styles.linking}>Esqueci minha senha</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Button
                            title="Entrar"
                            inProgress={inProgress}
                            onPress={handleSubmit(handleSignIn)}
                        />
                        <Button
                            title="Cadastrar"
                            color={COLORS.primary}
                            backgroundColor={COLORS.secondary}
                            onPress={goToRegister}
                        />
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default SignIn;