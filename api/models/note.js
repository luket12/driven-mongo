const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Note = new mongoose.model('Note', noteSchema);

module.exports = Note;
