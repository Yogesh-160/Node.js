const jsonString = '{"name":"Yogesh", "age":"19", "city":"New Delhi"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonString)
console.log(jsonObject.name);


const objectToConvert = {name: "Yogesh", age: "19", city: "New Delhi"};
const jsonStringified = JSON.stringify(objectToConvert);
console.log(jsonStringified);