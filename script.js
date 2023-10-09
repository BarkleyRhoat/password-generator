// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// create the function here
// var numOfCharacters = promt("how many characters do you want your password to be?");
numOfCharacters = parseInt(numOfCharacters)

while (passLength < 5 || passLengthength > 20){
  passLength = promt("how many characters do you want your password to be")
}
  

function generatePassword(){
  return Math.floor(math.random()*max);

}
// prompt to get the number of characters in password
var numOfCharacters = promt("how many characters do you want")


// need 4 ifs with 4 confirmExpressionconditionals
var upper = confirm("would you like to use uppercase letters?");
var lowers = confirm("would you like to use lowercase letters?");
var numbers = confirm("would you like to use numbers?");
var symbols = confirm("would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must use atleast one character type");
  uppers = confirm("would you like to use uppercase letters?");
  lowers = confirm("would you like to use lowercase letters?")
  numbers = confirm("would you like to use numbers?");
  symbols = confirm("would you like to use special characters?")
}
// processing...

// return password

//   return "turtle"; // if turtle is a password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


