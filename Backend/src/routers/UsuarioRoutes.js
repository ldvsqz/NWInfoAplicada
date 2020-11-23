const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuarioController');

router.post('/login', controller.login);
router.get('/getAll', controller.getAll);
//router.post('/delete', controller.delete);
//router.post('/modify', controller.modify);
module.exports = router; 