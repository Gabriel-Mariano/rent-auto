import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { IInputComponentProps } from './index.d';

const InputComponent:React.FC<IInputComponentProps> = props =>{
    const {
        leftContent,
        rightContent,
        ...inputProps
    } = props;
    return (
        <View style={styles.container}>
            <View>
                {leftContent}
            </View>
            <TextInput
                placeholder={inputProps.placeholder}
                keyboardType={inputProps.keyboardType}
                autoCapitalize={inputProps.autoCapitalize}
                secureTextEntry={inputProps.secureTextEntry}
            />
            <View>
                {rightContent}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,

        justifyContent:'center',
        alignItems:'flex-start',

        borderRadius:6,
        backgroundColor:'#fff',
        paddingHorizontal:10,

        marginVertical:10,
    },
    leftContent:{

    },
    rightContent:{

    }
});

export default InputComponent;