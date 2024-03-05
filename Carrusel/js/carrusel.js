/* 
  DIW - UD8 
  Autor: Marina Vega Vázquez
  Fecha: 23/04/2023

  fichero: carrusel.js
*/
// guardamos en una variable los elementos html con los que trabajaremos, por nombre de la clase
// empleamos una constante ya que los elementos obtenidos son punteros a los objetos almacenados en memoria
const $d = document,
  $carousel = $d.querySelector(".carrusel"),
  $siguiente = $carousel.querySelector(".carrusel__next"),
  $anterior = $carousel.querySelector(".carrusel__prev"),
  $bubblesContainer = $carousel.querySelector(".carrusel__bubbles"),
  $galeria = $carousel.querySelector(".carrusel__galeria"),
  $imgs = [],
  bubbles = [];

// definimos una variable para indicar en que imagen nos encontramos
let currentImageIndex = 0,
  width = 640,
  centTiempo;

// función que pasa a la siguiente imagen cada 3 segundos, para ello lo que hacemos es forzar el evento click sobre el elemento .carrusel__next
function intervalo(){
 centTiempo = setInterval(() => {
    $siguiente.click();
  }, 3000);
}
// función que crea cada uno de los elementos img partiendo de las imágenes almacenadas en la carpeta y crea tantos bubbles como imágenes hemos 
// añadido al html
function crearCarrusel() {
  // Creamos los ficheros img dentro de carrusel__galeria
    for (let i = 0; i < 10; i++) {
    const $img = $d.createElement("img");
    $img.src = `./imagenes/Carrusel${i + 1}.jpg`;
    $galeria.appendChild($img);
    $imgs.push($img);
  }

  // Creamos las bubbles
  for (let i = 0; i < $imgs.length; i++) {
    const $span = $d.createElement("span");
    $span.classList.add("bubble");
    $bubblesContainer.appendChild($span);
    bubbles.push($span);
  }
  pasarimagen();
  //Movemos a la siguiente imagen cada 3 segundos
  intervalo();
}

// función que mueve la imagen, para ello añade un valor a la propiedad left igual al ancho del elemento (640px) multiplicado por el identificador
// de la imagen
function pasarimagen() {
  $galeria.style.left = -width * currentImageIndex + "px";

  // para cada buble, si el indice del array de bubles es igual al indice de la imagen cargada, añadimos la clase buble--activa, en caso contrario la quitamos
  bubbles.forEach((bubble, index) => {
    index === currentImageIndex
      ? bubble.classList.add("bubble--activa")
      : bubble.classList.remove("bubble--activa");
  });
}

// para el elemento que contiene todos los bubles, captura el evento click
$bubblesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("bubble")) {
    currentImageIndex = bubbles.findIndex((el) => el === e.target);
    pasarimagen();
    // para que al pasar de una imagen a otra al seleccionar un bubble, el paso no sea brusco, al estar ya avanzado el contador
    // reseteamos el centinela del tiempo para que al pasar a la siguiente imagen el tiempo se reinicie
    clearInterval(centTiempo);
    // centTiempo = setInterval(() => {
    //   $siguiente.click();
    // }, 3000);
    intervalo();
  }
});

//capturamos el evento click sobre el elementos .carrusel__next de forma que incrementa en 1 el contador de imágenes y comprobamos si hemos llegado
// al final (imagen 10 -> número 9), si es así inicializamos a 0 la imagen.
// posteriormente llamamos a la función que pasa a la siguiente imagen y reseteamos el centinela de tiempos
$siguiente.addEventListener("click", function () {
  currentImageIndex++;

  if (currentImageIndex >= $imgs.length) {
    currentImageIndex = 0;
  }

  pasarimagen();
  clearInterval(centTiempo);
  // centTiempo = setInterval(() => {
  //   $siguiente.click();
  // }, 3000);
  intervalo();
});

// hacemos lo mismo que para siguiente, pero en este caso decrementando y por lo tanto cambiando a la imagen anterior.
$anterior.addEventListener("click", function () {
  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = $imgs.length - 1;
  }

  pasarimagen();
  clearInterval(centTiempo);
  centTiempo = setInterval(() => {
    $siguiente.click();
  }, 3000);
});
// cuando termine de cargarse la página que se ejecute la función crearCarrusel
$d.addEventListener("DOMContentLoaded", crearCarrusel);
