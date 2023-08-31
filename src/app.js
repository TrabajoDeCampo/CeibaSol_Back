const express = require('express');
const cors = require('cors');
const app = express();

//conexion con la base de datos
//require('./database/connect-database');

//middleware
app.use(express.json());
app.use(cors());
//settings
app.set('port', process.env.PORT || 5000);
//routas o endpoints


app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'));
});  