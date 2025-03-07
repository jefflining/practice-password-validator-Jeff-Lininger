let hasNumber = false;
let hasUpperCase = false;

const readline = require('readline-sync')

let password = readline.question("Enter your password:");

if (password) {
  if (password.length >= 8) {
}

for (let i = 0; i < password.length; i++) {
  if (!isNaN(parseInt(password[i]))) {
    hasNumber = true; 
    break;
  }
}

for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      hasUpperCase = true;
      break;
    }
  }

if (hasNumber) {
    if (password.length >= 8)
        if (hasUpperCase) 
  console.log("Password is valid.");
} else {
  console.log("Password is not valid.");
}
}
