import React from 'react'
import { Document, Font, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import Loading from './Loading';
import logo from '../../assets/images/logo.png'
import tv from '../../assets/images/tv.png'
import { DatosUsuario, Pago } from '../../services/actions.usuarios';
import { formatearFecha2 } from '../../utils/formatearFecha';
import { formatearMoneda } from '../../utils/formatMoneda';
import JsBarcode from 'jsbarcode';


interface Factura {
    codigoFactura: string
    fechaEmision: Date
    id: number
    id_usuario: number
    montoTotal: number
    pagos: Pago[]
}


export interface DatosResponse {
    direccion: string
    email: string
    estado: boolean
    facturas: Factura[]
    fechaInscripcion: string
    id: number
    nombre: string
    telefono: string
    saldo: number;
}

interface FacturaPdfProps {
    user: DatosUsuario;
}

const GenerarFactura: React.FC<FacturaPdfProps> = ({ user }) => {
    console.log(user)
    const date = new Date()
    if (!user) {
        return <Loading />
    }

    const fechaSumada = (fecha: Date) => {
        const fechaInicial = new Date(fecha)

        fechaInicial.setDate(fechaInicial.getDate() + 30)
        return fechaInicial.toLocaleDateString()

    }
    const { saldo, usuario } = user

    const pago = usuario.facturas ? usuario.facturas.flatMap((factura) => {
        return factura.pagos.map((pagos) => pagos)
    }) : []

    const ultimoPago = pago.length > 0 ? pago[pago.length - 1] : null

    const ultimaFactura = usuario.facturas && usuario.facturas.length > 0
        ? usuario.facturas[usuario.facturas.length - 1]
        : null


    const barcodeDataUrl = (() => {
        const canvas = document.createElement('canvas');
        JsBarcode(canvas, usuario.facturas[0].codigoFactura, {
            format: 'CODE128',
            fontSize: 10,
        });
        return canvas.toDataURL('image/png');
    })();
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {
                    usuario.facturas.length > 0 && (
                        <View style={styles.container} key={usuario.id}>
                            <View style={{
                                position: 'absolute',
                                zIndex: 20,
                                left: '30%',
                                top: '40%'
                            }}>
                                <Text style={{ color: 'red', transform: 'rotate(15deg)', fontWeight: 'bold', fontSize: 30 }}>
                                    {saldo >= 45000 ? 'SUSPENSIÓN' : ''}
                                </Text>
                            </View>
                            <View style={styles.header}>
                                <View style={styles.containerOne}>
                                    <View style={styles.containerLogo}>
                                        <View style={{ width: 70, height: 'auto', paddingRight: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image src={logo} style={styles.logo} />
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.text}>TV CABLE SAN JOSE</Text>
                                            <Text style={styles.subtitle}>3105922940</Text>
                                            <Text style={styles.subtitle}>NIT 942349952-1</Text>
                                        </View>

                                    </View>
                                    <View style={styles.containerUser}>
                                        <Text style={styles.text}>{usuario.nombre}</Text>
                                        <Text style={[styles.subtitle, { marginTop: 8, fontWeight: 'bold' }]}>
                                            Dirección: <Text style={{ fontSize: 12, fontWeight: 'thin' }}>{usuario.direccion}</Text>
                                        </Text>
                                        <Text style={[styles.subtitle,]}>Mes Factura:
                                            <Text style={{ fontSize: 14, fontWeight: 'medium' }}>{formatearFecha2(date.toString()).toUpperCase()}
                                            </Text>
                                        </Text>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.container2}>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                }}>

                                    <View style={{
                                        width: '30%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#21212121',
                                        borderBottomLeftRadius: 10,
                                    }}
                                    >
                                        <Image
                                            src={tv}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                left: -4
                                            }}
                                        />
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{ fontSize: 10 }}>SERVICIO DE TELEVISION</Text>
                                            <Text style={{ fontSize: 10 }}>POR CABLE</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: '30%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{ fontSize: 10 }}>Fecha de Emision de la Factura</Text>
                                        <Text style={{ fontSize: 10 }}>{new Date(usuario.facturas[0].fechaEmision).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: '2-digit' })}</Text>


                                    </View>
                                    <View style={styles.totalPagar}>
                                        <Text style={styles.subtitle}>TOTAL A PAGAR</Text>
                                        <Text style={styles.subtitle}>{'$' + formatearMoneda(saldo.toString())}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.container3}>
                                <View style={{
                                    backgroundColor: '#21212121',
                                    width: '100%',
                                    height: '20px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottomRightRadius: 5,
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,

                                }}>
                                    <Text style={{ fontSize: 10, textAlign: 'center' }}>CONOCE LOS COBROS A DETALLE</Text>
                                </View>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: 'space-between',

                                }}>
                                    <View style={{ width: '39%', height: 100 }}>
                                        <View style={{
                                            display: 'flex',
                                            width: '100%',
                                            height: '100px',

                                        }}>
                                            <View style={{
                                                display: 'flex',
                                                width: '100%',
                                                height: '45px',
                                                marginTop: 4,
                                                borderWidth: '1px',
                                                borderColor: 'gray',
                                                borderBottomRightRadius: 5,
                                                borderTopLeftRadius: 5,
                                                borderBottomLeftRadius: 5,
                                            }}>
                                                <View style={{
                                                    backgroundColor: '#21212121',
                                                    display: 'flex', width: '100%',
                                                    height: '20px',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Text style={{ fontSize: 8, textAlign: 'center', }}>ULTIMO PAGO</Text>

                                                </View>
                                                <View style={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between'
                                                }}>
                                                    <View style={{ width: '65%' }}>
                                                        <Text style={{ fontSize: 10, textAlign: 'center', }}>Fecha del ultimo pago</Text>
                                                        <Text style={{ fontSize: 8, textAlign: 'center', }}>{new Date(usuario.facturas[0].fechaEmision).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: '2-digit' })}</Text>

                                                    </View>
                                                    <View style={{
                                                        width: '35%',
                                                        height: 'auto',
                                                        backgroundColor: '#21212121',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        padding: 5
                                                    }}>
                                                        <Text style={{ fontSize: 10, textAlign: 'center', }}>V.PAGADO</Text>
                                                        <Text style={{ fontSize: 10, textAlign: 'center', }}>{'$' + ultimoPago ? formatearMoneda(ultimoPago ? ultimoPago.montoPagado.toString() : '0') : 'N/A'}</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={{
                                                display: 'flex',
                                                width: '100%',
                                                height: '45px',
                                                marginTop: 4,
                                                borderWidth: '1px',
                                                borderColor: 'gray',
                                                borderBottomRightRadius: 5,
                                                borderTopLeftRadius: 5,
                                                borderBottomLeftRadius: 5,
                                            }}>
                                                <View style={{ width: '100%', height: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 8, textAlign: 'center', }}>Fecha de pago</Text>
                                                    <Text style={{ fontSize: 8, textAlign: 'center', }}>{new Date().toLocaleDateString()}</Text>
                                                </View>
                                                <View style={{ width: '100%', height: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 8, textAlign: 'center', }}>Fecha de corte </Text>
                                                    <Text style={{ fontSize: 8, textAlign: 'center', }}>{new Date().toLocaleDateString()}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ width: '59%', height: 100 }}>

                                        <View style={{
                                            display: 'flex',
                                            width: '100%',
                                            height: '45px',
                                            marginTop: 4,
                                            borderWidth: '1px',
                                            borderColor: 'gray',
                                            borderBottomRightRadius: 5,
                                            borderTopLeftRadius: 5,
                                            borderBottomLeftRadius: 5,
                                        }}>
                                            <View style={{
                                                backgroundColor: '#21212121',
                                                display: 'flex', width: '100%',
                                                height: '20px',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{ fontSize: 8, textAlign: 'center', }}>DEUDA ANTERIOR</Text>

                                            </View>
                                            <View style={{
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }}>
                                                <View style={{ width: '75%' }}>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', }}>Descripción</Text>
                                                    <Text style={{ fontSize: 8, textAlign: 'center', }}>Cargos anteriores</Text>

                                                </View>
                                                <View style={{
                                                    width: '25%',
                                                    height: 'auto',
                                                    backgroundColor: '#21212121',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    padding: 5
                                                }}>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', }}>VALOR</Text>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', }}>{'$' + formatearMoneda((saldo - 15000).toString())}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{
                                            display: 'flex',
                                            width: '100%',
                                            height: '45px',
                                            marginTop: 4,
                                            borderWidth: '1px',
                                            borderColor: 'gray',
                                            borderBottomRightRadius: 5,
                                            borderTopLeftRadius: 5,
                                            borderBottomLeftRadius: 5,
                                        }}>
                                            <View style={{
                                                backgroundColor: '#21212121',
                                                display: 'flex',
                                                width: '100%',
                                                height: '20px',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{ fontSize: 8, textAlign: 'center', }}>CARGOS FIJOS</Text>
                                            </View>

                                            <View style={{
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between'
                                            }}>
                                                <View style={{ width: '75%', display: 'flex', flexDirection: 'column', marginHorizontal: 10 }} >

                                                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <Text style={{ fontSize: 10, textAlign: 'center', }}>Descripción</Text>
                                                        <Text style={{ fontSize: 10, textAlign: 'center', }}>Fecha inicial</Text>
                                                        <Text style={{ fontSize: 10, textAlign: 'center', }}>Fecha final</Text>

                                                    </View>
                                                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <Text style={{ fontSize: 8, textAlign: 'center', }}>Servicio television</Text>
                                                        <Text style={{ fontSize: 8, textAlign: 'center', }}>{ultimaFactura ? new Date(ultimaFactura.fechaEmision).toLocaleDateString() : 'N/A'}</Text>
                                                        <Text style={{ fontSize: 8, textAlign: 'center', }}>{ultimaFactura ? fechaSumada(new Date(ultimaFactura.fechaEmision)) : 'N/A'}</Text>

                                                    </View>
                                                </View>
                                                <View style={{ width: '25%', height: 'auto', backgroundColor: '#21212121', display: 'flex', flexDirection: 'column', padding: 5 }}>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', }}>VALOR</Text>
                                                    <Text style={{ fontSize: 10, textAlign: 'center', }}>{'$' + formatearMoneda('15000')}</Text>


                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.container4}>
                                <View style={{ display: 'flex', width: '50%', flexDirection: 'column' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                                        <Image src={logo} style={{ width: '25px', height: '25px' }} />
                                        <Text style={styles.text}>TV CABLE SAN JOSE</Text>
                                    </View>
                                    <Text style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontSize: 10, textAlign: 'center', }}>Tel: 3105922940</Text>
                                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100px', marginHorizontal: 10 }}>

                                        <Image src={barcodeDataUrl} />

                                    </View>
                                </View>
                                <View style={{ display: 'flex', width: '40%', flexDirection: 'column' }}>
                                    <Text style={styles.text}>{usuario.nombre}</Text>
                                    <View style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10, marginBottom: 5 }}>
                                        <View style={{ width: '50%', }}><Text style={styles.subtitle}>
                                            Dirección:</Text>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Text style={{ fontSize: 10, }}>{usuario.direccion}</Text>
                                        </View>
                                    </View>
                                    <View style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 5 }}>
                                        <View style={{ width: '50%' }}><Text style={styles.subtitle}>
                                            Teléfono:</Text>
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Text style={{ fontSize: 10, }}>{usuario.telefono}</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        borderTopRightRadius: 8, borderTopLeftRadius: 8, color: 'black', padding: 4, borderColor: 'red', borderWidth: '1px',
                                    }}>
                                        <Text style={[styles.subtitle,]}>Periodo Facturación: <Text style={{ fontSize: 14, fontWeight: 'medium' }}>{formatearFecha2(date.toString())}</Text>
                                        </Text>
                                    </View>
                                    <View style={{ borderBottomRightRadius: 8, borderBottomLeftRadius: 8, backgroundColor: 'red', color: 'white', padding: 5, alignContent: 'center' }}>

                                        <Text style={styles.subtitle}>Total a Pagar:
                                            <Text style={styles.subtitle}>{' $' + formatearMoneda(saldo.toString())}</Text>
                                        </Text>
                                    </View>

                                </View>
                            </View>


                        </View>
                    )
                }

            </Page>
        </Document>
    )
}

