const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UtilisateurSchema = new Schema({

    nom: {
        type: String,
        required: true,
        trim: true,
    },
    prenom: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        require: true,
        trim: true
    },
    dateNaissance: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    motPasse: {
        type: String,
        require: true,
        trim: true
    }
},
    {
        timestamps: true
    }
)


  
  const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

    
      module.exports =Utilisateur;
    
