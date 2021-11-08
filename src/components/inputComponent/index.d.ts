import React from 'react';
import { TextInputProps } from 'react-native';

interface IInputComponentProps extends TextInputProps{
    leftContent?:React.ReactNode;
    rightContent?:React.FC;
    showPassword?:()=>void;
    errorMessage?:string;
}

export { IInputComponentProps };