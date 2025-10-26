document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.querySelector(".header__container");
  const navList = document.querySelector(".nav__list");

  const burger = document.createElement("button");
  burger.id = "nav__burger";
  burger.classList.add("nav__burger");
  burger.setAttribute("aria-label", "Open Menu");

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("span");
    line.classList.add("nav__burger-line");
    burger.appendChild(line);
  }

  headerContainer.appendChild(burger);

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navList.classList.toggle("active");
  });

  const range = document.getElementById("range");
const rangeValue = document.querySelector(".order__range-value");

range.addEventListener("input", () => {
  rangeValue.textContent = `${range.value}%`;
  range.style.background = `linear-gradient(90deg, #42A9ED ${range.value}%, #FFFFFFB2 ${range.value}%)`;
});

});
