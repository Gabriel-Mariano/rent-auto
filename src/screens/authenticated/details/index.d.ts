interface IRouteProps {
    route:{
        params:{
            name:string;
            brand:string;
            photo?:string;
            describe?:string;
            km?:string;
            exchange?:string;
            fuel?:string;
        }
    }
}

export { IRouteProps };