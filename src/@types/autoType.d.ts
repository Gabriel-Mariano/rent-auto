interface IBrandProps {
    id:number;
    name:string;
}

interface IAutoProps {
    id?: string;
    name?: string;
    describe?: string;
    photo?:string;
    price?:number;
    year?: string;
    fuel?: string;
    exchange?: 'Manual' | 'Auto';
    km?: number;
    renavam?: string;
    chassis?: string;
    available?: boolean;
    licensePlate?: string;
    brand?:IBrandProps;
}

export { IAutoProps };