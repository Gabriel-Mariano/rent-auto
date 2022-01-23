import PaymentCompent from '@src/components/Payment';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {  } from 'react-native-gesture-handler';
import styles from './styles';

const FinalizeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleScreen}>
                    Finalizar
                </Text>
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.areaTitle}>
                    <Text style={styles.title}>
                        Dados do Cliente
                    </Text>
                </View>
                <View>
                    <Text style={styles.label}>Nome:</Text>
                    <Text style={styles.label}>E-mail:</Text>
                    <Text style={styles.label}>CPF:</Text>
                </View>

                <View style={styles.areaTitle}>
                    <Text style={styles.title}>
                        Dados do Veículo
                    </Text>
                </View>
                <View>
                    <Text style={styles.label}>Carro:</Text>
                    <Text style={styles.label}>Marca:</Text>
                    <Text style={styles.label}>Renavam:</Text>
                    <Text style={styles.label}>Placa:</Text>
                </View>

                <View style={styles.areaTitle}>
                    <Text style={styles.title}>
                        Dados da Locação
                    </Text>
                </View>
                <View>
                    <Text style={styles.label}>De:</Text>
                    <Text style={styles.label}>Até:</Text>
                    <Text style={styles.label}>Valor:</Text>
                </View>

                <PaymentCompent title="Forma de Pagamento" />
            </ScrollView>
        </View>
    );
}

export default FinalizeScreen;