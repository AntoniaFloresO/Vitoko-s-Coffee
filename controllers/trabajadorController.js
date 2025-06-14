const Trabajador = require('../models/Trabajador');

const trabajadorController = {
    getAll: (req, res) => {
        Trabajador.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },

    getById: (req, res) => {
        const { id } = req.params;
        Trabajador.getById(id, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.length === 0) return res.status(404).json({ message: 'Trabajador no encontrado' });
            res.json(results[0]);
        });
    },

    create: (req, res) => {
        const trabajador = req.body;
        Trabajador.create(trabajador, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Trabajador creado', id: result.insertId });
        });
    },

    update: (req, res) => {
        const { id } = req.params;
        const trabajador = req.body;
        Trabajador.update(id, trabajador, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Trabajador actualizado' });
        });
    },

    delete: (req, res) => {
        const { id } = req.params;
        Trabajador.delete(id, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Trabajador desactivado' });
        });
    }
};

module.exports = trabajadorController;
