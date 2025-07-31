const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

function generatePassword() {
  const length = parseInt(lengthInput.value);

  if (isNaN(length) || length < 4 || length > 40) {
    alert("Password length must be between 4 and 40.");
    passwordInput.value = '';
    return;
  }

  const includeUpper = uppercaseCheckbox.checked;
  const includeLower = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/';

  let charPool = '';
  if (includeUpper) charPool += upper;
  if (includeLower) charPool += lower;
  if (includeNumbers) charPool += numbers;
  if (includeSymbols) charPool += symbols;

  if (charPool === '') {
    alert('Please select at least one character type!');
    passwordInput.value = '';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomChar = charPool[Math.floor(Math.random() * charPool.length)];
    password += randomChar;
  }

  passwordInput.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  if (passwordInput.value !== '') {
    navigator.clipboard.writeText(passwordInput.value);
    alert('Password copied to clipboard!');
  }
});
