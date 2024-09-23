const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/musicians', async (req, res) => {
    let result = await Musician.findAll()
    res.json(result)
})
app.get('/musicians/:id', async (req, res) => {
    let result = await Musician.findByPk(req.params.id)
    res.json(result)
})

app.post('/musicians/', async (req, res) => {
    let result = await Musician.create(req.body)
    res.json(result)
})
app.put('/musicians/:id', async (req, res) => {

    let result = await Musician.update(req.body,{where:{id :req.params.id}})
    res.json(result)
})

app.delete('/musicians/:id', async (req, res) => {
    let result = await Musician.destroy({where:{id:req.params.id}})
    res.json(result)
})





module.exports = app;