export default GenerarFactura


//     page: {
//         padding: 10,
//         marginTop: 10
//     },
//     container: {
//         width: '100%',
//         height: '50%',
//     },
//     boxOne: {
//         width: '100%',
//         height: 180,
//         display: 'flex',
//         flexDirection: 'row',
//         border: 1,
//         marginBottom: 10
//     },
//     containerBoxOne: {
//         width: '50%',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: 5

//     },
//     containerLogo: {
//         width: '100%',
//         height: '50%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         padding: 5

//     },
//     logo: {
//         width: 60,
//         height: 60
//     },
//     title: {
//         fontSize: 20,
//         textAlign: 'center',
//     },
//     containerFechas: {
//         width: '100%',
//         height: '50%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: 5,

//     },
//     containerBoxTwo: {
//         width: '50%',
//         height: '100%',
//     },
//     containerFactura: {
//         width: '100%',
//         height: '50%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: 5,
//         backgroundColor: '#f2f2f2',
//     },
//     containerTable: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 10
//     },
//     table: {
//         display: 'flex',
//         width: 'auto',
//         borderStyle: 'solid',
//         borderWidth: 1,
//         borderRightWidth: 0,
//         borderBottomWidth: 0,
//     },
//     tableRow: {
//         flexDirection: 'row',
//     },
//     tableColHeader: {
//         width: '50%',
//         borderStyle: 'solid',
//         borderWidth: 1,
//         borderLeftWidth: 0,
//         borderTopWidth: 0,
//         backgroundColor: '#f2f2f2',
//         textAlign: 'center',
//         padding: 2,
//     },
//     tableCol: {
//         width: '50%',
//         borderStyle: 'solid',
//         borderWidth: 1,
//         borderLeftWidth: 0,
//         borderTopWidth: 0,
//         textAlign: 'center',
//         padding: 2,
//         fontSize: 8,
//     },
//     tableColHeaderFactura: {
//         width: '50%',
//         borderStyle: 'solid',
//         borderLeftWidth: 0,
//         borderTopWidth: 0,
//         backgroundColor: '#f2f2f2',
//         textAlign: 'center',
//         padding: 2,
//     },
//     tableCellHeader: {
//         fontSize: 10,
//         fontWeight: 'bold',
//     },
//     tableCell: {
//         fontSize: 8,
//     },
//     text: {
//         fontSize: 8
//     },
//     boxTwo: {
//         width: '100%',
//         height: 110,
//         display: 'flex',
//         flexDirection: 'row',
//         border: 1,
//         padding: 5,

