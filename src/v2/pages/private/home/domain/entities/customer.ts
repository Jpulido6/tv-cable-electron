export class Customers {


    constructor(private _id: number,
        private _nombre: string,
        private _direccion: string,
        private _email: string,
        private _telefono: string,
        private _estado: boolean | string,
        private _fechaInscripcion: Date) { }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }
    get direccion() {
        return this._direccion;
    }
    get email() {
        return this._email;
    }
    get telefono() {
        return this._telefono;
    }
    get estado() {
        return this._estado;
    }
    get fechaInscripcion() {
        return this._fechaInscripcion
    }



}