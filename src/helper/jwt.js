const jwt = require("jsonwebtoken");
const config = require("./configJwt");


//GENERA EL TOKEN
function generateToken(userName,password,role) {

  const payload = {
    userName,
    password,
    role
  };
  return jwt.sign(
    payload,
    config.jwtSecret,
    { expiresIn: "5m" },
    (err, token) => {
      if (err) {
        console.log(err);
        reject("No se pudo generar el TOKEN");
      }
      resolve(token);
    }
  );
}
//AUTENTICA EL TOKEN
function authenticateToken(req, res, next) {

    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
    if (!token) {
      return res.status(401).json({ message: 'Token no encontrado' });
    }
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token inválido' });
      }
      req.user = decoded;
      next();
    });
  }


module.exports = {
    generateToken,
    authenticateToken
}
