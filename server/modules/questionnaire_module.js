const mongoose = require('mongoose')

const Schema = mongoose.Schema
const questionnaireSchema = new mongoose.Schema({
    ID_Questionnaire: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    ID_Patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    dateDuQuestionnaire: {
      type: Date,
      required: true,
    },
   
  });
  
  const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);
  
  module.exports = Questionnaire;
