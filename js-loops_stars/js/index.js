console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    const starType = i <= filledStars ? "filled" : "empty";
    star.setAttribute("src", `assets/star-${starType}.svg`);
    star.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.appendChild(star);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();