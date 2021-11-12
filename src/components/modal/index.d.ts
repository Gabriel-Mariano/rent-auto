import { ModalProps } from "react-native-modal";

interface IModalComponentProps{
    title:string;
    describe:string;
    isVisible:boolean;
    buttonText?:string;
    onClose:()=>void;
}

export {IModalComponentProps};