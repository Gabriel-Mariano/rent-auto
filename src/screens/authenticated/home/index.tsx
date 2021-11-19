import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { styles } from './styles';

import Profile from '@src/components/Profile';
import Button from '@src/components/Button';
import AuthContext from '@src/contexts/auth';
import TextInput from '@src/components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import ListCardComponent from '@src/components/ListCard';

import OnixPlus from '@src/assets/images/onix-plus.png';
import Camaro from '@src/assets/images/camaro.png';
import BottomTabNavigation from '@src/routes/customized/customTabs';
import BottomNavigator from '@src/components/BottomNavigator';

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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapperContent}>
                <Profile />
                <TextInput 
                    label="Pesquise pelo carro"
                    placeholder="Exemplo:Ford, Onix .. "
                    rightContent={()=> <Icon name='search' size={18} /> }
                    style={{ width:'100%', marginTop:20 }}
                />
                <ListCardComponent data={DATA}/>
            </View>
            <BottomNavigator focused="Home"/>
        </SafeAreaView>
    );
}

export default Home;