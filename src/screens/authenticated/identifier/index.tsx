import React, { useState} from 'react';
import { View, Image} from 'react-native';
import { mask, unMask } from 'remask';
import { styles } from './styles';

import cpfIcon from '@src/assets/images/cpfIcon.png';
import ButtonComponent from '@src/components/Button';
import InputComponent from '@src/components/TextInput';
import { RouteParams } from '@src/routes/customized/customStack/types';

const IdentifierScreen = (props:RouteParams) => {
    const [cpf, setCpf] = useState('');
    const [errors, setErrors] = useState('');

    const { id } = props.route.params;

    const handleChange = (value:string) => {
        if (!value) {
          setErrors('Insira seu CPF');
        } else {
          setErrors('');
        }
    
        setCpf(mask(unMask(value), ['999.999.999-99']));
      };

    return (
        <View style={styles.container}>
            <View>
                {/* <Image 
                    source={cpfIcon} 
                    accessibilityLabel="Icone do CPF" 
                    style={styles.image}
                /> */}
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
                    onPress={()=> {} }
                />
            </View>
        </View>
    );
}

export default IdentifierScreen;