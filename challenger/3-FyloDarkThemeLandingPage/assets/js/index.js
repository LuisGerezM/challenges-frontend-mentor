//const imgBackground = document.querySelector(".img-background");
const img = document.querySelector(".curv-img");

let desktop = window.matchMedia("(max-width: 1326px)");
let mobile = window.matchMedia("(max-width: 375px)");

// asi deberia andar con css
// imgBackground.style.backgroundImage = "url('../images/bg-curvy-mobile.svg')"

// con JS puro lo cambiamos o añadimos asi:
//imgBackground.src = ''
// imgBackground.src ='./assets/images/bg-curvy-mobile.svg'
// console.log(imgBackground.src); // original: http://127.0.0.1:5500/challenger/3-FyloDarkThemeLandingPage/assets/images/bg-curvy-desktop.svg ;; cambiado: http://127.0.0.1:5500/challenger/3-FyloDarkThemeLandingPage/assets/images/bg-curvy-mobile.svg

if (screen.width > 1325) {
  img.src = "./assets/images/bg-curvy-desktop.svg";
  // assign default img style  --> 1341 px
  img.style.width = "98%";
  img.style.top = "730px";
  img.style.height = "450px";
  img.style.left = "14px";
  img.height= "450px";
} else if(screen.width < 376) {
  img.src = "./assets/images/bg-curvy-mobile.svg";
  img.style.width = "332%";
  img.style.height = "600px";

  img.style.top = "500px";
  img.style.left = "-50px";
} else{
  img.src = "./assets/images/bg-curvy-desktop.svg";
}

desktop.addEventListener("change", adaptView);
mobile.addEventListener("change", adaptView);

function adaptView(e) {
  img.src = "";
  // console.log(e.matches);
  // console.log(e.media);
  // console.log(e);

  if (e.media.includes(1441)) {
    img.src = "./assets/images/bg-curvy-desktop.svg";
    img.style.width = "91%";
    img.style.top = "750px";
    img.style.left = "95px";
  } else if (e.media.includes(375)) {
    img.src = "./assets/images/bg-curvy-mobile.svg";
    img.style.width = "332%";
    img.style.height = "600px";

    img.style.top = "500px";
    img.style.left = "-50px";
  }
}

/*
if (num1 <= num2){
   for(let i = num1; i<=num2; i++){
        document.write(i);
   }
}
else{
    for(let i = num1; i>=num2; i--){
        document.write(i);
   }
}
*/
/*  if (e.media.includes(1440)) {
    imgBackground.style.width = "80%";
    img.style.top = "770px";
    img.style.left = "100px";
  }

  if (e.media.includes(1327) || e.media.includes(1238)) {
    // console.log("si incluye 137 o 1238");
    imgBackground.style.width = "97%";
    img.style.top = "750px";
    img.style.left = "40px";
  } else if (e.media.includes(1237) || e.media.includes(1193)) {
    //console.log("no muchacho");
    imgBackground.style.width = "101%";
    img.style.top = "750px";
    img.style.left = "-5px";
  } else if (e.media.includes(1148) || e.media.includes(1192)) {
    img.style.top = "750px";
    img.style.left = "5px";
    imgBackground.style.width = "105%";
  }

  if (e.matches) {
    // the viewport is 600 pixels wide or less
    //  imgBackground.textContent = 'This is a narrow screen — less than 600px wide.';
    //document.body.style.backgroundColor = 'red';
    // console.log("si");
  } else {
    // the viewport is more than 600 pixels wide
    // imgBackground.textContent = 'This is a wide screen — more than 600px wide.';
    // document.body.style.backgroundColor = 'blue';
    // console.log("no");
  }
}



/*if (screen.width > 1335) {
  console.log(screen.width);
  widthWIndow = screen.width;
  caso = 1;
  posicionInicial = window.matchMedia(
    "(min-width: 1335px) and (max-width: 1500px)"
  );
  posicionInicial.addEventListener("change", screenTest);
} else if (screen.width > 1238 && screen.width < 1327) {
  //console.log(screen.width);
  posicionInicial = window.matchMedia(
    "(min-width: 1238px) and (max-width: 1327px)"
  );
  posicionInicial.addEventListener("change", screenTest);
} else if (screen.width > 1193 && screen.width < 1237) {
  posicionInicial = window.matchMedia(
    "(min-width: 1193px) and (max-width: 1237px)"
  );
  posicionInicial.addEventListener("change", screenTest);
} else if (screen.width > 1148 && screen.width < 1192) {
  posicionInicial = window.matchMedia(
    "(min-width: 1148px) and (max-width: 1192px)"
  );
  posicionInicial.addEventListener("change", screenTest);
}

function screenTest(e) {
  // console.log(e.matches);
  // console.log(e.media);
  // console.log(e);

  /*
if (num1 <= num2){
   for(let i = num1; i<=num2; i++){
        document.write(i);
   }
}
else{
    for(let i = num1; i>=num2; i--){
        document.write(i);
   }
}
*/
/*  if (e.media.includes(1440)) {
    imgBackground.style.width = "80%";
    img.style.top = "770px";
    img.style.left = "100px";
  }

  if (e.media.includes(1327) || e.media.includes(1238)) {
    // console.log("si incluye 137 o 1238");
    imgBackground.style.width = "97%";
    img.style.top = "750px";
    img.style.left = "40px";
  } else if (e.media.includes(1237) || e.media.includes(1193)) {
    //console.log("no muchacho");
    imgBackground.style.width = "101%";
    img.style.top = "750px";
    img.style.left = "-5px";
  } else if (e.media.includes(1148) || e.media.includes(1192)) {
    img.style.top = "750px";
    img.style.left = "5px";
    imgBackground.style.width = "105%";
  }

  if (e.matches) {
    // the viewport is 600 pixels wide or less
    //  imgBackground.textContent = 'This is a narrow screen — less than 600px wide.';
    //document.body.style.backgroundColor = 'red';
    // console.log("si");
  } else {
    // the viewport is more than 600 pixels wide
    // imgBackground.textContent = 'This is a wide screen — more than 600px wide.';
    // document.body.style.backgroundColor = 'blue';
    // console.log("no");
  }
}

extraXL.addEventListener("change", screenTest);
extraL.addEventListener("change", screenTest);
extra.addEventListener("change", screenTest);
ex.addEventListener("change", screenTest);

/*
if (window.matchMedia("(min-width: 400px)").matches) {
  // La pantalla tiene al menos 400 píxeles de ancho
  console.log('tiene al menos 400')
} else {
  // La pantalla tiene menos de 400 píxeles de ancho
  console.log('menos 400')
}
*/
/*
eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", maxWidth);
}

console.log(imgBackground);

console.log(
  "La resolución de tu pantalla es: " + screen.width + " x " + screen.height
);

if (screen.width < 1024) console.log("Pequeña");
else if (screen.width < 1280) console.log("Mediana");
else console.log("Grande");

function maxWidth() {
  imgBackground.style.width = "93%";
}
*/

/* 
window.addEventListener("resize", function(e){
  // tu código aquí
  // console.log('La pantalla ha cambiado de tamaño');
//console.log(e.srcElement) //srcElement
//console.log(e.srcElement.innerWidth)
console.log(window.innerWidth)
});

*/
