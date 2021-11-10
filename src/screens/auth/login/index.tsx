import React, {useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    KeyboardAvoidingView, 
    Platform, 
    Keyboard, 
    Pressable,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { StackParams } from '@src/routes/app_routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const showPassword = () =>{
        setIsVisible(!isVisible);
    }

    const renderIconEyes = () => {
        return isVisible
        ? <Icon name="eye" size={18} color={COLORS.dark}/>
        : <Icon name="eye-off" size={18} color={COLORS.dark}/>
    }

    const goToHome = () => navigation.navigate('Home');
    const goToRegister = () => navigation.navigate('Register');
    const goToForgotPassword = () => console.log('Go to forgot password ');

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios"?"padding" : "height"}  keyboardVerticalOffset={-50}>
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
                            secureTextEntry={!isVisible}
                            errorMessage="Preencha o campo"
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
                            onPress={goToHome}
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

export default Login;