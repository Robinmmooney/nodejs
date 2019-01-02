var counter = function(arr){
    return 'there are ' + arr.length + ' elements in this array';
}
console.log(counter(['Shaun', 'Crystal', 'Ryu']));

module.exports = counter;





//function callFunction(fun){
//    fun();
//}


// normal function statement
//function sayHi(){
//    console.log('hi');
//    
//}
//
//sayHi();

//function expression
//var sayBye = function(){
//    console.log('Bye');
//};

//callFunction(sayBye);


//console.log(__dirname);
//console.log(__filename);



// var time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if(time > 5){
//         clearInterval(timer);
//     }
// }, 2000);