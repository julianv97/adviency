const mongoose = require('mongoose');
const { Schema } = mongoose;

const GiftSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Gift', GiftSchema);
