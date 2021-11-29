// Assignment code here
function generate() {
  var chars = "";
  var password = "";

  var passwordLength = window.prompt(
    "Please type in the length of the password"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    do {
      var passwordLength = window.prompt(
        "Please type in the length of the password that is at least 8 characters and no more than 128 characters."
      );
    } while (passwordLength < 8 || passwordLength > 128);
  }

  do {
    var upperConfirm = window.confirm(
      "Would you like to have uppercase letters in your password?"
    );
    if (upperConfirm) {
      var chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    var lowerConfirm = window.confirm(
      "Would you like to have lowercase letters in your password?"
    );
    if (lowerConfirm) {
      var chars = chars + "abcdefghijklmnopqrstuvwxyz";
    }
    var numberConfirm = window.confirm(
      "Would you like to have numbers in your password?"
    );
    if (numberConfirm) {
      var chars = chars + "0123456789";
    }
    var specialConfirm = window.confirm(
      "Would you like to have special characters in your password?"
    );
    if (specialConfirm) {
      var chars = chars + "!@#$%^&*()_+?><:{}[]";
    }
    if (chars.length <= 0) {
      window.alert("Please choose at least one option");
    }
  } while (chars.length <= 0);

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