//     },
//     containerOneBoxTwo: {
//         width: '50%',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: 5,

//     },
//     containerTwoBoxTwo: {
//         width: '50%',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: 5,
//     },
//     containerFacturaTwo: {
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         padding: 5,
//         backgroundColor: '#f2f2f2',
//     },


// })
// const source = '../../assets/fonts/Poppins-Regular.ttf'

Font.register({
    family: 'Poppins',
    src: 'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf'
})

const styles = StyleSheet.create({
    page: {
        padding: 10,
        marginTop: 10,
        fontFamily: 'Poppins'
    },
    container: {
        width: '100%',
        height: '50%',
    },
    header: {
        width: '100%',
        height: '80px',
        display: 'flex',

    },
    containerOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '70px',
    },
    containerLogo: {
        width: '55%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5
    },
    logo: {
        width: 60,
        height: 60,
        padding: 2
    },
    containerUser: {
        width: '40%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#21212121',
        textAlign: 'right',
        padding: 5
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Poppins'
    },
    subtitle: {
        fontSize: 12,
    },
    container2: {
        width: '100%',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderBottomRightRadius: 10,
        borderColor: 'red',
        borderWidth: '1px',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    totalPagar: {
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderBottomRightRadius: 11,
        width: '30%',
        color: 'white',

    },
    container3: {
        width: '100%',
        height: '130px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 5,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 5,
        border: '1px solid gray'
    },
    container4: {
        width: '100%',
        height: '120px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        borderBottomRightRadius: 10,
        borderColor: 'red',
        borderWidth: '1px',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

})