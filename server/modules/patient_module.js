const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new mongoose.Schema({
    ID_Utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
    niveauAddiction: {
      type: String,
      required: true,
    },
    moyenneHeuresJeuParSemaine: {
      type: Number,
      required: true,
    },
    moyenneMoisJeu: {
      type: Number,
      required: true,
    },
    scoreInsomnie: {
      type: Number,
      required: true,
    },
      
    scoreSomnolenceExcessive: {
      type: Number,
      required: true,
    },
    scoreAnxiete: {
      type: Number,
      required: true,
    },
    scoreDepression: {
      type: Number,
      required: true,
    }
   
  });
   const Patient = mongoose.model('Patient', patientSchema);
module.exports =Patient;
