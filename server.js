const express = require('express');
const app = express();

const PORT = 9000;

app.get('/',(req,res) => {
    res.send("Hello Home Page");
})
app.get('/home',function(req,res){
    res.send("Welcome to my hotel.... How can I help you?");
    
   
})

app.listen(PORT, ()=>{
    console.log(`Server is Listening on PORT ${PORT} : http://localhost:${PORT}`)
});
