const // button link
  homeLink = document.querySelector(".home-link"),
  membersLink = document.querySelector(".members-link"),
  ourWorksLink = document.querySelector(".our-works-link"),
  aboutLink = document.querySelector(".about-link"),
  // other
  body = document.querySelector("body"),
  header = document.querySelector("header"),
  toggleOpenBtn = document.querySelector(".toggleOpenBtn"),
  toggleCloseBtn = document.querySelector(".toggleCloseBtn"),
  overlay = document.querySelector(".overlay");

// open-navvigation
toggleOpenBtn.addEventListener("click", () => {
  body.classList.add("openNav");
  header.classList.add("openNav");
});

toggleCloseBtn.addEventListener("click", () => {
  body.classList.remove("openNav");
  header.classList.remove("openNav");
});

overlay.addEventListener("click", () => {
  body.classList.remove("openNav");
  header.classList.remove("openNav");
});
