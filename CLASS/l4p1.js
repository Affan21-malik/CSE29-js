const x = document.getElementById("para");
console.log(x);
console.log(x.innerText);


//2nd
const y = document.getElementsByClassName("text");
console.log(y);

// ek-ek element access karna
console.log(y[0].innerText);
console.log(y[1].innerText);

//3rd
const z = document.getElementsByTagName("p");
console.log(z);

console.log(z[0].innerText);
console.log(z[1].innerText);
//4th
// id se select
const a = document.querySelector("#para2");
console.log(a.innerText);

// class se select (sirf first element)
const b = document.querySelector(".text");
console.log(b.innerText);

// tag se select
const c = document.querySelector("p");
console.log(c.innerText);

//5th
const d = document.querySelectorAll(".text");

console.log(d);

// ek-ek access karna
console.log(d[0].innerText);
console.log(d[1].innerText);
console.log(d[2].innerText);