const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    listItems: [String],
    required: false,
  }
);

const todo = mongoose.model('Todo', todoSchema);

module.exports = todo;
