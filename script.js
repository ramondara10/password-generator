// Welcome
alert("Hello, let me help you with your password");

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var index = Math.floor(Math.random() * generateBtn.length);

// content selection

var specialChoices = "!@#$%^&*?-";
var numberChoices = "1234567890";
var uppercaseChoices = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChoices = "abcdefghijklmnopqrstuvwxyz";
var password = " ";


// Write password to the #password input
function writePassword() {
  var userinputLength = prompt("Please select a number between 8 and 128");
  var userinputSpecial = confirm("Would like to use special characters?");
  var userinputUppercase = confirm("Would like to use uppercase?");
  var userinputLowercase = confirm("Would like to use lowercase?");
  var userinputNumbers = confirm("Would like to use numbers?");

  // Confirm selection

  var userinputSpecialT = userinputSpecial === true;
  var userinputSpecialF = userinputSpecial === false;

  var userinputUppercaseT = userinputUppercase === true;
  var userinputUppercaseF = userinputUppercase === false;

  var userinputLowercaseT = userinputLowercase === true;
  var userinputLowercaseF = userinputLowercase === false;

  var userinputNumbersT = userinputNumbers === true;
  var userinputNumbersF = userinputNumbers === false;

  //validating user number
  if (isNaN(userinputLength) === true) {
    alert("You must input a number");
    return;
  } else if (userinputLength < 8 || userinputLength > 128) {
    alert("Your password must be at least 8 characters and less than 128 characters");
    return;
  }

  // user selection are all "no"

  if (userinputSpecialF && userinputUppercaseF && userinputLowercaseF && userinputNumbersF) {
    alert("Please select at least one of the options");
    return;
  }



  //user selection are all "yes"

  if (userinputSpecialT && userinputUppercaseT && userinputLowercaseT && userinputNumbersT) {
    var userSel = specialChoices + uppercaseChoices + lowercaseChoices + numberChoices;

    for (var i = 0; i < userinputLength; i++) {
      password += userSel[Math.floor(Math.random() * userSel.length)];
    }

    passwordText.value = password;
    console.log("Your password is: " + password);
    return password;
  }

  // user selection 3 out of 4 options
    // no numbers
  if (userinputSpecialT && userinputUppercaseT && userinputLowercaseT && userinputNumbersF) {
    var userSel = specialChoices + uppercaseChoices + lowercaseChoices;

    for (var i = 0; i < userinputLength; i++) {
      password += userSel[Math.floor(Math.random() * userSel.length)];
    }

    passwordText.value = password;
    console.log("Your password is: " + password);
    return password;
  }

    // no lowercase
    if (userinputSpecialT && userinputUppercaseT && userinputLowercaseF && userinputNumbersT) {
      var userSel = specialChoices + uppercaseChoices + numberChoices;
  
      for (var i = 0; i < userinputLength; i++) {
        password += userSel[Math.floor(Math.random() * userSel.length)];
      }
  
      passwordText.value = password;
      console.log("Your password is: " + password);
      return password;
    }

    // no uppercase
    if (userinputSpecialT && userinputUppercaseF && userinputLowercaseT && userinputNumbersT) {
      var userSel = specialChoices + lowercaseChoices + numberChoices;
  
      for (var i = 0; i < userinputLength; i++) {
        password += userSel[Math.floor(Math.random() * userSel.length)];
      }
  
      passwordText.value = password;
      console.log("Your password is: " + password);
      return password;
    }

    // no special
    if (userinputSpecialF && userinputUppercaseT && userinputLowercaseT && userinputNumbersT) {
      var userSel = uppercaseChoices + lowercaseChoices + numberChoices;
  
      for (var i = 0; i < userinputLength; i++) {
        password += userSel[Math.floor(Math.random() * userSel.length)];
      }
  
      passwordText.value = password;
      console.log("Your password is: " + password);
      return password;
    }
  
  //


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("Would like a new password?")

//alert("Thank you, let me know if I can help with your passwords");
