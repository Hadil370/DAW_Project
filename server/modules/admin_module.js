const mongoose = require('mongoose')

const Schema = mongoose.Schema

 const adminSchema = new mongoose.Schema({
    role: {
      type: String,
      required: true,
    },
    autorisations:{
           type: [String],
           default:[],
    } ,
   
    ID_Utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
  });
  
  

  const Admin = mongoose.model('Admin', adminSchema);
  module.exports =Admin;
