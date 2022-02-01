import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ScrollView  } from 'react-native-gesture-handler';
import { RouteParams } from '@src/routes/customized/customStack/types';

import AuthContext from '@src/contexts/auth';
import ButtonComponent from '@src/components/Button';
import PaymentCompent from '@src/components/Payment';
import styles from './styles';
import moment from 'moment';


const FinalizeScreen = (props:RouteParams) => {
    const { 
        name,
        brand,
        renavam,
        licensePlate,
        price,
        from,
        until,
        total
    } = props.route.params;

    const { user } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleScreen}>
                    Confirmar Reserva
                </Text>
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.areaTitle}>
                    <Text style={styles.title}>
                        Dados do Cliente
                    </Text>
                </View>
                <View>
                    <Text style={styles.label}>
                        Nome: <Text style={styles.description}>{user?.username}</Text>
                    </Text>
                    <Text style={styles.label}>
                        E-mail: <Text style={styles.description}>{user?.email}</Text>
                    </Text>
                    <Text style={styles.label}>
                        CPF: <Text style={styles.description}>{user?.cpf}</Text>
                    </Text>
                </View>

                <View style={styles.areaTitle}>
                    <Text style={styles.title}>
                        Dados do Veículo
                    </Text>
                </View>
                <View>
                    <Text style={styles.label}>
                        Carro: <Text style={styles.description}>{name}</Text>
                    </Text>
                    <Text style={styles.label}>
                        Marca: <Text style={styles.description}>{brand}</Text>
                    </Text>
                    <Text style={styles.label}>
                        Renavam: <Text style={styles.description}>{renavam}</Text>
                    </Text>
                    <Text style={styles.label}>
                        Placa: <Text style={styles.description}>{licensePlate}</Text>
                    </Text>
                </View>

                <View style={styles.areaTitle}>
                    <Text style={styles.title}>
                        Dados da Locação
                    </Text>
                </View>
                <View>
                    <Text style={styles.label}>
                        De: <Text style={styles.description}>{moment(from).format('DD-MM-YYYY')}</Text>
                    </Text>
                    <Text style={styles.label}>
                        Até: <Text style={styles.description}>{moment(until).format('DD-MM-YYYY')}</Text>
                    </Text>
                    <Text style={styles.label}>
                        Valor: <Text style={styles.description}>R$ {total}</Text>
                    </Text>
                </View>
                <PaymentCompent title="Forma de Pagamento" />
                <View style={{ alignSelf:'center', marginVertical:20}}>
                    <ButtonComponent title="Finalizar" onPress={()=>{} }/>
                </View>
            </ScrollView>
        </View>
    );
}

export default FinalizeScreen;