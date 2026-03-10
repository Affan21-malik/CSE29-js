let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))
arr.pop();
console.log(arr);
arr.push(100)
console.log(arr);
arr.push("affan")
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift("sher")
console.log(arr);
delete arr[5]
console.log(arr);
let a=[1,2,3]
let b=[4,5,6]
let c=[7,8,9]
arr=a.concat(b,c)
console.log(arr);
let f=[1,3,2]
f.sort();
console.log(f);


 
 let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2)    
// numbers.splice(1, 3)  
// numbers.splice(1, 3, 222, 333) 
t=numbers.slice(0,1)// 0 sa start 3 tk but 3 nhi hoga print 
s=numbers.slice(3)// 3 sa age sb kuch print
console.log(t);
console.log(s);
r=numbers.reverse()
console.log(r);

