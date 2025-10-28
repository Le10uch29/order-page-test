(() => {
  const headerContainer = document.querySelector(".header__container");
  const navList = document.querySelector(".nav__list");
  if (headerContainer && navList) {

    let burger = document.querySelector(".nav__burger");
    if (!burger) {
      burger = document.createElement("button");
      burger.classList.add("nav__burger");
      burger.setAttribute("aria-label", "Open Menu");
      for (let i = 0; i < 3; i++) {
        const line = document.createElement("span");
        burger.appendChild(line);
      }
      headerContainer.appendChild(burger);
    }

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navList.classList.toggle("active");
    });
  }

  const range = document.getElementById("range");
  const rangeVal = document.querySelector(".order__range-value");
  if (range && rangeVal) {
    const paint = () => {
      rangeVal.textContent = `${range.value}%`;
      range.style.background = `linear-gradient(90deg, #42A9ED ${range.value}%, #FFFFFFB2 ${range.value}%)`;
    };
    range.addEventListener("input", paint);
    paint(); 
  }
})();
