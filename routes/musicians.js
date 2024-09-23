const express = require("express");
const router = express.Router()
const syncSeed = require('../seed')
const { Musician } = require("../models/index")
const app = require("../src/app");

const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');
router.get('/', async (req, res) =>{
    let result = await Musician.findAll()
    res.json(result)
})
router.post('/', async (req, res) =>{
    let result = await Musician.create(req.body)
    res.json(result)
})
router.put('/', async (req, res) =>{
    let result = await Musician.update(req.body,{where:{id :req.params.id}})
    res.json(result)
})
router.get('/:id', async(req, res) =>{
    let result = await Musician.findByPk(req.params.id)
    res.json(result)
})
router.delete('/:id', async(req, res) =>{
    let result = await Musician.destroy({where:{id:req.params.id}})
    res.json(result)
})
module.exports = router