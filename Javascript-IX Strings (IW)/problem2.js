// Problem 2 : Given an array of string count the overall total number of characters

let names = ["Aman","Rahul","Ajay","Vijay"];
let count = 0;

for(let i=0; i<names.length; i++){
  count += names[i].length;
}
console.log(count);