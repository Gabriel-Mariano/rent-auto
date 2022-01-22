import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { IGoBackProps } from './index.d';

import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/core';

const GoBackComponent:React.FC<IGoBackProps> = props => {
    const { title } = props;
    const location  = useRoute();

    
    
    return (
        <Pressable onPress={()=>{} }>
            <Text>{title}</Text>
        </Pressable>
    );
}

export default GoBackComponent;


const styles = StyleSheet.create({

})