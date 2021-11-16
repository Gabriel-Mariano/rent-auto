import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import Profile from '@src/components/Profile';
import Button from '@src/components/Button';
import AuthContext from '@src/contexts/auth';
import TextInput from '@src/components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '@src/components/Card';
import ListCardComponent from '@src/components/ListCard';

import OnixPlus from '@src/assets/images/onix-plus.png';
import Camaro from '@src/assets/images/camaro.png';

const DATA = [
    {
        id:'1',
        name:'Onix Plus',
        brand:'Chevrolet',
        price:'290,00',
        year:2021,
        image:OnixPlus
    },
    {
        id:'2',
        name:'Camaro',
        brand:'Chevrolet',
        price:'395,00',
        year:2020,
        image:Camaro
    }
]


const Home:React.FC = () =>{
    const { signOut } = useContext(AuthContext);

    return (
        <>
        <View style={styles.container}>
            <Profile />
            <TextInput 
                label="Pesquise pelo carro"
                placeholder="Exemplo:Ford, Onix .. "
                rightContent={()=> <Icon name='search' size={18} /> }
                style={{ width:'100%', marginTop:20 }}
            />
            <ListCardComponent data={DATA}/>
            <Button title="Sair" onPress={signOut}/>
        </View>
        </>
    );
}

export default Home;