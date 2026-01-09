// ========== DOM Variables ==========
// Password Output
const passwordOutput = document.getElementById("generated-password");
// Password Length Input
const passwordLengthInput = document.getElementById("password-length");
// Checkboxes
const hasUpperCase = document.getElementById("containsUppercase");
const hasNumbers = document.getElementById("containsNumbers");
const hasSymbols = document.getElementById("containsSymbols");
// Generate Button
const btnGenerate = document.getElementById("btnGenerate");

// Generated Password character set
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Min & Max password lengths
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 128;

// Generates random num between min & max
function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Display error message to user
function displayError(message) {
  passwordOutput.textContent = message;
  passwordOutput.style.color = "red";
}

// Reset output styling
function resetOutput() {
  passwordOutput.style.color = "";
}

// Validate password length input
function validatePasswordLength(length) {
  // Check if input is empty or null
  if (length === "" || length === null || length === undefined) {
    displayError("Error: Please enter a password length");
    return false;
  }

  // Typecast to number
  const numLength = Number(length);

  // Check if it's not a valid number
  if (isNaN(numLength)) {
    displayError("Error: Password length must be a number");
    return false;
  }

  // Check if it's not an integer
  if (!Number.isInteger(numLength)) {
    displayError("Error: Password length must be a whole number");
    return false;
  }

  // Check if it's below minimum
  if (numLength < MIN_PASSWORD_LENGTH) {
    displayError(`Error: Password length must be at least ${MIN_PASSWORD_LENGTH}`);
    return false;
  }

  // Check if it's above maximum
  if (numLength > MAX_PASSWORD_LENGTH) {
    displayError(`Error: Password length cannot exceed ${MAX_PASSWORD_LENGTH}`);
    return false;
  }

  return true;
}

btnGenerate.addEventListener("click", () => {
  resetOutput();

  // Validate password length
  if (!validatePasswordLength(passwordLengthInput.value)) {
    return;
  }

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

  // Edge case: Character set is empty (shouldn't happen with default lowercase, but good to check)
  if (charSet.length === 0) {
    displayError("Error: No character types selected");
    return;
  }

  // Password length
  let passwordLength = Number(passwordLengthInput.value);

  let generatedPassword = [];
  let lastIndex = charSet.length - 1;
  
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword.push(charSet[randomIndex(0, lastIndex)]);
  }
  
  // Convert arr to string then display in DOM
  passwordOutput.textContent = generatedPassword.join("");
});

// Optional: Add real-time input validation
passwordLengthInput.addEventListener("input", () => {
  const value = passwordLengthInput.value;
  const numValue = Number(value);
  
  // Prevent negative numbers
  if (numValue < 0) {
    passwordLengthInput.value = Math.abs(numValue);
  }
  
  // Cap at maximum
  if (numValue > MAX_PASSWORD_LENGTH) {
    passwordLengthInput.value = MAX_PASSWORD_LENGTH;
  }
});