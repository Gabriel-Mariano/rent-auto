import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { RouteParams } from '@src/routes/customized/customStack/types/index.d';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '@src/components/Button';
import moment from 'moment';

LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: "Aujourd'hui"
  };
LocaleConfig.defaultLocale = 'fr';

const CalendarScreen  = (props:RouteParams) => {
    const [markedDates, setMarkedDates] = useState({});
    const [isStartDate, setIsStartDate] = useState(false);
    const [isEndDate, setIsEndDate] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [daysRange, setDaysRange] = useState<number>();
    const [total, setTotal] = useState<number>();

    const { brand, price, exchange, fuel, id, km, name, photo } = props.route.params;
    
    const navigation = useNavigation<NativeStackNavigationProp<DrawerProps>>();

    const selectDate = (dateString:string) => {
        return isStartDate === false
            ? selectStartDate(dateString)
            : selectEndDate(dateString)
    }

    const selectStartDate = (dateString:string) => {
        const markedDates = {}
        markedDates[dateString] = { 
            startingDay: true, 
            color:'#ED2F59', 
            textColor: '#FFFFFF'
        }

        setMarkedDates(markedDates)
        setIsStartDate(true)
        setIsEndDate(false)
        setStartDate(dateString)
    }

    const selectEndDate = (dateString:string) => {
        const start = moment(startDate);
        const end = moment(dateString);
        const range = end.diff(start, 'days');
        
        range > 0
        ? successfullySelected(start, range)
        : failedSelected()
    }

    const successfullySelected = (start:moment.Moment, range:number) => {
        const marked = markedDates;

        for (let i = 1; i <= range; i++ ){
            const tempDate = start.add(1, 'day');
            const dateFormat = moment(tempDate).format('YYYY-MM-DD');
            
            i < range
                ? marked[dateFormat] = { 
                    color: '#ED2F59', 
                    textColor: '#FFFFFF'
                }
                : marked[dateFormat] = {
                    endingDay:true, 
                    color: '#ED2F59', 
                    textColor: '#FFFFFF'
                }
        }
        
        const totally = range * price!;
        
        setMarkedDates(marked);
        setIsStartDate(false)
        setIsEndDate(true)
        setStartDate('')
        setDaysRange(range);
        setTotal(totally)
    }

    const failedSelected = () => console.log('Select an upcomming date!');

    const goToFinalize = () => {
        navigation.navigate('Origin', {
            screen:'Finalize',
            params: {
                id,
                name,
                photo,
                price,
                exchange,
                fuel,
                km,
                brand,
             }
        });
     }
   
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="calendar-outline" size={18} />
                <Text style={styles.title}>
                    Defina as datas que deseja alugar
                </Text>
            </View>
            <Calendar 
                markingType='period'
                onDayPress={(day)=> selectDate(day.dateString)}
                markedDates={markedDates}
            />
            <View style={styles.wrapperInfo}>
                <View>
                    <Text style={styles.label}>
                        Total
                    </Text>
                    <Text style={styles.describe}>
                        R$ {price} x {daysRange && daysRange+1} diárias
                    </Text>
                </View>
                <View>
                    <Text style={styles.total}>
                        R$ {total?.toFixed(2)}
                    </Text>
                </View>
            </View>
            <View style={{ alignItems:'center', marginTop:10}}>
                <ButtonComponent 
                    title="Confirmar Datas" 
                    onPress={goToFinalize}
                />
            </View>
        </SafeAreaView>
    )
}

export default CalendarScreen;