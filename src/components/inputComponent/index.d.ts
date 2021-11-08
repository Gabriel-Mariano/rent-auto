import React from 'react';
import { TextInputProps } from 'react-native';

interface IInputComponentProps extends TextInputProps{
    leftContent?:React.FC;
    rightContent?:React.FC;
    errorMessage?:string;
}

export { IInputComponentProps };