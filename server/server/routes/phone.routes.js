const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Phones = require('../data/phones.json')



router.get('/', (req, res, next) => {
    res.json(Phones)
})

router.get('/:id', (req, res, next) => {
    const  phoneId  = req.params.id

    res.json(Phones[phoneId])
})


module.exports = router;