const mongoose = require('mongoose')

const Schema = mongoose.Schema


 const reponseAuQuestionnaireSchema = new mongoose.Schema({
    Réponse_à_la_question: {
      type: String,
      required: true,
    },
    Score_attribué_à_la_réponse: {
      type: Number,
      required: true,
    },
    Commentaires_sur_la_réponse: {
      type: String,
      required: true,
    },
      ID_Questionnaire: {
        type: Schema.Types.ObjectId,
        ref: 'Questionnaire', 
        required: true
      },
      ID_Question: {
        type: Schema.Types.ObjectId,
        ref: 'Question', 
        required: true
      },
    }); 
const ReponseAuQuestionnaire = mongoose.model('ReponseAuQuestionnaire', reponseAuQuestionnaireSchema);
module.exports = ReponseAuQuestionnaire;
