import { IColumns, ICustomers, StatusOption } from '@/interfaces/app.interfaces';
import { capitalize } from '@/utils/capitalize';
import { format } from '@/utils/formatMoneda';
import { Button, Chip, ChipProps, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Pagination, Selection, SortDescriptor, User } from '@nextui-org/react';
import { useCallback, useMemo, useState } from 'react'

const INITIAL_VISIBLE_COLUMNS = ["nombres", "direccion", "estado", "deuda", "acciones"];
const statusOptions: StatusOption[] = [
    { name: "Activo", uid: "activo" },
    { name: "Inactivo", uid: "inactivo" },
];
const clientes: ICustomers[] = [
    { id: 1, nombres: 'Carlos', documento: '12312312', email: 'cj@gmail.com', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo' , direccion:'san jose de oriente'},
    { id: 2, nombres: 'Daniela Lopez', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'inactivo' , direccion:'betania'},
    { id: 3, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo' , direccion:'san jose de oriente'},
    { id: 4, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo' , direccion:'san jose de oriente'},
    { id: 5, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'inactivo' , direccion:'san jose de oriente'},
    { id: 6, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo' , direccion:'san jose de oriente'},
    { id: 7, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo' , direccion:'san jose de oriente'},
    { id: 8, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo', direccion:'san jose de oriente' },
    { id: 9, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo' , direccion:'san jose de oriente'},
    { id: 10, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo' , direccion:'san jose de oriente'},
    { id: 11, nombres: 'Carlos', documento: '12312312', email: 'XXXXXXXXXXXX', telefono: '31231231231', deuda: 20000, facturas: 'hola', estado: 'activo' , direccion:'san jose de oriente'},
]
const columns: IColumns[] = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NOMBRES", uid: "nombres", sortable: true },
    { name: "FECHA DE INSCRIPCIÓN", uid: "fechaInscripcion", sortable: true },
    { name: "DIRECCIÓN", uid: "direccion", sortable: true },
    { name: "TELÉFONO", uid: "telefono" },
    { name: "EMAIL", uid: "email" },
    { name: "ESTADO", uid: "estado", sortable: true },
    { name: "DEUDA", uid: "deuda", sortable: true },
    { name: "ACCIONES", uid: "acciones" },
];

const statusColorMap: Record<string, ChipProps['color']> = {
    activo: 'success',
    inactivo: 'danger'
}
const UseTabla = () => {
    type User = typeof clientes[0]

    const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = useState<Selection>('all');
    const [page, setPage] = useState<number>(1)
    const [rowsPerPage, setRowsPerPage] = useState<number>(5)
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({ column: 'age', direction: 'ascending' })
    const [filterValue, setFilterValue] = useState<string>('')
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));


    const hasSearchFilter = Boolean(filterValue)
    const pages = Math.ceil(clientes.length / rowsPerPage)

    const headerColumns = useMemo(() => {
        if (visibleColumns === 'all') return columns
        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid))
    }, [visibleColumns])

    const filteredItems = useMemo(() => {
        let filteredUser = [...clientes]

        if (hasSearchFilter) {
            filteredUser = filteredUser.filter((user) => user.nombres?.toLowerCase().includes(filterValue.toLowerCase()))
        }
        if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUser = filteredUser.filter((user) => Array.from(statusFilter).includes(user.estado))
        }

        return filteredUser

    }, [filterValue, statusFilter, hasSearchFilter])

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage
        const end = start + rowsPerPage

        return filteredItems.slice(start, end)
    }, [page, filteredItems, rowsPerPage])

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column as keyof User] as number | string
            const second = b[sortDescriptor.column as keyof User] as number | string

            const cmp = first < second ? -1 : first > second ? 1 : 0
            return sortDescriptor.direction === 'descending' ? -cmp : cmp
        })
    }, [items, sortDescriptor])


    const renderCell = useCallback(
        (user: User, columnKey: React.Key) => {
            const cellValue = user[columnKey as keyof User]
            switch (columnKey) {
                case 'nombres':
                    return (
                        <User
                            avatarProps={{
                                size: 'sm',
                                radius: 'full',
                                src: `https://github.com/${user.nombres}`
                            }}
                            description={user.documento}
                            name={cellValue}
                        >
                            {user.documento}
                        </User>
                    )
                case 'direccion':
                    return (
                        <div className="flex flex-col">
                            <p className="text-bold text-small capitalize">{cellValue}</p>
                        </div>
                    )
                case 'estado':
                    return (
                        <Chip
                            className='capitalize border-none gap-1, text-default-600'
                            color={statusColorMap[user.estado]}
                            size='sm'
                            variant='dot'
                        >{cellValue}</Chip>
                    )
                case 'deuda':
                    return (
                        <div className="flex flex-col">
                            <p className="text-bold text-small capitalize">{format(cellValue)}</p>
                        </div>
                    )
                case 'acciones':
                    return (
                        <div className="relative flex justify-end items-center gap-2">
                            <Dropdown
                                className="bg-background border-1 border-default-200">
                                <DropdownTrigger>
                                    <Button isIconOnly radius="full" size="sm" variant="light">
                                        <i className="pi pi-ellipsis-v text-default-400" />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownItem>Ver</DropdownItem>
                                    <DropdownItem >Editar</DropdownItem>
                                    <DropdownItem>Eliminar</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    )
                default:
                    return cellValue
            }
        }, [])

    const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const topContent = useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        classNames={{
                            base: "w-full sm:max-w-[44%]",
                            inputWrapper: "border-1",
                        }}
                        placeholder="Buscar por nombre"
                        size="sm"
                        startContent={<i className="pi pi-search text-default-300" />}
                        value={filterValue}
                        variant="bordered"
                        onClear={() => setFilterValue("")}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<i className="pi pi-chevron-down  text-small" />}
                                    size="sm"
                                    variant="flat"
                                >
                                    Estado
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {capitalize(status.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<i className="pi pi-chevron-down w-4 h-4 text-small" />}
                                    size="sm"
                                    variant="flat"
                                >
                                    Columnas
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>

                        <Button
                            className="bg-foreground text-background"
                            endContent={<i className="pi pi-plus"></i>}
                            size="sm"
                        >
                            Agregar Cliente
                        </Button>

                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {clientes.length} Clientes</span>
                    <label className="flex items-center text-default-400 text-small">
                        filas por página:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
    ]);


    const bottomContent = useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    showControls
                    classNames={{
                        cursor: "bg-foreground text-background",
                    }}
                    color="default"
                    isDisabled={hasSearchFilter}
                    page={page}
                    total={pages}
                    variant="light"
                    onChange={setPage}
                />
                <span className="text-small text-default-400">
                    {selectedKeys === "all"
                        ? "Seleccionado todos los elementos"
                        : `${selectedKeys.size} de ${items.length} elementos seleccionados`}
                </span>
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);


    const classNames = useMemo(
        () => ({
            wrapper: ["max-h-[382px]", "max-w-3xl"],
            th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
            td: [
                "group-data-[first=true]:first:before:rounded-none",
                "group-data-[first=true]:last:before:rounded-none",
                "group-data-[middle=true]:before:rounded-none",
                "group-data-[last=true]:first:before:rounded-none",
                "group-data-[last=true]:last:before:rounded-none",
            ],
        }),
        [],
    );

    return {
        headerColumns,
        sortedItems,
        renderCell,
        topContent,
        bottomContent,
        selectedKeys,
        setSelectedKeys,
        setSortDescriptor,
        classNames
    }
}

export default UseTabla
