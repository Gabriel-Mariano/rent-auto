import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, KeyboardAvoidingView, Platform, Keyboard, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from '@src/routes/app_routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { styles } from './styles';
import { COLORS } from '@src/themes/colors';

import Logo from '@src/assets/images/identidadeVisual.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '@src/components/buttonComponent';
import InputComponent from '@src/components/inputComponent';



const Register:React.FC = () =>{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

    const goToLogin = () => navigation.navigate('Login');
    

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios"?"padding" : "height"}  keyboardVerticalOffset={-50}>
                <Pressable onPress={Keyboard.dismiss}>
                    <Image 
                        source={Logo} 
                        accessibilityLabel='identidade Visual'
                        style={styles.logo}
                    />
                    <InputComponent 
                        value={username}
                        onChangeText={(text)=> setUsername(text) }
                        placeholder="Informe seu nome"
                        autoCapitalize="none"
                        errorMessage="Preencha o campo"
                        leftContent={<Icon name="account" size={18} color={COLORS.dark}
                        />}
                    />
                    <InputComponent 
                        value={email}
                        onChangeText={(text)=> setEmail(text) }
                        placeholder="Informe seu melhor email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        errorMessage="Preencha o campo"
                        leftContent={<Icon name="email" size={18} color={COLORS.dark}
                        />}
                    />
                    <InputComponent 
                        value={password}
                        onChangeText={(text)=> setPassword(text) }
                        placeholder="Informe uma senha" 
                        errorMessage="Preencha o campo"
                        leftContent={<Icon name="lock" size={18} color={COLORS.dark}
                        />}
                    />
                
                    <Button 
                        title="Cadastrar" 
                        onPress={()=>{}}
                    />
                    <Button 
                        title="Voltar" 
                        color={COLORS.primary}
                        backgroundColor={COLORS.secondary}
                        onPress={goToLogin}
                    />
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Register;