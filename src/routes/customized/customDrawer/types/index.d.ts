import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { StackProps } from "../../customStack/types";

type DrawerProps =  {
    // Origin:NavigatorScreenParams<StackProps>;
    Origin:NavigatorScreenParams<StackProps>;
    Settings:undefined;

    /* Details:{
       name?:string;
       brand?:string;
    }; */
}

export { DrawerProps };