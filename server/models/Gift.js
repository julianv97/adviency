const mongoose = require('mongoose');
const { Schema } = mongoose;

const GiftSchema = new Schema({
  name: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Gift', GiftSchema);
