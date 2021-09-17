//conexion a nuestra bd de mysql

//aqui le decimos el nombre de nuestra base de datos y cual tabla es la que vamos a estra modificando
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'saldeuvas',
    port: 3306,
    database: 'db_juntas'
});

//en caso de que ocurra un error nos mostrara en consola cual es y si corre correctamente nos dira en que puerto esta corriendo
conexion.connect((err) => {
    if(err){
        console.log('ha ocurrido un error' + err)
    }
    else{
        console.log('base de datos conectada')
    }
});

module.exports = conexion;