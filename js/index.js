const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


// Registrar un nuevo cliente
app.post('/clientes/registrar', (req, res) => {
    const { nombre, direccion, telefono, email } = req.body;
    const sql = 'INSERT INTO clientes (nombre, direccion, telefono, email) VALUES (?, ?, ?, ?)';
    connection.query(sql, [nombre, direccion, telefono, email], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Cliente registrado exitosamente');
    });
});


// Registrar un nuevo libro
app.post('/libros/registrar', (req, res) => {
    const { titulo, autor, isbn, categoria, cantidad } = req.body;
    const sql = 'INSERT INTO libros (titulo, autor, isbn, categoria, cantidad) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [titulo, autor, isbn, categoria, cantidad], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Libro registrado exitosamente');
    });
});

// Registrar un nuevo préstamo
app.post('/prestamos/registrar', (req, res) => {
    const { cliente_id, libro_id, fecha_prestamo } = req.body;
    const sql = 'INSERT INTO prestamos (cliente_id, libro_id, fecha_prestamo) VALUES (?, ?, ?)';
    connection.query(sql, [cliente_id, libro_id, fecha_prestamo], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Préstamo registrado exitosamente');
    });
});

// Devolver un libro
app.post('/prestamos/devolver', (req, res) => {
    const { prestamo_id, fecha_devolucion } = req.body;
    const sql = 'UPDATE prestamos SET fecha_devolucion = ? WHERE id = ?';
    connection.query(sql, [fecha_devolucion, prestamo_id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Libro devuelto exitosamente');
    });
});

// Obtener todos los clientes
app.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM clientes';
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Obtener todos los libros
app.get('/libros', (req, res) => {
    const sql = 'SELECT * FROM libros';
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Obtener todos los préstamos
app.get('/prestamos', (req, res) => {
    const sql = `
        SELECT 
            prestamos.id,
            clientes.nombre AS cliente_nombre,
            libros.titulo AS libro_titulo,
            prestamos.fecha_prestamo,
            prestamos.fecha_devolucion
        FROM prestamos
        JOIN clientes ON prestamos.cliente_id = clientes.id
        JOIN libros ON prestamos.libro_id = libros.id
    `;
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});


// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
