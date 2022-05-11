import { Schema, model } from 'mongoose';

const PeliculasSchema = new Schema({
    titulo: String,
    duracion_minutos: Number,
    genero: String,
    clasificacion: String,
    formato: String,
    portada: String,
    estado: { //aqui van los Estados de la pelicula
        ref: "Estados",
        type: Schema.Types.ObjectId
    }



}, {
    versionKey: false
})

export default model("Peliculas", PeliculasSchema);