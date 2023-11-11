const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

let Utilisateur = require('./modules/utilisateur_module')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const URL_DB = process.env.ATLAS_URL
mongoose.connect(URL_DB)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB databases connection established successfully')
})


app.post('/add', (req, res) => {
    const nom = req.body.nom
    const prenom = req.body.prenom
    const genre = req.body.genre
    const dateNaissance = req.body.dateNaissance
    const email = req.body.email  
    const motPasse = req.body.motPasse  

    const newone = new Utilisateur({
        nom,
        prenom,
        genre,
        dateNaissance,
        email,
        motPasse,
    })
    newone.save()
        .then(() => { res.json('adddddddd') })
        .catch(() => { res.json('noooooooooo') })
})



app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`)
})  