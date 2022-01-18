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
     Settings:undefined; 
}

export { StackProps };