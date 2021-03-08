// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var password = "";

var generatePassword = function() {
   password = "";

  var lengthPassword = passwordLength();

  var passwordInclusions = charaInclusions();
  var passwordInclusionsLength = passwordInclusions.length;

  for (var i = 0; i < lengthPassword; i++) {
    password += passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusionsLength));
  }

  return password;
};

var passwordLength = function() {
  var lengthPass = prompt("Enter Desired Length of New Password. Must Be Between 8 and 128 Characters Long.");

  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert("Invalid Length Entry. Length Must Be Between 8 and 128 Characters Long.")
    return passwordLength;
  }

  lengthPass = Math.floor(Number(lengthPass));

  return lengthPass;
}

var charaInclusions = function() {
  var passwordInclusions = "";

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChara = "~`!@#$%^&*+<?/;:(=)|{";

  var confirmLower = confirm("Include Lower Case Characters?");
  var confirmUpper = confirm("Include Upper Case Characters");
  var confirmNumber = confirm("Inlcude Numbers?");
  var confirmSpecial = confirm("Include Special Characters?");

  if (confirmLower == true) {
    passwordInclusions += lowerCase;
  }
  if (confirmUpper == true) {
    passwordInclusions += upperCase;
  }
  if (confirmNumber == true) {
    passwordInclusions += numbers;
  }
  if (confirmSpecial == true) {
    passwordInclusions += specialChara;
  }

  return passwordInclusions;
}



