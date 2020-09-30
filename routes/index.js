const express = require('express');
const router = express.Router();

const dataInfo = require('../models/schema');

router.get('/', async (req, res) => {
    const saveInfo_ = await dataInfo.find();
    res.render('data', {
        saveInfo_ 
    });
});


router.post('/add', async (req, res) => {
    const saveInfo = new dataInfo(req.body);
    await saveInfo.save();
    res.send('received')
})

module.exports = router;
