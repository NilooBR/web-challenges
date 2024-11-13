console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
// Select the body to append the new post
const body = document.querySelector("body");

const newPost = document.createElement("article");
newPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "Another example of a social media post created with JavaScript.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@newusername";

const anotherLikeButton = document.createElement("button");
anotherLikeButton.type = "button";
anotherLikeButton.classList.add("post__button");
anotherLikeButton.setAttribute("data-js", "like-button");
anotherLikeButton.textContent = "♥ Like";

postFooter.appendChild(postUsername);
postFooter.appendChild(anotherLikeButton);


newPost.appendChild(postContent);
newPost.appendChild(postFooter);

body.appendChild(newPost);


anotherLikeButton.addEventListener("click", handleLikeButtonClick);