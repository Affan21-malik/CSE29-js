const person = {
    fname: "afan",
    lname: "malik",
    age: 18
}

for (let x in person) {
    console.log("person details : " + x + " : " + person[x]);
}
var age = 20;

if(age > 18){
    console.log("<b>You are eligible to cast the vote</b>");
}
//let age = 20

if (age >= 18) {
    console.log("You are an adult");
}
else {
    console.log("You are a minor");
}
/*
var grade = 'A';

console.log("Entering switch block");

switch(grade){

case 'A':
    console.log("Excellent");
    break;

case 'B':
    console.log("Good");
    break;

case 'C':
    console.log("Passed");
    break;

default:
    console.log("Invalid grade");

}
*/
/* 
var grade = 'A';

document.write("Entering switch block <br/>");

switch (grade) {

case 'A':
    document.write("Good job <br/>");
    break;

case 'B':
    document.write("Pretty good <br/>");
    break;

case 'C':
    document.write("Passed <br/>");
    break;

case 'D':
    document.write("Not so good <br/>");
    break;

case 'F':
    document.write("Failed <br/>");
    break;

default:
    document.write("Unknown grade <br/>");

}

document.write("Exiting switch block");
*/
function mul(x, y){
    return x * y;
}

var res = mul(12, 30);

console.log(res);