// menu.js

const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },

  price: {
    type: Number,
    required: true,
    
  },

  drink: {
    type: Boolean,
    required: true   // true = drink, false = food
  },

  ingredients: {
    type: [String],   // Array of ingredient names
  default:[]
  },

  num_sales: {
    type: Number,
    default: 0,
    
  },

  taste: {
    type: String,
    enum: ["Sweet", "Spicy", "Salty", "Sour", "Bitter", "Umami"],
    required: true
  }
});

const MenuItem =mongoose.model('MenuItem',menuSchema);
module.exports =MenuItem;
