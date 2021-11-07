import { TouchableOpacityProps } from 'react-native';

interface IButtonComponentProps extends TouchableOpacityProps {
    title:string;
    color?:string;
    backgroundColor?:string;
}

export { IButtonComponentProps };