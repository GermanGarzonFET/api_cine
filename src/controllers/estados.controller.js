import EstadosSchema from '../models/estados.model';



const getEstados = async(req, res) => {
    const estadosData = await EstadosSchema.find();
    console.log("holass soy listar");
    res.status(201).json(estadosData);
};
const getEstado  = async(req, res) => {
    const id_estado = req.params.id;
    const estadosData = await EstadosSchema.findById(id_estado, (err, data) => {
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
    console.log(estadosData);
    res.status(200).json(estadosData);


}
const addEstados  = async(req, res) => {
    const { estado,descripcion } = req.body;
        const newEstado = await new EstadosSchema({
            estado,descripcion
        });
        newEstado.save()
        console.log(newEstado)
        res.status(200).json(newEstado)


}
const editEstados  =async (req, res) => {
    let id = req.params.id;
    try {
        const upData= await EstadosSchema.findByIdAndUpdate(id,req.body, {
            new: true
        });
        res.status(200).json(upData);

    } catch (error) {
        res.status(400).json({message:"error al editar"});
        return

    }
}
const deleteEstados  =async (req, res) => {
    let id = req.params.id;
    try {
        await EstadosSchema.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)
        res.status(200).json({ message: "error al eliminar" });
    }
    res.status(200).json({ message: "ok" })
}



module.exports = {
    getEstados,
    getEstado,
    addEstados,
    editEstados,
    deleteEstados

}