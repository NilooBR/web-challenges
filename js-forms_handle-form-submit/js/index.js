// console.clear();

// const form = document.querySelector('[data-js="form"]');

// form.addEventListener("submit" , (evt) => {
//     evt.preventDefault();
//     const forElements = evt.target.elements;
//     const data = {
//         firstName : forElements.firstName.value,
//         lastName : forElements.lastName.value,
//         age : forElements.age.value,
//         email : forElements.email.value,
//         complaint : forElements.complaint.value,
//         details : forElements.details.value,
//         badness : forElements.details.value,
//         orderDate : forElements.orderDate.value,
//         datPrivacyCheckBox : forElements.tos.value,
//     };

//     console.log("data: ", data);
// });

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
//     console.log("data", data);
// });


// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     const formElements = evt.target.elements;
//     const data = {
//         firstName: formElements.firstName.value,
//         age: Number(formElements.age.value),
//         badness: Number(formElements.badness.value)
//     };
//     const ageBadnessSum = data.age + data.badness;

//     console.log(`The agebadnesssum of "${data.firstName}" is "${ageBadnessSum}"`);
// });


console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  console.log(data);
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number(data.age) + Number(data.badness)
    }`
  );

  formElement.reset();
  formElement.elements.firstName.focus();
});