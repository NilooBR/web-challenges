console.clear();

const inputField = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  inputField.value = inputField.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  inputField.value = inputField.value.toLowerCase();
});
