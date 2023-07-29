import conn from "../db/connection.js";

const getAllAreas = (req, res) => {
    try {
        conn.query(`SELECT a.id, a.nombre, ta.nombre as "Tipo area" FROM area a JOIN tipo_area ta ON a.id_tipo_area = ta.id;`, (err, data, fields) => {
            res.send(data);
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getAllTipoArea = (req, res) => {
    try {
        conn.query(`SELECT * FROM tipo_area`, (err, data, fields) => {
            if(err) res.status(500).send(err);
            res.send(data);
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const methodsArea = {
    getAllAreas,
    getAllTipoArea
}