import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View, ActivityIndicator, Alert, Text } from 'react-native';
import { styles } from './styles';
import { listAutomobiles } from '@src/services/automobiles';
import { IAutoProps } from '@src/@types/autoType.d';

import Profile from '@src/components/Profile';
import TextInput from '@src/components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import ListCardComponent from '@src/components/ListCard';
import BottomNavigator from '@src/components/BottomNavigator';

const Home:React.FC = () => {
    const [automobiles, setAutomobiles] = useState<IAutoProps[]>([]);
    const [filterData, setFilterData] = useState<IAutoProps[]>([]);
    const [search, setSearch] = useState('');
    const [inProgress, setInProgress] = useState(false);

    useEffect(()=>{
        listAuto();
    },[]);

    const listAuto = useCallback(async() => {
        setInProgress(true);
        const { status, data } = await listAutomobiles();
        setInProgress(false);
        
        status
        ? successResponse(data.data)
        : failedResponse(data)
    },[]);

    const successResponse = (data:[]) => { 
        setAutomobiles(data);
        setFilterData(data);
    }

    const failedResponse = (data:string) => Alert.alert(data);

    const carSearch = useCallback((text:string)=> {
        if(text){
            const filterCars = automobiles.filter((cars)=>{
                const car = cars.name?.toUpperCase();
                const textUpperCase = text.toUpperCase();
    
                return car!.indexOf(textUpperCase) > -1;
            });

            setFilterData(filterCars);
            setSearch(text); 
        }else{
            setFilterData(automobiles);
            setSearch(text);
        }
    },[search]);
    
    useEffect(()=>{
        carSearch(search);
    },[search]);
    
    const renderListCardComponent = () => (
        inProgress
            ? <ActivityIndicator size="large" color="black"/>
            : renderCardContent()
    )

    const renderCardContent = () => {
        return automobiles.length > 0
        ? renderContent()
        : <Text style={styles.warningText}>Não há automóveis cadastrados 😑</Text>
    }

    const renderContent = () => {
        return filterData.length > 0
        ? <ListCardComponent data={filterData}/> 
        : <Text style={styles.warningText}>Nenhum automóvel com este nome</Text>
    }

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
                        {renderListCardComponent()}
                    </View>
            </View>
            <BottomNavigator focused="Home"/>
        </SafeAreaView>
    );
}

export default Home;