const express = require('express')
const cors = require('cors')
const rodadaRoutes = require('./routes/rodadaRoutes')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use('/rodada', rodadaRoutes)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
