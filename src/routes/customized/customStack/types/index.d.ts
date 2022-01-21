type StackProps = {
    Home:undefined;
     Details:{
        name?:string;
        brand?:string;
        photo?:string;
        km?:number;
        exchange?:'Manual' | 'Auto';
        fuel?:string;
     };
     Calendar:undefined;
     Settings:undefined; 
}

export { StackProps };