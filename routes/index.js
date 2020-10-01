const express = require('express');
const router = express.Router();

const dataInfo = require('../models/schema');

// Muestra el formulario en pantalla
router.get('/', (req, res) => {
    res.render('index');
});
// Envia los datos desde el formulario al cuadro de texto
router.post('/add', async (req, res) => {
    const saveInfo = new dataInfo(req.body);
    await saveInfo.save();
    res.redirect('/datainfo');
});

// Recibe los datos desde el formulario y los muestra en el cuadro de texto
router.get('/datainfo', async (req, res) => {
    const saveInfo_ = await dataInfo.find();
    res.render('data', {
        saveInfo_ 
    });
})

module.exports = router;
