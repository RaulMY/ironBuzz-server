const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: String,
  description: String,
  options: [String],
  correctAnswer: String
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;