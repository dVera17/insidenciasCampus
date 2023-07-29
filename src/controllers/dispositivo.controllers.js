import conn from "../db/connection.js";

const getAllTipoDispositivos = (req, res) => {
    try {
        conn.query(`SELECT * FROM tipo_dispositivo`, (err, data, fields) => {
            if(err) console.log(err);
            res.send(data);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDispositivos = (req, res) => {
    try {
        conn.query(`SELECT d.id as "serial", d.marca, d.modelo, td.nombre as "tipo dispositivo", a.nombre as "nombre area" FROM tipo_dispositivo td JOIN dispositivo d ON td.id = d.id_tipo_dispositivo JOIN area a ON d.id_area = a.id;`, (err, data, fields) => {
            if(err) console.log(err);
            res.send(data);
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

const addDispositivo = (req, res) => {
    try {
        let databody = req.body;
        let dataArray = [databody.id, databody.marca, databody.modelo, databody.id_tipo_dispositivo, databody.id_area]
        conn.query(`INSERT INTO dispositivo(id, marca, modelo, id_tipo_dispositivo, id_area) VALUES(?, ?, ?, ?, ?)`, dataArray, (err, data, fields) => {
            if(err) console.log(err);
            res.send(data);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const methodsDispositivo = {
    getAllTipoDispositivos,
    getDispositivos,
    addDispositivo
}