// Assignment Code

//create global variables for arrays for each char type.
var length = 0;
var ifLowerCase = " ";
var ifUpperCase = " ";
var ifNumeric = " ";
var ifSpecial = " ";
var ifSelected = 0;
var chars ="";




var generateBtn = document.querySelector("#generate");

function generatePassword () {
 var data = askForOptions()
 
 
 //math.random to select random index from the total array.
  return data
                               }
function askForOptions (){
  var passlength = parseInt(window.prompt("how long would you like your password"));
  console.log(passlength)
  if (passlength<8 || passlength> 128 || isNaN(passlength)){
    alert("password length is not valid");
     return askForOptions()
      }

  var passwordLowerCase = window.prompt("Type Yes for lowercase or NO for no lowercase.");

  if (!passwordLowerCase) {
    return;
      }

passwordLowerCase = passwordLowerCase.toUpperCase();

console.log(passwordLowerCase);

if (passwordLowerCase === "YES") {
  ifLowerCase = "Yes";
  ifSelected++;
  chars += "abcdefghijklmnopqrstuvwxyz";
   }                          
 else if (passwordLowerCase === "NO") {
  ifLowerCase = "No";
    } else {
  window.alert(" select Yes or No for lowercase");
  generatePassword()
    }
console.log(ifLowerCase);



   var passwordUpperCase = window.prompt("Type Yes for uppercase No for no uppercase.");

   if (!passwordUpperCase) {
  return;
   }

   passwordUpperCase = passwordUpperCase.toUpperCase();

  if (passwordUpperCase === "YES") {
  ifUpperCase = "Yes";
  ifSelected++;
  chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } 
      else if (passwordUpperCase === "N"){
  ifUpperCase = "No";
     }
 else {
  window.alert(" select Yes or No for uppercase!");
  generatePassword();
    }

var passwordNumeric = window.prompt("type Yes for numbers.");

if (!passwordNumeric) {
  return;
    }

passwordNumeric = passwordNumeric.toUpperCase();

if (passwordNumeric === "YES") {
  ifNumeric = "Yes";
  ifSelected++;  
  chars += "0123456789";
    } 
    else if (passwordNumeric === "NO") {
     ifNumeric = "No";
     }
 else {
  window.alert(" select Yes to add numbers or No for no numbers!")
  generatePassword();
}



var passwordSpecial = window.prompt("Type Yes to add special characters No for no special characters.");

if (!passwordSpecial) {
  return;
  }

passwordSpecial = passwordSpecial.toUpperCase();

if (passwordSpecial === "YES") {
  ifSpecial = "Yes";
  ifSelected++;
  chars += "!@#$%^&*()_+";
   } 
   else if (passwordSpecial === "NO") {
  ifSpecial = "No";
   }   
    else {
  window.alert("select Yes to add special characters or No for no special characters!")
  generatePassword();
    }


if (ifSelected >= 1) {
  window.confirm("Click OK to generate your random password!");


  //create the password.... passlenght chars long.
  var password ="";
  for (i=0; i<passlength; i++){
    password += chars[Math.floor(Math.random()  * chars.length)];
    console.log(password);
 
      }
  return password;

  } else if (ifSelected === 0) {
  window.alert("Please select 'Y' for at least one of the options!");
  generatePassword();
  }



  //  use window.confirm to ask about about different types of info
  // use if statement to check at least one char type.
  //use if statement to build one array where user answer was true.
  //return out of function total array and the passlength.
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




