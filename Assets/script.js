// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var sChars = ["!", "@", "$", "%", "&"];

var characters = [];

//User is prompted for the length of their password
var length = parseInt(prompt("How many characters for your password?"))

//Prevents user from moving forward if password is not between 8-128 characters
if (length < 8 || length > 128 || isNaN(length)) {
  alert("Start over.");
}
//Asks user to confirm the characters the password should contain
var lowercaseY = confirm("Should your password contain lowercase letters?");
var uppercaseY = confirm("Should your password contain uppercase letters?");
var numY = confirm("Should your password contain numbers?");
var sCharsY = confirm("Should your password contain special characters?");

if (lowercaseY) characters.push(lowercase)
if (uppercaseY) characters.push(uppercase)
if (numY) characters.push(num)
if (sCharsY) characters.push(sChars)

var pw = ""

while (pw.length < length) {
  for (let i = 0; i < characters.length; i++) {
    let rand = Math.floor(Math.random() * characters[i].length)
    pw += characters[i][rand]
  }
}
console.log(pw)

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

