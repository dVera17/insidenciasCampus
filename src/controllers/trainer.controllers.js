import conn from "../db/connection.js";

const getDataTrainers = (req, res) => {
    try {
        conn.query(`SELECT t.cedula, t.nombre, dc.email_personal as "email personal", dc.email_corp as "email corporativo", dc.telef_residencia as "telefono de residencia", dc.telef_empresa as "telefono empresarial", dc.telef_movil_empre as "telefono movil empresarial" FROM trainer t JOIN datos_contacto dc ON t.cedula = dc.cedula_trainer;`, (err, data, field) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error al obtener los datos');
            };
            res.send(data);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDataTrainer = (req, res) => {
    try {
        conn.query(`SELECT t.cedula, t.nombre, dc.email_personal as "email personal", dc.email_corp as "email corporativo", dc.telef_residencia as "telefono de residencia", dc.telef_empresa as "telefono empresarial", dc.telef_movil_empre as "telefono movil empresarial" FROM trainer t JOIN datos_contacto dc ON t.cedula = dc.cedula_trainer WHERE t.cedula = ${req.params.cedula};`, (err, data, field) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error al obtener los datos');
            };
            res.send(data);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const addTrainer = (req, res) => {
    try {
        let databody = req.body;
        let dataArray = [databody.cedula, databody.nombre]
        conn.query(`INSERT INTO trainer(cedula, nombre) VALUES(?, ?)`, dataArray, (err, data, fields) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error al agregar un Trainer');
            };

            let dataArrayContact = [databody.email_personal, databody.email_corp, databody.telef_residencia, databody.telef_empresa, databody.telef_movil_empre]
            conn.query(`INSERT INTO datos_contacto(email_personal, email_corp, telef_residencia, telef_empresa, telef_movil_empre, cedula_trainer) VALUES(?, ?, ?, ?, ?, ${databody.cedula})`, dataArrayContact, (err, data, fields) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Error al agregar los datos de contacto del trainer');
                };
                res.send(data);
            });
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const methodsTrainer = {
    addTrainer,
    getDataTrainers,
    getDataTrainer
}