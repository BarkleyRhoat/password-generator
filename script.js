// Assignment Code

// prompt to get the number of characters in password

var generateBtn = document.querySelector("#generate");
var numOfCharacters = () => {
  var length = window.prompt("how many characters do you want your password to be?")
  var min = 8;
  var max = 50;
  if (parseInt(length) && (length >= min && length <= max)) {
    return parseInt(length);
  }
  return numOfCharacters();
}



var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ['@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '+', '~', '|', '}', '{', '[', ']', '<', '>', '/', '-', '='];

var allCharacters = upperCase + lowerCase + number + symbol;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  

}

function generatePassword() {
  var charLength = numOfCharacters();
  var uppers = window.confirm("would you like to use uppercase letters?");
var lowers = window.confirm("would you like to use lowercase letters?");
var numbers = window.confirm("would you like to use numbers?");
var symbols = window.confirm("would you like to use special characters?");

if (!uppers && !lowers && !numbers && !symbols) {
  alert("You must use atleast one character type");
  uppers = window.confirm("would you like to use uppercase letters?");
  lowers = window.confirm("would you like to use lowercase letters?")
  numbers = window.confirm("would you like to use numbers?");
  symbols = window.confirm("would you like to use special characters?")
}
  console.log(charLength) 
  var password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  for (var i = 0; i < charLength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  return password;
}
generateBtn.addEventListener("click", writePassword);
