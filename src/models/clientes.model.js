import { Schema, model } from 'mongoose';

const ClientesSchema = new Schema({
    nombre: String,
    apellido: String,
    num_identidad: String,
    telefono: String,
    correo_electronico: String,
}, {
    versionKey: false
})

export default model("Clientes", ClientesSchema);