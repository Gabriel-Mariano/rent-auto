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
import { useNavigation } from '@react-navigation/core';
import { StackParams } from '@src/routes/app_routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { validateEmail } from '@src/utils/validations';

import { styles } from './styles';
import { COLORS } from '@src/themes/colors';

import Logo from '@src/assets/images/identidadeVisual.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '@src/components/buttonComponent';
import InputComponent from '@src/components/inputComponent';
import AuthContext from '@src/contexts/auth';


const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [inProgress, setInProgress ] = useState(false);
    
    const { signIn } = useContext(AuthContext);

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const handleSignIn = async () => {
        if(!fieldsValidate()){
            return;
        }
        setInProgress(true);
        await signIn({ email, password });
        setInProgress(false);
    }

    const fieldsValidate = () => {
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
        
        if(!email || !password){
            return false;
        }

        if (!validateEmail(email)) {
            setErrorEmail('E-mail é inválido');
            return false;
        }

        setErrorEmail('');
        setErrorPassword('');
        return true;
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
                        <InputComponent
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Informe seu email"
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
                        <TouchableWithoutFeedback onPress={goToForgotPassword}>
                            <Text style={styles.linking}>Esqueci minha senha</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Button
                            title="Entrar"
                            inProgress={inProgress}
                            onPress={handleSignIn}
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