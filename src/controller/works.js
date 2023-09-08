const works = require("../models/works");

const crearTrabajo = async (req, res) => {
  const { nameWork, description, linkImg } = req.body;

  try {
    let newWork = await works.findOne({ nameWork });

    if (newWork) {
      return res.status(400).json({
        succes: false,
        error: "Ese trabajo ya existe",
      });
    }

    newWork = new works(req.body);
    await newWork.save();

    return res.status(200).json({
      succes: true,
      newWork,
      message: "Trabajo creado",
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const listarTrabajos = async (req, res) => {
  try {
    const trabajos = await works.find();
    return res.status(200).json({
      succes: true,
      trabajos,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const verTrabajo = async (req, res) => {
  const { workId } = req.query;

  try {
    const trabajo = await works.findById({ _id: workId });
    return res.status(200).json({
      succes: true,
      trabajo,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const eliminarTrabajo = async (req, res) => {
  const { workId } = req.params;

  try {
    const deleteWork = await works.findByIdAndRemove({ _id: workId });

    return res.status(200).json({
      succes: true,
      deleteWork,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const actualizarTrabajo = async (req, res) => {
  const { workId, nameWork, description, linkImg } = req.body;

  try {
    let findWork = await works.findOne({ _id: workId });

    if (findWork) {
      const worksUpdate = await works.findOneAndUpdate(
        { _id: workId },
        req.body,
        {
          new: true,
        }
      );
      return res.status(200).json({
        succes: true,
        worksUpdate,
      });
    }
    return res.status(400).json({
      succes: false,
      error: "Ese trabajo no existe",
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

module.exports = {
  crearTrabajo,
  listarTrabajos,
  verTrabajo,
  eliminarTrabajo,
  actualizarTrabajo,
};
