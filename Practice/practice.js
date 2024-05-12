//IIFE Function (Immediately Invoked Function Expression)

/*(function(){
    console.log("Hello Yogesh");
})()


function callback(){
    console.log('Yogesh is calling a callback function');
};

const add = function (a,b,callback){
    console.log("Result " + a+b);
    callback();
}

add(2,3,callback)*/

const add = function(a,b,yogesh){
    var result = a+b;
    console.log("result: " + a+b);
    yogesh();
}

add(2,5,() => {
    console.log("Add Completed")
} );
