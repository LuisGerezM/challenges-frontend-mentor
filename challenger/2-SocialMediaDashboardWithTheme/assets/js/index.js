function changeColor() {
  // Cambiando light y darkMode
  const container = document.querySelector(".container");

  const secondaryColorText = document.querySelectorAll(".secondary-color-text");
  const primaryColorText = document.querySelectorAll(".primary-color-text");
  const colorCard = document.querySelectorAll(".color-card");
  const colorCardHover = document.querySelectorAll(".card");
  const overviewToday = document.querySelector(".overview-today");
  const darkModeColor = document.querySelector(".dark-mode-color");
  const bgTheme = document.querySelector(".bg-theme");
  const btnCircleCheck = document.querySelector(".slider");
  const hr = document.querySelector(".separate-sm ");

  const nameClassContainer = container.classList.value;

  console.log(nameClassContainer.includes("dark"));
  if (nameClassContainer.includes("dark")) {
    container.classList.remove("dark");
    bgTheme.classList.remove("dark");
    btnCircleCheck.classList.remove("dark");
    overviewToday.classList.remove("dark");
    darkModeColor.classList.remove("dark");
    hr.classList.remove("dark");

    secondaryColorText.forEach((element) => {
      element.classList.remove("dark");
    });

    colorCardHover.forEach((element) => {
      element.classList.remove("dark");
    });

    // check class cards
    primaryColorText.forEach((element) => {
      element.classList.remove("dark");
    });

    colorCard.forEach((element) => {
      element.classList.remove("dark");
    });

    //card.classList.remove("dark");
  } else {
    container.classList.add("dark");
    bgTheme.classList.add("dark");
    btnCircleCheck.classList.add("dark");
    overviewToday.classList.add("dark");
    darkModeColor.classList.add("dark");
    hr.classList.add("dark");

    secondaryColorText.forEach((element) => {
      element.classList.add("dark");
    });

    colorCardHover.forEach((element) => {
      element.classList.add("dark");
    });

    // check class cards
    primaryColorText.forEach((element) => {
      element.classList.add("dark");
    });

    colorCard.forEach((element) => {
      element.classList.add("dark");
    });
  }
}
