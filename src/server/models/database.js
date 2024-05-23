const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    ssl: true,
    sslValidate: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error.'));
db.once('open', function(){
    console.log('Connected to MongoDB');
});

require('./Category');
require('./Recipe');
require('./User');
require('./ShoppingList');