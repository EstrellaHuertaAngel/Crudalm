require('dotenv').config(); // Cargar variables de entorno al inicio

const express = require('express');
const { join } = require('path');
const helmet = require('helmet');
const compression = require('compression');
const { engine } = require('express-handlebars');

const app = express();

// Configuración de puerto y vistas
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));

// Configuración de Handlebars
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Configuración de seguridad y rendimiento
app.use(helmet());
app.use(compression());

// Configuración para servir archivos estáticos
app.use(express.static(join(__dirname, 'public')));

// Rutas y lógica de la aplicación
app.get('/', (req, res) => {
    res.render('home');
});

// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
