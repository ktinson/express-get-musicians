// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test('Testing musician endpoint/get', async()=> {
        const response = await request(app).get('/musicians')
        const responseData = await JSON.parse(response.text)
        expect(response.statusCode).toBe(200)
    }) 
    test('Testing musician endpoint/get id', async()=> {
        const response = await request(app).get('/musicians/:id')
        expect(response.statusCode).toBe(200)
    }) 
    test('Testing musician endpoint/put id', async()=> {
        const response = await request(app).put('/musicians/:id')
        const responseData = await JSON.parse(response.text)
        expect(response.statusCode).toBe(200)
    }) 
    test('Testing musician endpoint/post', async()=> {
        const response = await request(app).post('/musicians/')
        const responseData = await JSON.parse(response.text)
        expect(response.statusCode).toBe(200)
    })
    test('Testing musician endpoint/delete id', async()=> {
        const response = await request(app).delete('/musicians/:id')
        const responseData = await JSON.parse(response.text)
        expect(response.statusCode).toBe(200)
    })
})