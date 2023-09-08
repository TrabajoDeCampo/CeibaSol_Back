const mongoose = require('mongoose');
/*datos locales DB*/
//const ruteBD ='mongodb://localhost/CeibaSol'
/* datos nube DB (Cluster)*/
const ruteBD ='mongodb+srv://CeibaSol:CeibaSol123@ceibasol.zumhbwd.mongodb.net/?retryWrites=true&w=majority'
mongoose.set("strictQuery", false);
mongoose.connect(ruteBD, { useNewUrlParser: true })
    .then(() => console.log('Conexion correcta BD'))
    .catch((err) => console.log(`ERROR to connect : ${err.message}`));

    module.exports = mongoose;

/*
datos host
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log('Conexion correcta BD'))
    .catch((err) => console.log(`ERROR to connect : ${err.message}`));

    module.exports = mongoose;
*/
