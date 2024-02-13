// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  
  // Define character pools
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+/?";

  // Ask for length of password
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  
  // Validate length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return ""; // Return empty string if validation fails
  }
  
  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  
  // Validate at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("At least one character type must be selected.");
    return ""; // Return empty string if validation fails
  }

  // Create character pool based on selected criteria
  var charPool = "";
  if (includeLowercase) charPool += lowercaseChars;
  if (includeUppercase) charPool += uppercaseChars;
  if (includeNumeric) charPool += numericChars;
  if (includeSpecial) charPool += specialChars;
  
  // Generate password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }

  return password; // Return generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
