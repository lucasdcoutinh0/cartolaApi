const express = require('express')
const cors = require('cors')
const rodadaRoutes = require('./routes/rodadaRoutes')

const port = process.env.PORT || 3000;


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use('/rodada', rodadaRoutes)

app.listen(port, () => {
    console.log('Listening on port 3000')
})
    