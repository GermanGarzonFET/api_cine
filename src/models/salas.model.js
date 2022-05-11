import { Schema, model } from 'mongoose';

const SalasSchema = new Schema({
    numero_sala: {type:String,unique:true},
    descripcion: String,
    capacidad_total: Number,
    capacidad_disponible:Number,
    pelicula_persentar: {
        ref: "Peliculas",
        type: Schema.Types.ObjectId
    },
    funciones_dia: String



}, {
    versionKey: false
})

export default model("Salas", SalasSchema);