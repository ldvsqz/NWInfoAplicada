const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const app = express();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// Routes
app.get("/", (req, res) => {
    res.json({ message: "Esta es una api en NodeJS" });
});
app.use(require("./src/routers/UsuarioRoutes"));
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});