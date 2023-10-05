// Assignment Code
var generateBtn = document.querySelector("#generate");


//Defines the character options to be used in the password
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_-+=<>?"

//randomizes the characters
function randomCharacter(charOption) {
  var randomIndex = Math.floor(Math.random() * charOption.length);
  return charOption.charAt(randomIndex);
}
//function to write the password
function generatePassword(){

  //prompts for length, alerts and prevents from continuing if the number is too short or too long
  var length = prompt("Enter password length \n(between 8 and 128 characters)");
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Please enter valid length. \n(between 8 and 128)")
    return;
  }

  //asks whether to use any of these options
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumber = confirm("Include numbers?");
  var useSpecial = confirm("Include special characters?");

  //if no options were selected then alert happens and generater stops
  if (!useLowercase && !useUppercase && !useNumber && !useSpecial) {
    alert("Please select atleast one of the options");
    return;
  }

  //sets the character options based on the users selection
  var charOption = ""
  if (useLowercase){
  charOption += lowercaseChar;
  }
  if (useUppercase){
  charOption += uppercaseChar;
  }
  if (useNumber){
  charOption += numbers;
  }
  if (useSpecial){
  charOption += specialChar;
  }

  //creates the password based on the inputed length
  var password = "";
  for (var i = 0; i < length; i++){
    password += randomCharacter(charOption);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
