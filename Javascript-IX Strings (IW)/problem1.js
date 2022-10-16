// Problem 1 : Given a string count the number of words in that string

let str = "I am learning JavaScript";
let wordCount = 0;

for(let i=0; i<str.length; i++){
  if(str[i] == " "){
    wordCount++;
  }
}
if(str.length != 0){
  console.log(++wordCount);
} else{
  console.log(++wordCount);
}
