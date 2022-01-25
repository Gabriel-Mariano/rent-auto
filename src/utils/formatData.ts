type toLocaleStringProps = {
    toLocaleString: (
        arg0: string,
        arg1: {
            style: string;
            currency: string;
        }
    ) => number;
}

export const formatCurrency = (currency: toLocaleStringProps) => {
    return currency.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}