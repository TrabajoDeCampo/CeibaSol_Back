const express = require('express');
const cors = require('cors');
const app = express();

//conexion con la base de datos
require('./database/connect-database');

//middleware
app.use(express.json());
app.use(cors());
//settings
app.set('port', process.env.PORT || 5000);
//routas o endpoints

//endpoints ADMINISTRADOR
app.use('/api/admin',require('./routes/admin'))
//endpoints Servicios
app.use('/api/services',require('./routes/service'));
//endpoints trabajos Realizados
app.use('/api/works',require('./routes/works'));
//endpoints contactos
app.use('/api/contact',require('./routes/contact'));


app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'));
});  