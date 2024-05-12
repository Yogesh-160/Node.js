const express = require('express');
const app = express();
const db = require('./db')

const PORT = 9000;


app.get('/', (req,res) => {
    res.send("Welcome to my Home page")
})

app.listen(PORT, ()=>{
    console.log(`Server is Listening on PORT ${PORT} : http://localhost:${PORT}`)
});
