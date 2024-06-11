import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


interface Props {
    columns: Columns[],
    row: Row[]
}
interface Columns {
    name: string,
    type: string
}

interface Row {
    name: string,
    
}

const Tabla: React.FC<Props> = ({ columns, row }) => {
    return (
        <DataTable value={row} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((col, i) => (
                <Column key={i} field={col.type} header={col.name} />
            ))}
        </DataTable>
    )
}

export default Tabla
