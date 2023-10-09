// Assignment Code

// prompt to get the number of characters in password

var generateBtn = document.querySelector("#generate");
var numOfCharacters = prompt("how many characters do you want your password to be?")

var uppers = confirm("would you like to use uppercase letters?");
var lowers = confirm("would you like to use lowercase letters?");
var numbers = confirm("would you like to use numbers?");
var symbols = confirm("would you like to use special characters?");

 if (!uppers && !lowers && !numbers && !symbols) {
  alert ("You must use atleast one character type");
  uppers = confirm("would you like to use uppercase letters?");
  lowers = confirm("would you like to use lowercase letters?")
  numbers = confirm("would you like to use numbers?");
  symbols = confirm("would you like to use special characters?")
}

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "@#$%^&*()_+~|}{[]<>/-=";

var allCharacters = upperCase + lowerCase + number + symbol;

function generatePassword(){
  var password = ""
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  for (var numOfCharacters = 0; i < password.length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
}


// numOfCharacters = parseInt(numOfCharacters)

while (passLength < 5 || passLengthength > 20){
  passLength = promt("how many characters do you want your password to be")
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


