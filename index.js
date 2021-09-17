require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//llamamos a aexpres
const app = express();

//tipos de datos
app.use(express.json())

//la configuracion
app.set('port', port);

//pasamos las rutas
app.use('/api', require('./rutas'))

//iniciamos express
app.listen(app.get('port'),(error) => {
    if(error){
        console.log(' error al iniciar el servidor: ' +error)
    }
    else{
        console.log('servidor iniciando en el puerto: ' +port)
    }
})