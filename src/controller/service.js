const service = require("../models/service");

const crearServicio = async (req, res) => {
  const { nameService, subService, linkImg } = req.body;

  try {
    let newService = await service.findOne({ nameService });

    if (newService) {
      return res.status(400).json({
        succes: false,
        error: "Ese servicio ya existe",
      });
    }

    newService = new service(req.body);
    await newService.save();

    return res.status(200).json({
      succes: true,
      newService,
      message: "Servicio creado",
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const listarServicios = async (req, res) => {
  try {
    const servicios = await service.find();
    return res.status(200).json({
      succes: true,
      servicios,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const eliminarServicio = async (req, res) => {
  
  const { nameService } = req.body;

  try {
    const deleteItem = await service.findOneAndDelete({ nameService });

    return res.status(200).json({
      succes: true,
      deleteItem,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const actualizarServicio = async (req, res) => {

  const { nameService, subService, linkImg } = req.body;

  try {

    let find = await service.findOne({ nameService });

    if (find) {
      const servicioUpdate = await service.findOneAndUpdate(
        { nameService },
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).json({
        succes: true,
        servicioUpdate,
      });
    }
    return res.status(400).json({
      succes: false,
      error: "Ese servicio no existe",
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

module.exports = {
  crearServicio,
  listarServicios,
  eliminarServicio,
  actualizarServicio,
};
