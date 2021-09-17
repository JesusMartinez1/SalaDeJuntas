const router = require('express').Router()
const conexion = require('./config/conexion')



//asignamos todas las rutas y peticiones del client, tambien hacemos uso de codigo sql para hacer los cambios en la base de datos
router.get('/', (req, res) => {
    let sql = 'select * from tb_reserva'
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//recuperar un id
router.get('/:id', (req, res) => {
    const {id} = req.params
    let sql = 'select * from tb_reserva where id_equipo = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//agregar
router.post('/', (req, res) => {
    const{nombre, descripcion, cita} = req.body

    let sql = `insert into tb_reserva(nombre, descripcion, cita) values ('${nombre}', '${descripcion}', '${cita}')`
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})


//eliminar
router.delete('/:id', (req, res) => {
    const{id} = req.params

    let sql = `delete from tb_reserva where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'equipo eliminado'})
        }
    })
});

//modificar
router.put('/:id', (req, res) => {
    const{id} = req.params
    const{nombre, descripcion, cita } = req.body

    let sql = `update tb_reserva set
                nombre = '${nombre}',
                descripcion = '${descripcion}',
                cita = '${cita}',
                where id_equipo = '${id}' `

    conexion.query(sql, (err, rows, fields) => {
        if(err) throw err
        else{
            res.json({status: 'equipo modificado'})
        }
    })
})


module.exports = router