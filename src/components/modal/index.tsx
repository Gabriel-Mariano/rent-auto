import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { IModalComponentProps } from './index.d';
import { COLORS } from '@src/themes/colors';

import Modal from 'react-native-modal';
import Button from '../buttonComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ModalComponent:React.FC<IModalComponentProps> = props => {
    const { title, describe, isVisible, onClose, buttonText, ...modalProps } = props;
    return (
            <Modal 
                isVisible={isVisible}
            >
                <View style={styles.modal}>
                    <View>
                        <Icon 
                            name="check-circle" 
                            size={130} 
                            color={COLORS.success} 
                        />
                    </View>
                    <View style={styles.wrapperTexts}>
                        <Text style={styles.titleModal}>{title}</Text>
                        <Text style={styles.describeModal}>{describe}</Text>
                    </View>
                    <View>
                        <Button
                            title={buttonText || 'Voltar'}
                            onPress={onClose}
                        />
                    </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
        justifyContent:'space-around',
        alignItems:'center',
        height:390,
        borderRadius:20,
        backgroundColor:COLORS.white,
    },
    wrapperTexts:{
        paddingHorizontal:40,
    },
    titleModal:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:20,
    },
    describeModal:{
        alignSelf:'center',
    }
});

export default ModalComponent;