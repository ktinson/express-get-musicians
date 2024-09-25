const express = require("express");
const routerB = express.Router()
const { Musician, Band } = require("../models/index")
const {check, validationResult} = require('express-validator')
routerB.get('/', async (req, res) => {
    let result = await Band.findAll({include: Musician})
    res.json(result)
})
routerB.get('/:id', async (req, res) => {
    let result = await Band.findByPk(req.params.id, {include: Musician})
    res.json(result)
})
module.exports = routerB