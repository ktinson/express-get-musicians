const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")
const router = require('../routes/musicians')
const routerB = require('../routes/bands')

const port = 3001;

//TODO: Create a GET /musicians route to return all musicians 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/musicians', router)
app.use('/bands', routerB)
// app.get('/musicians', async (req, res) => {
//     let result = await Musician.findAll()
//     res.json(result)
// })
// app.get('/musicians/:id', async (req, res) => {
    
// })

// app.post('/musicians/', async (req, res) => {
//     let result = await Musician.create(req.body)
//     res.json(result)
// })
// app.put('/musicians/:id', async (req, res) => {

//     let result = await Musician.update(req.body,{where:{id :req.params.id}})
//     res.json(result)
// })

// app.delete('/musicians/:id', async (req, res) => {
//     let result = await Musician.destroy({where:{id:req.params.id}})
//     res.json(result)
// })



module.exports = app;