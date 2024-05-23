const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
  user: {
     type: String,
     required: true,
     unique: true
    },
  items: [
    {
      recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
      },
      ingredient: {
        type: String,
        required: true
    },
      quantity: {
            type: Number,
            required: true

        }
    }
  ],
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ShoppingList', shoppingListSchema);
