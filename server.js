const express = require('express');
const app = express();

const PORT = 9000;

app.get('/',(req,res) => {
    res.send("Hello Home Page");
})
app.get('/home',function(req,res){
    res.send("Welcome to my hotel.... How can I help you?");
})


app.get('/idli', (req,res)=>{
    var customized_idli = {
        name: 'rava idli',
        size: '10cm diameter',
        is_sambhar : true,
        is_coconut_chutney: false,
    }
    res.send(customized_idli);
})

app.listen(PORT, ()=>{
    console.log(`Server is Listening on PORT ${PORT} : http://localhost:${PORT}`)
});
