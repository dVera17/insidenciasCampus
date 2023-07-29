import conn from "../db/connection.js";

const getAllInsidencias = (req, res) => {
    try {
        conn.query(`SELECT i.descripcion, i.fecha_reporte, c.nombre AS "categoria", ti.nombre AS "tipo insidencia", a.nombre AS "area", t.nombre AS "trainer" FROM insidencia i JOIN categoria c ON i.id_categoria = c.id JOIN tipo_insidencia ti ON i.id_tipo_insidencia = ti.id JOIN area a ON i.id_area = a.id JOIN trainer t ON i.cedula_trainer = t.cedula;`, (err, data, fields) => {
            if(err) console.log(err);
            res.send(data);
        });
    } catch (error) {
        res.status(500).send(error);         
    }
}

const addInsidencia = (req, res) => {
    try {
        let databody = req.body;
        let dataArray = [databody.descripcion, databody.id_categoria, databody.id_tipo_insidencia, databody.id_area, databody.cedula_trainer ]
        conn.query(`INSERT INTO insidencia(descripcion, id_categoria, id_tipo_insidencia, id_area, cedula_trainer) VALUES(?, ?, ?, ?, ?);`, dataArray, (err, data, fields) => {
            if(err) console.log(err);
            res.send(data);
        });
    } catch (error) {
        res.status(500).send(error);        
    }
}

export const methodsInsidencias = {
    addInsidencia,
    getAllInsidencias
}