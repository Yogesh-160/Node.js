const mongoose = require('mongoose')

//Define the mongodb connection url

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB server");
})
db.on('error', (err) => {
    console.log("Connected to MongoDB server Error ", err);
})
db.on('disconnected', () => {
    console.log("Disconnected to MongoDB server");
})

module.exports = db;