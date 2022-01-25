interface IRadioButtonProps {
    title:string;
    value:number;
    checkedValue:{ value: number };
    onPress?:()=>void;
}

export { IRadioButtonProps };