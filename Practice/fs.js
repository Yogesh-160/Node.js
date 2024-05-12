let fs = require('fs');

fs.appendFile('yogesh.txt', "Hello !", () => {
    console.log("Success");
})