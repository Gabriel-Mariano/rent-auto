import React, { useCallback, useEffect, useState, useContext } from 'react';
import { SafeAreaView, View, Text, ActivityIndicator, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { listBookings } from '@src/services/bookings';
import { RouteParams } from '@src/routes/customized/customStack/types/index.d';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerProps } from '@src/routes/customized/customDrawer/types';

import { IUnavailableDaysPros } from '@src/@types/calendarType';
import { COLORS } from '@src/themes/colors';
import { styles } from './styles';

import AuthContext from '@src/contexts/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import Legend from '@src/components/Legend';
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
    const [isLoading, setIsLoading] = useState(false);
    const [disabledDays, setDisabledDays] = useState({});
    const [unavailableDays, setUnavailableDays] = useState<IUnavailableDaysPros[]>([]);
    
    const { brand, price, exchange, fuel, id, km, name, photo, renavam, licensePlate } = props.route.params;

    const { user } = useContext(AuthContext);

    const legends = [
        {
            description:'Dias selecionados',
            color:COLORS.primary
        },
        {
            description:'Dias disponíveis',
            color:COLORS.white
        },
        {
            description:'Dias indisponíveis',
            color:COLORS.placeholder
        }
    ];
    
    const navigation = useNavigation<NativeStackNavigationProp<DrawerProps>>();

    const bookings = useCallback(async () => {
        setIsLoading(true);
        const { data, status } = await listBookings(id!);        
    
        if(status){
            const changeData = data.result.map((values:IUnavailableDaysPros)=> {
                return {
                    start_date:moment(values.start_date).format('YYYY-MM-DD'),
                    end_date:moment(values.end_date).format('YYYY-MM-DD')
                }
            });
            setUnavailableDays(changeData);
        } 

        setIsLoading(false);
    },[id]);

    useEffect(()=> {
        bookings();
    },[id]);

    useEffect(()=>{
        renderUnavailableDays();
    },[unavailableDays])

    const selectDate = (dateString:string) => {
        return isStartDate === false
            ? selectStartDate(dateString)
            : selectEndDate(dateString)
    }

    const selectStartDate = (dateString:string) => {
        const markedDates = {}
        
        const isInvalid = validateAvailableDays(dateString);

        if(isInvalid){
            return null;
        }
        
        markedDates[dateString] = { 
            startingDay: true, 
            color:'#ED2F59', 
            textColor: '#FFFFFF'
        }
        
        setMarkedDates({...disabledDays,...markedDates})
        setIsStartDate(true)
        setIsEndDate(false)
        setStartDate(dateString)
    }

    const selectEndDate = (dateString:string) => {
        const start = moment(startDate);
        const end = moment(dateString);
        const range = end.diff(start, 'days');

        const isAfter = moment(start).isSameOrBefore(end);
        
        if(!isAfter) {
            return null;
        }

        range > 0
        ? selectMultipleDays(start, range)
        : selectOneDay(dateString, range)
    }

    const selectMultipleDays = (start:moment.Moment, range:number) => {
        const marked = markedDates;
        
        for (let i = 1; i <= range; i++ ){
            
            const tempDate = start.add(1, 'day');
            const dateFormat = moment(tempDate).format('YYYY-MM-DD');
    
            const isInvalid = validateAvailableDays(dateFormat);
            
            if(isInvalid) {
                return null;
            }

            
            i < range
                ? marked[dateFormat] = { 
                    color: '#ED2F59', 
                    textColor: '#FFFFFF'
                }
                : marked[dateFormat] = {
                    endingDay:true, 
                    color: '#ED2F59', 
                    textColor: '#FFFFFF',
                }
        }
        
        const totally = (range+1) * price!;
        
        setMarkedDates({...disabledDays,...marked});
        setIsStartDate(false)
        setIsEndDate(true)
        setStartDate('')
        setDaysRange(range+1);
        setTotal(totally)
    }

    const selectOneDay = (dateString:string, range:number) => {
        const marked = markedDates;

        marked[dateString] = {
            startingDay:true,
            endingDay:true, 
            color: '#ED2F59', 
            textColor: '#FFFFFF',
        }

        const totally = (range+1) * price!;

        setMarkedDates({...disabledDays,...marked});
        setIsStartDate(false)
        setIsEndDate(true)
        setStartDate('')
        setDaysRange(range+1);
        setTotal(totally)
    };

    const validateAvailableDays = (dateString:string) => {
        const mappedDisabledDays = unavailableDays.map((values)=> {  
            return moment(dateString).isBetween(values.start_date,values.end_date,null,'[]');
        });

        return mappedDisabledDays.some((items)=> items === true )

    }

    const renderUnavailableDays = useCallback(() => {
        const marked = markedDates;

        for (const iterator of unavailableDays) {

            const start = moment(iterator.start_date)
            const period = start.add(1, 'day');
            const dateFormat = moment(period).format('YYYY-MM-DD');
            
            marked[iterator.start_date] = { disabled: true, startingDay: true, color: COLORS.light, endingDay: true,  disableTouchEvent: true }

            marked[dateFormat] = { disabled: true, startingDay: true, color: COLORS.light, endingDay: true,  disableTouchEvent: true }

            marked[iterator.end_date] = { disabled: true, startingDay: true, color: COLORS.light, endingDay: true,  disableTouchEvent: true }
        }
        
        setDisabledDays(marked);
        setMarkedDates(marked);
    },[unavailableDays]);

    const unSelect = () => {

        setStartDate('');
        setIsStartDate(false);
        setIsEndDate(true);
        setMarkedDates(disabledDays);
        setDaysRange(undefined);
        setTotal(0)
    }

    const goToFinalize = () => {
        if(daysRange === undefined) {
            return Alert.alert('Opss..', 'Antes de prosseguir defina as data');
        }
        // console.log(user?.cpf)
        if(user?.cpf === undefined){
            return navigation.navigate('Origin',{ screen:'Identifier',
                params: {
                    id,
                    name,
                    photo,
                    price,
                    exchange,
                    fuel,
                    km,
                    brand,
                    renavam,
                    licensePlate,
                }
        });
        }

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
                renavam,
                licensePlate,
             }
        });
     }
    
    return (
        <SafeAreaView style={styles.container}>
            { isLoading 
                ? <ActivityIndicator 
                    size="large"
                    color={COLORS.primary} 
                    style={{ marginTop:40}} 
                  />
                : <>
                    <View style={styles.header}>
                        <Icon name="calendar-outline" size={18} />
                        <Text style={styles.title}>
                            Defina as datas que deseja alugar
                        </Text>
                    </View>
                    <Calendar
                        markingType='period'
                        onDayPress={(day) => selectDate(day.dateString)}
                        markedDates={markedDates}
                    />
                    <TouchableWithoutFeedback onPress={unSelect}>
                        <Legend data={legends}/>
                        <View style={styles.wrapperInfo}>
                            <View>
                                <Text style={styles.label}>
                                    Total
                                </Text>
                                <Text style={styles.describe}>
                                    R$ {price} {daysRange && `x ${daysRange} diárias`} 
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.total}>
                                    R$ {total ? total?.toFixed(2) : 0.00.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ alignItems: 'center'  }}>
                        <ButtonComponent
                            title="Confirmar Datas"
                            onPress={goToFinalize} />
                    </View>
                </>
        }
        </SafeAreaView>
    )
}

export default CalendarScreen;