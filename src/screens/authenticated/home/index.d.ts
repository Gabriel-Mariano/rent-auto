interface IBrandProps {
    id:number;
    name:string;
}

interface IAutoProps {
    id: string;
    name: string;
    describe?: string;
    photo?:string;
    year?: string;
    fuel?: string;
    exchange?: 'Manual' | 'Auto';
    km?: number;
    renavam?: string;
    chassis?: string;
    licensePlate?: string;
    brand?:IBrandProps;
}

export { IAutoProps, IBrandProps };