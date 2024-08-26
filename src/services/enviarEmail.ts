import { Resend } from "resend";
// import { DatosUsuario } from "./actions.usuarios";


const apiKey = import.meta.env.API_KEY_RESEND
console.log("api", apiKey)

const resend = new Resend("re_7CQXo8Nq_PDMZuwxDbUw7oG6qhfPCYCeB")
// const blobToBase64 = (blob: Blob): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(blob);
//         reader.onloadend = () => {
//             const base64data = reader.result as string;
//             // Remover el prefijo 'data:application/pdf;base64,' si existe
//             const base64 = base64data.split(',')[1];
//             resolve(base64);
//         };
//         reader.onerror = reject;
//     });
// };

// export const enviarEmail = async (user: DatosUsuario, blob: Blob) => {
export const enviarEmail = async () => {

    try {

        // const base64Pdf = await blobToBase64(blob)
        const response = await resend.emails.send({
            // from: 'Acme <onboarding@resend.dev>',
            // to: "jpulido.dev@gmail.com",
            // subject: "Factura TV CABLESANJOSE",

            // text: `Hola ${user.usuario.nombre}, adjunto encontrarás tu factura.`,
            // attachments: [
            //     {
            //         filename: "Facturas.pdf",
            //         content: base64Pdf,
            //     }
            //]

            from: 'Acme <onboarding@resend.dev>',
            to: "jpulido.dev@gmail.com",
            subject: "Prueba de Resend",
            text: `Este es un correo de prueba sin adjuntos.`,
        })

        if (response.error) {
            console.error('Error al enviar el correo:', response.error);
        } else {
            console.log('Correo enviado con éxito:', response);
        }
    } catch (error) {
        console.log("Error=>", error)

    }
}
