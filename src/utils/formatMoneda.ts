export const formatearMoneda = (value: string) => {
    value as string
    const numero = Number(value.replace(/[^0-9.-]+/g, ""));

    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(numero).replace('$', '');
}

export const format= (value:string)=>{
    
    const newValue = Number(value)
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(newValue)
}
