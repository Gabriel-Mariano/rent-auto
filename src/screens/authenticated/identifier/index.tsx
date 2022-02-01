import React, { useContext, useState} from 'react';
import { Alert, View } from 'react-native';
import { mask, unMask } from 'remask';
import { registerCpf } from '@src/services/users';
import { RouteParams } from '@src/routes/customized/customStack/types';
import { styles } from './styles';

import ButtonComponent from '@src/components/Button';
import InputComponent from '@src/components/TextInput';
import AuthContext from '@src/contexts/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';
import { useNavigation } from '@react-navigation/native';

const IdentifierScreen = (props:RouteParams) => {
    const [cpf, setCpf] = useState('');
    const [errors, setErrors] = useState('');
    const [inProgress, setInProgress] = useState(false);

    const { user, setUser } = useContext(AuthContext);
    const { 
        id,
        name,
        photo,
        price,
        exchange,
        fuel,
        km,
        brand,
        renavam,
        licensePlate,
    } = props.route.params;

    const navigation = useNavigation<NativeStackNavigationProp<DrawerProps>>();

    const handleChange = (value:string) => {
        if (!value) {
          setErrors('Insira seu CPF');
        } else {
          setErrors('');
        }
    
        setCpf(mask(unMask(value), ['999.999.999-99']));
    };

      const handleRegister = async () => {
        setInProgress(true);
        const cpfFormated = unMask(cpf);
        
        const data = {
            email:user?.email,
            cpf:cpfFormated
        }
        const res = await registerCpf(data);
        
        res.data
            ? successResponse()
            : failedResponse()
      }

      const successResponse = () => {
        Alert.alert("Cadastrado com sucesso","Seu CPF foi cadastrado com sucesso");  
        setUser({
            ...user,
            username:user!.username,
            email:user!.email,
            cpf
        });
        setInProgress(false);

        navigation.navigate('Origin',{ screen:'Finalize',
            params:{
                id,
                name,
                photo,
                price,
                exchange,
                fuel,
                km,
                brand,
                renavam,
                licensePlate,
            }
        });
      }

      const failedResponse = () => {
        Alert.alert("Opss..","Houve uma falha, tente novamente mais tarde." )  
        setInProgress(false)
      }


    return (
        <View style={styles.container}>
            <View>
                <InputComponent 
                    value={cpf}
                    label="Informe seu CPF"
                    onChangeText={(value)=>handleChange(value)}
                    errorMessage={errors}
                />
            </View>
            <View>
                <ButtonComponent 
                    title="Confirmar"
                    inProgress={inProgress}
                    onPress={handleRegister}
                />
            </View>
        </View>
    );
}

export default IdentifierScreen;