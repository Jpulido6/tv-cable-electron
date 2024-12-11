import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"
import UseTabla from "../view-model/UseTabla"

const Tabla = () => {
    const { headerColumns, sortedItems, renderCell, topContent, selectedKeys, setSelectedKeys, setSortDescriptor, bottomContent, classNames } = UseTabla()
    return (
        <>
            <Table
                isCompact
                removeWrapper
                selectionMode="multiple"
                topContent={topContent}
                topContentPlacement="outside"
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
                classNames={classNames}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No hay clientes"} items={sortedItems} >
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => {
                                return <TableCell>
                                    {renderCell(item, columnKey)}
                                </TableCell>
                            }}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

export default Tabla
