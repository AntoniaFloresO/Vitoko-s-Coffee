const Venta = require('../models/Venta');
const DetalleVenta = require('../models/DetalleVenta');
const Producto = require('../models/Producto');

const ventaController = {
    // Obtener todas las ventas
    getAll: (req, res) => {
        Venta.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },

    // Obtener una venta por ID
    getById: (req, res) => {
        const { id } = req.params;
        Venta.getById(id, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            if (result.length === 0) return res.status(404).json({ message: 'Venta no encontrada' });
            res.json(result[0]);
        });
    },

    // Crear una nueva venta
    create: (req, res) => {
        const nuevaVenta = req.body; // Se espera id_cliente, fecha
        Venta.create(nuevaVenta, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Venta registrada', id: result.insertId });
        });
    },

    // Consultar ventas x cliente y fecha
    getByClienteYFecha: (req, res) => {
        const { clienteId, fecha } = req.params;

        const query = `
        SELECT 
            v.id_venta AS ventaId,
            d.id_producto AS productoId,
            d.cantidad,
            d.precio * d.cantidad AS subtotal,
            v.fecha
        FROM ventas v
        JOIN detalle_ventas d ON v.id_venta = d.id_venta
        WHERE v.id_cliente = ? AND DATE(v.fecha) = ?
        `;

        Venta.query(query, [clienteId, fecha], (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },

    createCompleta: (req, res) => {
    const { id_cliente, fecha, productos } = req.body;

    if (!id_cliente || !fecha || !Array.isArray(productos) || productos.length === 0) {
        return res.status(400).json({ error: 'Datos incompletos o productos vacíos' });
    }

    // Paso 1: Crear venta
    Venta.create({ id_cliente, fecha }, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al crear venta' });

        const idVenta = result.insertId;

        // Paso 2: Insertar detalles de productos
        DetalleVenta.crear(idVenta, productos, (err) => {
        if (err) return res.status(500).json({ error: 'Error al insertar detalle de venta' });

        // Paso 3: Actualizar stock por cada producto
        const actualizaciones = productos.map(p =>
            new Promise((resolve, reject) => {
            Producto.updateStock(p.id_producto, -p.cantidad, (err) => {
                if (err) reject(err);
                else resolve();
            });
            })
        );

        Promise.all(actualizaciones)
            .then(() => res.status(201).json({ message: 'Venta completa registrada', id_venta: idVenta }))
            .catch(err => res.status(500).json({ error: 'Error al actualizar stock de productos' }));
        });
    });
    }
};

module.exports = ventaController;
