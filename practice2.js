let fs = require('fs');
let os = require('os');


let user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', 'Hello ' + user.username + ' ! \n ', ()=>{
    console.log("File is successfully created!");
})

let hostname = os.hostname();
console.log(hostname);

console.log(os);
console.log(fs);