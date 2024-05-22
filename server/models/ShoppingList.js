const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
  user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
     required: true
    },
  items: [
    {
      recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe', required: true
    },
      quantity: {
            type: Number,
            required: true

        }
    }
  ],
  dateCreated: { type: Date, default: Date.now }
});

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);
module.exports = ShoppingList;
