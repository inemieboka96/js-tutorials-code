// DOM Variables
const passwordOutput = document.getElementById("generated-password");

// Checkboxes
const hasUpperCase = document.getElementById("containsUppercase");
const hasNumbers = document.getElementById("containsNumbers");
const hasSymbols = document.getElementById("containsSymbols");
// Button
const btnGenerate = document.getElementById("btnGenerate");

// All password characters
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

btnGenerate.addEventListener("click", () => {
  let charSet = [...lowercaseLetters]; // Default array

  // If these checkboxes are checked, add them to the character set arr
  if (hasUpperCase.checked) {
    charSet.push(...uppercaseLetters);
  }
  if (hasNumbers.checked) {
    charSet.push(...numbers);
  }
  if (hasSymbols.checked) {
    charSet.push(...symbols);
  }

  //Password length
  let passwordLength = Number(document.getElementById("password-length").value);

  let generatedPassword = []; // Initialize empty array
  let lastIndex = charSet.length - 1;
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword.push(charSet[randomIndex(0, lastIndex)]);
  }
  // Convert arr to string then display in DOM
  passwordOutput.textContent = generatedPassword.join("");
});
