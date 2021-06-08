function changeColor() {
  // Cambiando el COLOR de la PROPERTY
  /*
      document
          .querySelector(".button")
          .style.setProperty("--background",
          document.querySelector("input").value )
      */

  // Cambiando light y darkMode
  const container = document.querySelector(".container");

  const secondaryColorText = document.querySelectorAll(".secondary-color-text");
  const primaryColorText = document.querySelectorAll(".primary-color-text");
  const colorCard = document.querySelectorAll(".color-card");
  const colorCardHover = document.querySelectorAll(".card");
  const overviewToday = document.querySelector(".overview-today");
  const darkModeColor = document.querySelector(".dark-mode-color");

  const bgTheme = document.querySelector(".bg-theme");
  // const btnCheck = document.querySelector(".checkbox-switch");
  const btnCircleCheck = document.querySelector(".slider");

  const hr = document.querySelector(".separate-sm ");

  /*const textCardColor = document.querySelectorAll(".text-card-color");
  const colorTextOver = document.querySelector(".overview-today");*/

  const nameClassContainer = container.classList.value;
  // console.log(container)
  // console.log(container.classList.value)
  // console.log(nameClassContainer.includes('dark'))
  //console.log(card);
  // console.log(btnCheck.classList.value.includes('dark'))
  // console.log(textCardColor.classList.value.includes('dark'))

  console.log(nameClassContainer.includes("dark"));
  if (nameClassContainer.includes("dark")) {
    //console.log("es dark");
    /*bodyTheme.classList.remove("dark");
    titleNavLeft.classList.remove("dark");*/
    container.classList.remove("dark"); // le quite el dark
    /*navbar.classList.remove("dark");
    // btnCheck.classList.remove("dark")

    colorTextOver.classList.remove("dark");*/
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
      // console.log(valor)
      // console.log(valor.classList)
      // console.log(valor.classList.value)
      //const clase = valor.classList.value;
      /* if(clase.includes('facebook') || clase.includes('twitter') || clase.includes('instagram') || clase.includes('youtube')){*/
      //console.log('si')
      element.classList.remove("dark");
      //}
    });

    colorCard.forEach((element) => {
      element.classList.remove("dark");
    });

    //card.classList.remove("dark");
  } else {
    container.classList.add("dark"); // le quite el dark
    /*navbar.classList.remove("dark");
    // btnCheck.classList.remove("dark")

    colorTextOver.classList.remove("dark");*/
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
      // console.log(valor)
      // console.log(valor.classList)
      // console.log(valor.classList.value)
      //const clase = valor.classList.value;
      /* if(clase.includes('facebook') || clase.includes('twitter') || clase.includes('instagram') || clase.includes('youtube')){*/
      //console.log('si')
      element.classList.add("dark");
      //}
    });

    colorCard.forEach((element) => {
      element.classList.add("dark");
    });
  }
}
