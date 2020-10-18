// Assignment Code - possibly camelCase var names
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var sChars = ["!", "@", "$", "%", "&"];

var length = parseInt(prompt("How many characters for your password?"))
console.log(typeof length, length)

if (length < 8 || length > 128) {
  alert("Password must be between 8-128 characters. Start over.")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
