interface ILegendAttr {
    description:string;
    color?:string;
}

interface ILegendProps {
    title?:string;
    data:ILegendAttr[];
}

export { ILegendProps };