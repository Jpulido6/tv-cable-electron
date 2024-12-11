import { Button, Input } from "@nextui-org/react"
import { Controller } from "react-hook-form"
import usePagos from "./view-model/usePagos"

const PagosPage = () => {
    const { cargando, control, factura,handleSearch, setCodigo } = usePagos()
    return (
        <div className="w-full h-[80vh]">

            <div className="w-full max-w-md mx-auto">
                <div>
                    <span>Formulario de Pago</span>
                    <span>Ingrese el código de factura para realizar el pago</span>
                </div>
                <div className="space-y-4">
                    <div className="flex space-x-2">
                        <Controller
                            control={control}
                            name="codigoFactura"
                            render={({ field }) => (
                                <Input
                                    placeholder="Código de factura"
                                    type="text"
                                    {...field}
                                    value={field.value}
                                    onChange={e=> setCodigo(e.target.value)}
                                />
                            )}

                        />

                        <Button onClick={handleSearch} disabled={cargando} className="bg-foreground text-background w-full">
                            {cargando ? "Buscando..." : "Buscar"}
                        </Button>
                    </div>
                    {factura && (
                        <div className="space-y-2">
                            <div>
                                <Input value={factura.nombreCliente} readOnly />
                            </div>
                            <div>
                                <Input value={factura.numeroFactura} readOnly />
                            </div>
                            <div>
                                <Input value={`$${factura.valorTotal.toLocaleString()}`} readOnly />
                            </div>
                            <div>

                                <Input
                                    type="number"
                                    placeholder="Ingrese el monto a pagar"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <Button
                        className="w-full bg-foreground text-background"
                    >
                        Pagar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PagosPage
