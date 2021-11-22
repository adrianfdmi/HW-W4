// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalYes = "";

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  
  var capitalYes = prompt ("Do you want Capital Letters in your password? y/n");

  if (capitalYes === "y") {
    var CYN = 1
  }
  else { var CYN = 0 }

  var numberYes = prompt ("Do you want numbers in your password? y/n");

  if (numberYes === "y") {
    var NYN = 1
  }
  else { var NYN = 0 }

  var specialYes = prompt ("Do you want special characters in your password? y/n");

  if (specialYes === "y") {
    var SYN = 1
  }

  else { var SYN = 0 }

  var passwordLength = prompt ("How long do you want your password to be? Min 8, Max 16");

  if (passwordLength < 8 || passwordLength > 16) {
    alert("Wrong input, I will create it of 8");
    passwordLength = 8;}

  var keyListAlpha="abcdefghijklmnopqrstuvwxyz";
  var keyListCapital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var keyListInt="0123456789";
  var keyListSpec="/&%$!@#_";
  
    for (i=0;i<(passwordLength - CYN - NYN - SYN);i++)
        password+=keyListAlpha.charAt(Math.floor(Math.random()*keyListAlpha.length));
    
    for (i=0;i<CYN;i++)
        password+=keyListCapital.charAt(Math.floor(Math.random()*keyListSpec.length));
    
    for (i=0;i<NYN;i++)
        password+=keyListInt.charAt(Math.floor(Math.random()*keyListInt.length));
    
    for (i=0;i<SYN;i++)
        password+=keyListSpec.charAt(Math.floor(Math.random()*keyListInt.length));
    
    return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);