const User = require("../models/user");
const { generateToken } = require("../helper/jwt");
const bcrypt = require("bcryptjs");


const crearUsuario = async (req, res) => {

  const { userName, password } = req.body;

  try {
    let validation = await User.findOne(
      { userName },
      { password: 0}
    );
    if (validation) {
      return res.status(400).json({
        succes: false,
        error: `El usuario ya existe prueba con uno nuevo ${userName}`,
      });
    }

    validation = new User(req.body);

    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(validation.password, salt);
    validation.password = pass;

    await validation.save().then((usuario) => {
        res.json({ mensaje: "Usuario creado correctamente", usuario });
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (req, res) => {

  const { userName, password } = req.body;

  try {
    const busqueda = await User.findOne({ userName });

    if (!busqueda) {
      return res.status(400).json({
        succes: false,
        err: "Ese usuario no existe",
      });
    }

    const validacionPassword = bcrypt.compareSync(password, busqueda.password);

    if (!validacionPassword) {
      return res.status(400).json({
        succes: false,
        err: "La contraseña no es valida",
      });
    }

    const token = await generateToken(
      busqueda.userName,
      busqueda.password,
      busqueda.role
    );

    return res.status(200).json({
      succes: true,
      busqueda,
      token,
    });
  } catch (error) {
    console.log("error")
  }
};

const signOut = async (req, res) => {

};

module.exports = {
  crearUsuario,
  signIn,
  signOut,
};
