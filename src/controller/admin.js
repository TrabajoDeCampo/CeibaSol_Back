const User = require("../models/user");
const {generateToken} = require("../helper/jwt");
const bcrypt = require("bcryptjs");


const signIn = async (req, res) => {

  const { userName, password } = req.body;

  try {

    const busqueda = await User.findOne({ userName });
    if(!busqueda){
      return res.status(400).json({
        succes: false,
        err: "Ese usuario no existe"
      })
    }

    const validacionPassword = bcrypt.compareSync(password, busqueda.password);
     
    if(!validacionPassword){
      return res.status(400).json({
        succes: false,
        err: "La contraseña no es valida"
      });
    }

    const token = await generateToken(
      busqueda.userName,
      busqueda.password,
      busqueda.role,
    );

    return res.status(200).json({
      succes: true,
      busqueda,
      token,
    });
    
  } catch (error) {
    
  }

};

const signOut = async (req, res) => {};

module.exports = {
  signIn,
  signOut,
};
