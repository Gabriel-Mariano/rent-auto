import React from 'react';
import { Pressable, View, StyleSheet, Text  } from 'react-native';
import { FONTS } from '@src/themes/fonts';
import { COLORS } from '@src/themes/colors';
import { IRadioButtonProps } from './index.d';

const RadioButton:React.FC<IRadioButtonProps> = props => {
    const { title, value, checkedValue, onPress } = props;

    return (
       <Pressable
            onPress={onPress}
            style={[
                styles.container,
                { 
                    backgroundColor: 
                        value === checkedValue.value 
                            ? COLORS.success 
                            : COLORS.placeholder
                }
            ]}
       >
           <View style={styles.containerRadio}>
               <View style={[
                   styles.radio,
                   { 
                    backgroundColor: 
                        value === checkedValue.value 
                            ? COLORS.success 
                            : COLORS.placeholder
                    }
                ]}
               />
           </View>
           <View>
                <Text style={styles.text}>
                    {title}
                </Text>
           </View>
       </Pressable>
    );
}

export default RadioButton;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:10,
        marginBottom:10,
        borderRadius:5,

        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',

    },
    containerRadio:{
        width:30,
        height:30,
        borderRadius:30,
        borderWidth:1,
        borderColor:COLORS.white,
        backgroundColor:COLORS.white,

        alignItems:'center',
        justifyContent:'center',
    },
    radio:{
        width:20,
        height:20,
        borderRadius:30, 
    },
    text:{
        fontFamily:FONTS.bold,
        fontSize:16,
        color:COLORS.white,
        marginLeft:10
    }
});