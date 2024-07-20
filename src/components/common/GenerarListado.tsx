import React from 'react';
import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import logo from '../../assets/images/logo.png'
import { formatearFecha2 } from '../../utils/formatearFecha';
import { Usuario } from '../../services/actions.usuarios';
import { formatearMoneda } from '../../utils/formatMoneda';




interface GenerarPdfProps {
    data: Usuario[],
    barrio: string
}
const GenerarListado: React.FC<GenerarPdfProps> = ({ data, barrio }) => {
    

    const date = formatearFecha2(new Date().toString())
    return (
        <Document>
            <Page size={'A4'} style={styles.page}>
                <View style={styles.section}>
                    <Image src={logo} style={styles.logo} />
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}> Tv Cable San jose </Text>
                        <Text style={styles.subtitle}> Listado {barrio}</Text>
                    </View>
                    <Text style={styles.textMonth}>{date.toLocaleUpperCase()}</Text>
                </View>
                <View style={styles.containerTable}>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableColHeaderId}>
                                <Text>Id</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text>Nombre</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text>Teléfono</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text>Dirección</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text>Saldo</Text>
                            </View>
                            <View style={styles.tableColHeader}>
                                <Text>Observación</Text>
                            </View>
                        </View >
                        {data && data.length > 0 ? (
                            data.map((item, index) => (
                                <View key={index} style={styles.tableRow}>
                                    <View style={styles.tableColId}>
                                        <Text style={styles.tableCell}>{index + 1}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>{item.nombre || ''}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>{item.telefono || ''}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>{item.direccion || ''}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>{'$'+ formatearMoneda(item.saldo?.toString())}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}></Text>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <View style={styles.tableRow}>
                                <Text>No data available</Text>
                            </View>
                        )}
                    </View>

                </View>
            </Page>
        </Document>
    )
}

export default GenerarListado

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20
    },
    section: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#f2f2f2'
    },
    containerTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    logo: {
        width: 80,
        height: 80
    },
    containerTable: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        marginTop: 10
    },
    table: {
        display: 'flex',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0
    },
    tableRow: {
        flexDirection: 'row'
    },
    tableColHeaderId: {
        width: '10%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        padding: 2,
        fontSize: 12

    },
    tableColHeader: {
        width: '18%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        padding: 2,
        fontSize: 12

    },
    tableColId: {
        width: '10%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        textAlign: 'center',
        padding: 2,
        fontSize: 8
    },
    tableCol: {
        width: '18%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        textAlign: 'center',
        padding: 2,
        fontSize: 8
    },
    tableCell: {
        margin: 'auto',
        textAlign: 'center',
        padding: 5
    },
    textMonth: {
        fontSize: 12,
        padding: 5
    }
});