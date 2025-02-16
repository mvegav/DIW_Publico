function hamburgerMenu(boton,menu,link){
  //capturamos el click del boton y link
  d.addEventListener("click", e=> {
      if (e.target.matches(boton)){
          d.querySelector(boton).classList.toggle("close");
          d.querySelector(menu).classList.toggle("nav--show");
      }
      // hacemos click sobre las opciones del menú
      if (e.target.matches(link)){
          d.querySelector(boton).classList.remove("close");
          d.querySelector(menu).classList.remove("nav--show");
      }
  });
}

const d=document;
/*
.off-canvas__burger es el span que está dentro del botón, que es el icono que
hemos realizado con css del menú hamburguesa
nav es el nav del menú hamburguesa
nav__link son las opciones del menú, para cerrar el menú al hacer click sobre una 
opción del mismo*/
// al cargar la página
d.addEventListener("DOMContentLoaded",(e)=> {
  hamburgerMenu(".off-canvas__burger",".nav",".nav__link")
});