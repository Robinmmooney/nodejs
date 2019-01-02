var events = require('events');
var util = require('util');

var Person = function(name){
this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg); 

    });

});

james.emit('speak' , 'hey Dudes');
ryu.emit('speak' , 'I want a curry');





//var stuff = require("./stuff");
//
//console.log(stuff.counter(['Shaun', 'Crystal', 'Ryu']));
//console.log(stuff.adder(5,6));
//console.log(stuff.adder(stuff.pi,5));



//var counter = function(arr){
//    return 'there are ' + arr.length + ' elements in this array';
//}
//console.log(counter(['Shaun', 'Crystal', 'Ryu']));
//
//module.exports = counter;





//var counter = function(arr){
    return 'there are ' + arr.length + ' elements in this array';
}
//console.log(counter(['Shaun', 'Crystal', 'Ryu']));
//
//module.exports = counter;





//function callFunction(fun){
////    fun();
////}


// normal function statement
//function sayHi(){
//    console.log('hi');
//    
//}
//
//sayHi();

//function expression
////var sayBye = function(){
////    console.log('Bye');
////};

////callFunction(sayBye);


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