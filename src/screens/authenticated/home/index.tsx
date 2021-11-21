import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View, Keyboard } from 'react-native';

import { styles } from './styles';

import Profile from '@src/components/Profile';
import TextInput from '@src/components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import ListCardComponent from '@src/components/ListCard';

import OnixPlus from '@src/assets/images/onix-plus.png';
import Camaro from '@src/assets/images/camaro.png';
import Bronco from '@src/assets/images/bronco-sport.png';
import BmwX2 from '@src/assets/images/bmwx2.png';
import BottomNavigator from '@src/components/BottomNavigator';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface IDataProps  {
    id:string;
    name:string;
    brand:string,
    price:string,
    year:number,
    image:any,
    available:boolean;
}


const Home:React.FC = () => {
    const [data, setData] = useState<IDataProps[]>([
        {
            id:'1',
            name:'Onix Plus',
            brand:'Chevrolet',
            price:'290,00',
            year:2021,
            image:OnixPlus,
            available:true,
        },
        {
            id:'2',
            name:'Camaro',
            brand:'Chevrolet',
            price:'395,00',
            year:2020,
            image:Camaro,
            available:true,
        },
        {
            id:'3',
            name:'Bronco Sport',
            brand:'Ford',
            price:'380,00',
            year:2021,
            image:Bronco,
            available:false,
        },
        {
            id:'4',
            name:'BMW X2',
            brand:'Bmw',
            price:'370,00',
            year:2020,
            image:BmwX2,
            available:true,
        },
    ]);
    const [filterData, setFilterData] = useState<IDataProps[]>([]);
    const [search, setSearch] = useState('');

    const carSearch = useCallback((text:string)=> {
        if(text){
            const filterCars = data.filter((cars)=>{
                const car = cars.name.toUpperCase();
                const textUpperCase = text.toUpperCase();
    
                return car.indexOf(textUpperCase) > -1;
            });
            setFilterData(filterCars);
            setSearch(text); 
        }else{
            setFilterData(data);
            setSearch(text);
        }
    },[]);
    
    useEffect(()=>{
        carSearch(search);
    },[search]);
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapperContent}>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} >  */}
                    <Profile />
                    <TextInput 
                        value={search}
                        onChangeText={(text)=> setSearch(text)}
                        label="Pesquise pelo carro"
                        placeholder="Exemplo:Camaro, Onix .. "
                        rightContent={()=> <Icon name='search' size={18} /> }
                        style={{ width:'100%', marginTop:20 }}
                    />
                    <View style={{ flex:1, }}>
                        <ListCardComponent data={filterData}/>
                    </View>
                {/* </TouchableWithoutFeedback>  */}
            </View>
            <BottomNavigator focused="Home"/>
        </SafeAreaView>
    );
}

export default Home;