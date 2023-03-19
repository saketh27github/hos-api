const mongoose = require('mongoose');
require('dotenv').config();

let DB_URL = process.env. DB_URL


//connect to DB
mongoose.connect( DB_URL || 'mongodb://localhost/Hospital_API', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});