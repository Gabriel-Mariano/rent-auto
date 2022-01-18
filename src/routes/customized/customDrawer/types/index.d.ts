import { NavigatorScreenParams } from "@react-navigation/native";
import { StackProps } from "../../customStack/types";

type DrawerProps =  {
    Home:NavigatorScreenParams<StackProps>;
    Settings:undefined;

    /* Details:{
       name?:string;
       brand?:string;
    }; */
}

export { DrawerProps };