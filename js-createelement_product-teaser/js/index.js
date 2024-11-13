console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const body = document.querySelector("body");

const productArticle = document.createElement("article");
productArticle.classList.add("product");

const productBody = document.createElement("div");
productBody.classList.add("product__body");

const textContainer = document.createElement("div");
textContainer.classList.add("product__text-container");

const productName = document.createElement("h2");
productName.classList.add("product__name");
productName.textContent = name;
textContainer.appendChild(productName);

const categoryList = document.createElement("ul");
categoryList.classList.add("product__categories");

const productCategory1 = document.createElement("li");
productCategory1.classList.add("product__category");
productCategory1.textContent = category1;
categoryList.appendChild(productCategory1);

const productCategory2 = document.createElement("li");
productCategory2.classList.add("product__category");
productCategory2.textContent = category2;
categoryList.appendChild(productCategory2);

const productCategory3 = document.createElement("li");
productCategory3.classList.add("product__category");
productCategory3.textContent = category3;
categoryList.appendChild(productCategory3);

textContainer.appendChild(categoryList);

const productDescription = document.createElement("p");
productDescription.classList.add("product__description");
productDescription.textContent = description;
textContainer.appendChild(productDescription);

productBody.appendChild(textContainer);

const imageContainer = document.createElement("div");
imageContainer.classList.add("product__image-container");

const productImage = document.createElement("img");
productImage.classList.add("product__image");
productImage.src = imageSrc;
productImage.alt = `Image of ${name}`;
imageContainer.appendChild(productImage);

productBody.appendChild(imageContainer);

productArticle.appendChild(productBody);

const productFooter = document.createElement("footer");
productFooter.classList.add("product__footer");

const productPrice = document.createElement("span");
productPrice.classList.add("product__price");
productPrice.textContent = price;
productFooter.appendChild(productPrice);

const buyButton = document.createElement("button");
buyButton.type = "button";
buyButton.classList.add("product__buy-button");
buyButton.textContent = "Buy";
productFooter.appendChild(buyButton);

buyButton.addEventListener("click", () => {
  console.log(`Product Name: ${name}`);
  console.log(`Price: ${price}`);
});

productArticle.appendChild(productFooter);

body.appendChild(productArticle);
