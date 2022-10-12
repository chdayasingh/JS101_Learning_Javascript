// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let i = 0;
let n = 100;

let sum = 0;
let count = 0;

while(i <= 100){
  if(n % 2 == 0){
    sum += i;
    count++;
  }
  i++;
}

console.log(sum/count);