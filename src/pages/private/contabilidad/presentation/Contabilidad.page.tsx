import React, { useEffect, useMemo, useState, } from "react"
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, BarChart, Bar } from "recharts"
import MotionNumber from 'motion-number'
import { capitalize } from "@/utils/capitalize"
import { useGetAmountDaily, useGetIncomeMonthly } from "@/hooks/ingresos/useIngresos"
import Loading from "@/components/common/Loading"
import { DailyResponse } from "@/services/actions.ingresos"

const Contabilidad = () => {

    const daily = useGetAmountDaily()
    const monthly = useGetIncomeMonthly()


    if (!monthly.data || !daily.data) {
        return (
            <Loading />
        )
    }
    if (monthly.isLoading || daily.isLoading) {
        return (
            <Loading />
        )
    }
    return (

        <div className="w-full mx-auto p-4 h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-poppins-bold text-center">Resumen Financiero</h2>
            <div className="grid gap-4 grid-cols-1">

                <ShowBarChartAnual data={monthly.data} />

                <ShowBarChartSemanal data={daily.data} />

            </div>
        </div>
    )
}

export default Contabilidad

interface Props {
    data: DailyResponse
}

interface Data {
    mes: string,
    ingresos: number
    gastos: number
}
const ShowBarChartAnual: React.FC<Props> = ({ data }) => {

    const [ganancia, setGanancia] = useState<number>(0)
    const [payload, setPayload] = useState<Data>({
        mes: new Date().toLocaleDateString("es-Es", { month: "long" }),
        ingresos: 0,
        gastos: 0
    })
    const handleClick = (data: Data) => {
        setPayload({
            mes: data.mes,
            ingresos: data.ingresos,
            gastos: data.gastos
        })

    }


    useEffect(() => {
        const result = payload.ingresos - payload.gastos
        setGanancia(result)

        return () => {
            setGanancia(0)
        }
    }, [payload, ganancia])



    const chartData = useMemo(() => {
        const months = Object.keys(data.ingresosAnuales);
        return months.map(month => ({
            mes: capitalize(month),
            ingresos: data.ingresosAnuales[month as keyof typeof data.ingresosAnuales],
            gastos: data.gastosAnuales[month as keyof typeof data.gastosAnuales],
        }));
    }, [data]);



    return (
        <div className="flex flex-col w-full border rounded-md">
            <div className="flex flex-row justify-between w-full border-b">
                <div className="w-1/2 flex justify-between h-20">
                    <div className="flex p-2 items-center justify-center">
                        <span className="text-2xl font-poppins-bold">Finanzas Mensuales</span>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end ">
                    <div className="flex border-l p-2 items-center justify-center">
                        <span className="text-2xl font-poppins-bold" >{capitalize(payload.mes)}</span>
                    </div>
                    <div className="flex border-l p-2 items-center justify-center">
                        <span className="text-2xl font-poppins-bold leading-tight">
                            <MotionNumber
                                value={ganancia}
                                format={{
                                    notation: 'standard',
                                    currency: 'COP',
                                    style: 'currency',
                                    maximumSignificantDigits: 3
                                }}
                                locales="es-CO"
                            />
                            <span className="text-sm block font-poppins text-gray-500">Ganancias totales</span>
                        </span>
                    </div>
                </div>

            </div>
            <ResponsiveContainer width="100%" height={400} style={{ padding: 8 }}>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" onClick={() => console.log("click2 ")} />
                    <XAxis dataKey="mes" />
                    <YAxis tickFormatter={(value) => `${'$' + value.toLocaleString()}`} />
                    <Tooltip formatter={(value) => `${'$' + value.toLocaleString()}`} />
                    <Legend />
                    <Bar
                        dataKey="ingresos"
                        name="Ingresos mensuales"
                        fill="#212121"
                        onClick={(e) => handleClick(e)}
                    />
                    <Bar
                        dataKey="gastos"
                        name="Gastos mensuales"
                        fill="#7f8c8d"
                        onClick={handleClick}
                    />
                </BarChart>
            </ResponsiveContainer>

        </div>

    )

}


const ShowBarChartSemanal: React.FC<Props> = ({ data }) => {

    const dataMemo = useMemo(() => {
        const diaSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

        return Object.entries(data).map(([fecha, montoTotalIngresos]) => ({
            fecha,
            montoTotalIngresos,
            dia: new Date(fecha).toLocaleDateString('es-ES', { day: '2-digit', weekday: 'short', timeZone: 'UTC' }),
        })).sort((a, b) => diaSemana.indexOf(a.dia) - diaSemana.indexOf(b.dia))

    }, [data])

    return (
        <div className="flex flex-col w-full border rounded-md mt-10">
            <div className="flex flex-row justify-between w-full border-b">
                <div className="w-1/2 flex justify-between h-20">
                    <div className="flex p-2 items-center justify-center">
                        <span className="text-2xl font-poppins-bold">Finanzas Semanales</span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400} style={{ padding: 10 }}>
                <BarChart
                    width={500}
                    height={300}
                    data={dataMemo}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dia" />
                    <YAxis tickFormatter={(value) => `${'$' + value.toLocaleString()}`} />
                    <Tooltip formatter={(value) => `${'$' + value.toLocaleString()}`} />
                    <Legend />
                    <Bar dataKey="montoTotalIngresos" name="Ingreso semanal" fill="#212121" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )

}