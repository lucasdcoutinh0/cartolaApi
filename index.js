const express = require('express')
const mongoose = require('mongoose')
const playerRoutes = require('./routes/playerRoutes')
require('dotenv').config()


const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use('/players-stats', playerRoutes)

mongoose
    .connect(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cartolaapi.f1yex.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conected')
        app.listen(3000)
    } )
    .catch((error) => console.log(error))
