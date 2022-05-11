import SalasSchema from '../models/salas.model';



const get = async(req, res) => {
    const data = await SalasSchema.find();
    res.status(201).json(data);
};
const getId  = async(req, res) => {
    const id = req.params.id;
    const data = await SalasSchema.findById(id, (err, data) => {
        if (err) {
            res.status(204).json({ message: "sala no encontrado"});
            return
        }
        if (!data) {
            res.status(204).json({ message: "sala no existe" });
            return

        } else {
            return data
        }
    });
    console.log(data);
    res.status(200).json(data);
}

const add = async(req, res) => {
    const { numero_sala,descripcion,capacidad_total,funciones_dia} = req.body;
    const newData = await new SalasSchema({
            numero_sala,descripcion,capacidad_total,funciones_dia
    });
    newData.save()
    console.log(newData)
    res.status(200).json(newData)
}


const edit =async (req, res) => {
    let id = req.params.id;
    try {
        const upData= await SalasSchema.findByIdAndUpdate(id,req.body, {
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
        await SalasSchema.findByIdAndDelete(id);
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