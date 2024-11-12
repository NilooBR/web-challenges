console.clear();

const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener("input", () => {
  const color = inputColor.value;
  box.style.backgroundColor = `hsl(${color} 100% 50%)`;
});

inputRadius.addEventListener("input", () => {
  const radius = inputRadius.value;
  box.style.borderRadius = radius === "50" ? "50%" : `${radius}%`;
});

inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  box.style.transform = `rotate(${rotation}deg)`;
});