// Assignment code here
function getPassword(){
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";

  var passwordLength = 16;
  var password = "";

  var promptLength = window.prompt('Please type in the length of the password.');
  
  
  for(var i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomNumber, randomNumber+1);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


getPassword();