
// // normal function
// function add(a, b) {
//     console.log(a + b);
// }

// add(10, 20);

// // arrow function
// var add2 = (a, b) => {
//     console.log(a + b);
// };

// add2(102, 20);

// // arrow function for single line
// var add3 = (a, b) => console.log(a + b);

// add3(30, 20);

// //
var person = {
    name: "John Mac",
    age: 30,
    isMarried: true,
    address: {
        street: "Vinay Nagar",
        flatNo: 201
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person.address.street);
console.log(person.address.flatNo);

////
var person2 = new Object();

person2.name = "Krishnakant";   // add property
person2.age = 32;
person2.isMarried = true;

person2.address = {};
person2.address.street = "Nagar Road";
person2.address["flatNo"] = 33;

console.log(person2);
//second method
console.log(person2.name);
console.log(person2.age);
console.log(person2.isMarried);
console.log(person2.address.street);
console.log(person2.address.flatNo);


////
var person = {
    name: "John Mac",
    age: 30,
    isMarried: true,
    child: ["Cheeku"],

    getInfo: function () {
        return this.name + " " + this.age;
    },

    address: {
        street: "Vinay Nagar",
        flatNo: 20
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person.child[0]);
console.log(person.getInfo());
console.log(person.address.street);
console.log(person.address.flatNo);
////


// create array using constructor
var myInfo = new Array();

// create array using Array()
var myInfo1 = Array();
console.log(myInfo);
console.log(myInfo1);