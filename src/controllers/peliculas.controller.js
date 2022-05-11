import PeliculasModel from '../models/peliculas.model';



const get = async(req, res) => {
    const data = await PeliculasModel.find();
    res.status(201).json(data);
};
const getId  = async(req, res) => {
    const id = req.params.id;
    const data = await PeliculasModel.findById(id, (err, data) => {
        if (err) {
            res.status(204).json({ message: "Estado no encontrado"});
            return
        }
        if (!data) {
            res.status(204).json({ message: "Estado no existe" });
            return

        } else {
            return data
        }
    });
    console.log(data);
    res.status(200).json(data);


}
const add = async(req, res) => {
    const { titulo,duracion_minutos,genero, clasificacion,formato,portada,estado} = req.body;
        const newData = await new PeliculasModel({
            titulo,duracion_minutos,genero, clasificacion,formato,portada,estado
        });
        newData.save()
        console.log(newData)
        res.status(200).json(newData)


}
const edit =async (req, res) => {
    let id = req.params.id;
    try {
        const upData= await PeliculasModel.findByIdAndUpdate(id,req.body, {
            new: true
        });
        res.status(200).json(upData);

    } catch (error) {
        res.status(400).json({message:"error al editar"});
        return

    }
}
const deleteId =async (req, res) => {
    let id = req.params.id;
    try {
        await PeliculasModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)
        res.status(200).json({ message: "error al eliminar" });
    }
    res.status(200).json({ message: "ok" })
}



module.exports = {
    get,
    getId,
    add,
    edit,
    deleteId

}