const express = require('express')
const app = express()
const port = 8080
// respond with "hello world" when a GET request is made to the homepage

const bodyParse = require('body-parser')
const mydb = require('./Config/db')
const route = require('./Routes/movie')
//const { readdirSync } = require('fs')

app.use(bodyParse.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParse.urlencoded({ extended: true }));
// simple route
app.use(route)
// Route 1
// app.get('/product', (req, res) => {
//     res.send('Hello Endpoint 555')
// })

// Route 2
// app.use('/api', productRouters)
// app.use('/api', authRouters)

// Route 3
//readdirSync('./Routes').map((r) => app.use('/api', require('./Routes/' + r)))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})