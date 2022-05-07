const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: String,
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);