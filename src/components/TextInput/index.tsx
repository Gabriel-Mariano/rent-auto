import React from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { IInputComponentProps } from './index.d';
import { COLORS } from '@src/themes/colors';
import { FONTS } from '@src/themes/fonts';

const InputComponent:React.FC<IInputComponentProps> = props =>{
    const {
        label,
        leftContent,
        rightContent,
        showPassword,
        errorMessage,
        ...inputProps
    } = props;

    const renderLeftContent = () =>{
        return  leftContent && 
            <View style={styles.leftContent}>
                {leftContent}
            </View>
    }

    const renderRightContent = () =>{
        return  rightContent && 
            <Pressable style={styles.rightContent} onPress={showPassword}>
                {rightContent}
            </Pressable>
    }

    return (
        <View style={[
            inputProps.style 
            ? inputProps.style 
            : styles.container 
        ]}>
            { label && <Text style={styles.label}>{label}</Text> }
            <View style={styles.wrapperInput}>
                {renderLeftContent()}         
                <TextInput
                    onChangeText={inputProps.onChangeText}
                    value={inputProps.value}
                    placeholder={inputProps.placeholder}
                    keyboardType={inputProps.keyboardType}
                    autoCapitalize={inputProps.autoCapitalize}
                    secureTextEntry={inputProps.secureTextEntry}
                    style={[
                        styles.textInput,
                        { width: 
                            leftContent && rightContent
                            ? '70%'
                            : leftContent || rightContent
                            ? '85%'
                            : '100%'
                        }
                    ]}
                />
                {renderRightContent()}
            </View>
            <View>
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:300,
    },
    wrapperInput:{
        width:'100%',
        height:50,

        flexDirection:'row',
         

        borderRadius:6,
        backgroundColor:COLORS.white,
        
        marginVertical:10,
    },
    label:{
        fontFamily:FONTS.regular,
        marginLeft:10,
    },
    leftContent:{
        width:'15%',
        height:50,

        justifyContent:'center',
        alignItems:'center',

        backgroundColor:COLORS.light,

        borderTopLeftRadius:6,
        borderBottomLeftRadius:6
    },
    textInput:{
       paddingHorizontal:8,
    },
    rightContent:{
        width:'15%',
        height:50,

        justifyContent:'center',
        alignItems:'center',

        borderTopRightRadius:6,
        borderBottomRightRadius:6
    },
    errorMessage:{
        color:COLORS.danger
    }
});

export default InputComponent;