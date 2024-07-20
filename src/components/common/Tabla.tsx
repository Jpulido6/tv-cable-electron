import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@nextui-org/react";
import { ModalComponent, Size } from "./ModalComponent";
import { SubmitHandler, useForm } from "react-hook-form";
import { useActualizarUsuarioMutation, useUsuarioMutation } from "../../hooks/useUsuarioMutation";
import { Toast } from "primereact/toast";
import { UsuarioResponse } from "../../services/actions.usuarios";
import Registrar from "./Registrar";
import VerUsuario from "./VerUsuario";
import EditarUsuario from "./EditarUsuario";


const statusColorMap: Record<string, ChipProps["color"]> = {
  activo: "success",
  inactivo: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["nombres", "direccion", "estado", "acciones"];


interface FormInput {
  nombre: string,
  direccion: string,
  telefono: string,
  email: string,
}

interface FormInputUpdate {
  nombre: string,
  direccion: string,
  telefono: string,
  estado: string,
  email: string,
}


interface Props {
  users: UsuarioResponse[]
}

interface MappedUser extends Omit<UsuarioResponse, "estado"> {
  estado: string
}

const Tabla: React.FC<Props> = ({ users }) => {

  const usuario: MappedUser[] = users.map((user) => {
    return {
      ...user,
      estado: user.estado ? "activo" : "inactivo",
    }
  })

  type User = typeof usuario[0];
  const [visibleView, setVisibleView] = React.useState<boolean>(false);
  const [visibleRegistro, setVisibleRegistro] = React.useState<boolean>(false);
  const [visibleEdit, setVisibleEdit] = React.useState<boolean>(false);
  const [visibleDelete, setVisibleDelete] = React.useState<boolean>(false);

  const toast = React.useRef<Toast>(null)
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });


  const [selectedUserId, setSelectedUserId] = React.useState<number>(0)


  const handleVisibleView = (id: number) => {
    setSelectedUserId(id)
    setVisibleView(true)
  };
  const handleCloseView = () => setVisibleView(false);
  const handleVisibleRegistro = () => setVisibleRegistro(true);
  const handleCloseRegistro = () => setVisibleRegistro(false);

  const handleVisibleEdit = (id: number) => {
    setSelectedUserId(id)
    setVisibleEdit(true)
  };
  const handleCloseEdit = () => setVisibleEdit(false);
  const handleVisibleDelete = () => setVisibleDelete(true);
  const handleCloseDelete = () => setVisibleDelete(false);

  const mutation = useUsuarioMutation()
  const mutationUpdate = useActualizarUsuarioMutation()

  const { control, handleSubmit } = useForm<FormInput>()

  const updateUserForm = useForm<FormInputUpdate>({
    defaultValues: {
      nombre: '',
      direccion: '',
      telefono: '',
      estado: '',
      email: '',
    }
  })

  const limpiarFormulario = () => {
    control._reset()
  }

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    mutation.mutate(data)
    toast.current?.show({ severity: 'success', summary: 'Registrado', detail: 'Usuario registrado' });
    handleCloseRegistro()
    limpiarFormulario()
  }

  const onSubmitUpdate: SubmitHandler<FormInputUpdate> = (data) => {

    const newData = {
      ...data,
      estado: data.estado === 'Activo' ? true : false
    }

    mutationUpdate.mutate({ id: selectedUserId, data: newData })

  }

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...usuario];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.nombre?.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.estado),
      );
    }

    return filteredUsers;
  }, [filterValue, statusFilter, hasSearchFilter, usuario]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number | string;
      const second = b[sortDescriptor.column as keyof User] as number | string;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);
  

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "nombres":
        return (
          <User
            avatarProps={{ radius: "full", size: "sm", src: `https://avatar.iran.liara.run/public/boy?username=${user.nombre}` }}
            classNames={{
              description: "text-default-500",
            }}
            description={user.nombre}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "direccion":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue.toString()}</p>
            <p className="text-bold text-tiny capitalize text-default-500">{user.telefono}</p>
          </div>
        );
      case "estado":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.estado]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case "acciones":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <i className="pi pi-ellipsis-v text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onClick={() => handleVisibleView(user.id)}>Ver</DropdownItem>
                <DropdownItem onClick={() => handleVisibleEdit(user.id)}>Editar</DropdownItem>
                <DropdownItem onClick={handleVisibleDelete}>Eliminar</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);


  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
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
              onPress={handleVisibleRegistro}
              className="bg-foreground text-background"
              endContent={<i className="pi pi-plus"></i>}
              size="sm"
            >
              Agregar usuario
            </Button>

          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} usuarios</span>
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
    users.length,
  ]);

  const bottomContent = React.useMemo(() => {
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

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
  );

  return (
    <>
      <Toast ref={toast} />
      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper: "after:bg-foreground after:text-background text-background",
          },
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
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
        <TableBody emptyContent={"usuario no encontrado"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => {
                return <TableCell>{renderCell(item, columnKey)}</TableCell>;
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {
        visibleRegistro &&
        <ModalComponent
          title="Registrar usuario"
          btnText="Registrar"
          isOpen={visibleRegistro}
          onOpenChange={handleCloseRegistro}
          btnFn={handleSubmit(onSubmit)}
        >
          <Registrar control={control} />
        </ModalComponent>
      }
      {
        visibleView &&
        <ModalComponent
          title="Ver Usuario"
          isOpen={visibleView}
          onOpenChange={handleCloseView}
          btnText="Ok"
          size={Size.QuintupleExtraLarge}
        ><VerUsuario id={selectedUserId} /></ModalComponent>
      }
      {
        visibleEdit &&
        <ModalComponent
          title="Editar Usuario"
          isOpen={visibleEdit}
          onOpenChange={handleCloseEdit}
          btnText="Actualizar"
          btnFn={updateUserForm.handleSubmit(onSubmitUpdate)}
        >
          <EditarUsuario
            id={selectedUserId}
            control={updateUserForm.control}
          />
        </ModalComponent>
      }
      {
        visibleDelete &&
        <ModalComponent
          title="Eliminar usuario"
          isOpen={visibleDelete}
          onOpenChange={handleCloseDelete}
          btnText="Eliminar"
        ><div>¿Estas seguro que quieres eliminar el usuario?</div></ModalComponent>
      }
    </>
  );
}

export default Tabla


const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOMBRES", uid: "nombres", sortable: true },
  { name: "FECHA DE INSCRIPCIÓN", uid: "fechaInscripcion", sortable: true },
  { name: "DIRECCIÓN", uid: "direccion", sortable: true },
  { name: "TELÉFONO", uid: "telefono" },
  { name: "EMAIL", uid: "email" },
  { name: "ESTADO", uid: "estado", sortable: true },
  { name: "ACCIONES", uid: "acciones" },
];

const statusOptions = [
  { name: "Activo", uid: "activo" },
  { name: "Inactivo", uid: "inactivo" },
];



