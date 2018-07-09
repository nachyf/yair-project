const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Games
let Yair = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  people: {
      type:Number
  },
},{
    collection: 'yair'
});

module.exports = mongoose.model('Yair', Yair);
