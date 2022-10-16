// Problem 2: Print Prime Numbers from 1 to given limit

let n = 50;

for(let i=2; i<=n; i++){
  let count = 0;
  for(let j=2; j<i; j++){
    if(i%j == 0){
      count++;
      break;
    }
  }
  if(count == 0){
    console.log(i);
  }
}
