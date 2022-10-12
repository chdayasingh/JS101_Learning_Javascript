// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let uName = "admin";
let pass = "123456";

if(uName == "admin"){
  if(pass == "123456"){
    console.log("Login Successfull");
  }
  else{
    console.log("Password is incorrect");
  }
}
else{
  console.log("User not found");
}