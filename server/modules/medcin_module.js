const mongoose = require('mongoose')

const Schema = mongoose.Schema


const medecinSchema = new mongoose.Schema({
    specialite: {
      type: String,
      required: true,
    },
    sessionsTherapiePlanifiees: {
      type: Number,
      required: true,
    },
    
    ID_Utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
  });
   const Medecin = mongoose.model('Medecin', medecinSchema);
module.exports =Medecin;
