
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'

const Pagos = () => {

    const [value, setValue] = useState('')
    const [value2, setValue2] = useState<number>(15000)

    
    return (
        <div className="w-full flex items-center justify-center h-screen " >
            {/* <Card
                header={header}
                title={title}
                subTitle={ subtitle }
                footer={footer}
                className="h-56">

            </Card> */}
            <div className='w-full border-2 border-white rounded-lg'>
                <div className='flex justify-center items-center w-full p-5'>
                    <span className="text-2xl font-semibold text-center  w-full">Registrar Pago</span>
                </div>


                <div className='flex justify-center items-center w-full p-5'>
                    
                    <InputText placeholder='Número Factura' value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                </div>
                <div className='flex justify-center items-center w-full p-5'>
                    <InputNumber
                        value={value2}
                        onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value!)}
                        mode="currency"
                        currency="COP"
                        locale="es-CO"
                    />
                </div>

            </div>

        </div>
    )
}

export default Pagos
