const express = require('express')
const cors = require('cors')
const {Pool} = require('pg')
const go_to_db  = require('./go_to_db_dir/go_to_db')


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



app.get('/getFlowers', (req, res) => {
    getTalbeFlowers()
    res.json(dataTableFlowers.rows)
})

app.get('/getRelatedProducts', (req, res) => {
    getTableRelatedProducts()
    res.json(dataTableRelatedProducts.rows)
})


app.post('/postOrder', (req, res) => {
    res.json('ok')
    go_to_db.go_to_db(req.body.order, connectForFlowers);
})

app.listen(PORT, HOST, (error) => {
    if (!error) {
        console.log("server-ok")
    }
})