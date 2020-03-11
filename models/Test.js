const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  title: String,
  description: String,
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  result: Number
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;