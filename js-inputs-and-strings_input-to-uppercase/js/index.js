console.clear();

const inputField = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');


uppercaseButton.addEventListener("click", () => {
  inputField.value = inputField.value.toUpperCase();
});
