import React from "react";

type IScreenProps = 'Home' | 'Settings';

interface IBottomNavigationPros {
    focused:IScreenProps;
}


export { IBottomNavigationPros, IScreenProps };