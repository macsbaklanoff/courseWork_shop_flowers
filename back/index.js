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


let dataTable = []
const getTalbeFlowers = async () => {
    dataTable = await connectForFlowers.query('SELECT * FROM "Букет";')
}
getTalbeFlowers()
app.get('/get', (req, res) => {
    res.json(dataTable.rows)
})

app.listen(PORT, HOST, (error) => {
    if (!error) {
        console.log("server-ok")
    }
})