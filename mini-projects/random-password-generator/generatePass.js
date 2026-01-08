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

const arr = [...lowercaseLetters]; // Default array


btnGenerate.addEventListener("click", () => {
  //Password length
  let passwordLength = Number(document.getElementById("password-length").value);

  let generatedPassword = []; // Initialize empty array
  let lastIndex = arr.length - 1;
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword.push(arr[randomIndex(0, lastIndex)]);
  }
  passwordOutput.textContent = generatedPassword.join("");
});