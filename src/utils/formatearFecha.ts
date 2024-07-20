export const formatearFecha = (fecha: string): string => {
    const formatDate = new Date(fecha).toISOString().slice(0, 10)

    return formatDate

}

const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export const formatearFecha2 = (fecha: string): string => {
    const date = new Date(fecha)

    switch (date.getMonth()) {
        case 0: return `${month[0]}-${date.getFullYear()}`
        case 1: return `${month[1]}- ${date.getFullYear()}`
        case 2: return `${month[2]}-${date.getFullYear()}`
        case 3: return `${month[3]}-${date.getFullYear()}`
        case 4: return `${month[4]}-${date.getFullYear()}`
        case 5: return `${month[5]}-${date.getFullYear()}`
        case 6: return `${month[6]}-${date.getFullYear()}`
        case 7: return `${month[7]}-${date.getFullYear()}`
        case 8: return `${month[8]}-${date.getFullYear()}`
        case 9: return `${month[9]}-${date.getFullYear()}`
        case 10: return `${month[10]}-${date.getFullYear()}`
        case 11: return `${month[11]}-${date.getFullYear()}`        
        default: return ''
    }
}