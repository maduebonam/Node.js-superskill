
const generatePassword = require('generate-password');

// Adjustable password length
const passwordLength = 12; // You can change this value to any length you want

const password = generatePassword.generate({
    length: passwordLength,
    numbers: true
});

console.log('Generated Password:', password);