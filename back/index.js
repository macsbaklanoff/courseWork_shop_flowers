const express = require('express')
const cors = require('cors')
const {Pool} = require('pg')


const app = express()
const PORT = 3001
const HOST = 'localhost'

app.use(express.json())
app.use(cors())

const connectForFlowers = new Pool({
    user: "postgres",
    host: 'localhost',
    database: 'Flowers',
    password: "181318",
    port: 5432
});


let dataTableFlowers = []
let dataTableRelatedProducts = []

const getTalbeFlowers = async () => {
    dataTableFlowers = await connectForFlowers.query('SELECT * FROM "Букет";')
}

const getTableRelatedProducts = async () => {
    dataTableRelatedProducts = await connectForFlowers.query('SELECT * FROM "Товар";')
}
getTalbeFlowers()
getTableRelatedProducts()

app.get('/getFlowers', (req, res) => {
    res.json(dataTableFlowers.rows)
})

app.get('/getRelatedProducts', (req, res) => {
    res.json(dataTableRelatedProducts.rows)
})

app.listen(PORT, HOST, (error) => {
    if (!error) {
        console.log("server-ok")
    }
})