import { Schema, model } from 'mongoose';

const EstadosSchema = new Schema({
    estado: String,
    descripcion: String,

}, {
    versionKey: false
})

export default model("Estados", EstadosSchema);