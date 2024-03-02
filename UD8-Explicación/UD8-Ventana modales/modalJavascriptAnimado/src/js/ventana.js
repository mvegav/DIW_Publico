
const $d = document,
  $botonAbrir1 = $d.querySelector("#openModal1"),
  $botonAbrir2 = $d.querySelector("#openModal2"),
  $botonCerrar1 = $d.querySelector("#cerrar1"),
  $botonCerrar2 = $d.querySelector("#cerrar2");

function abrirModal(ventana){
  document.querySelector(`#${ventana}`).showModal();
  document.querySelector(`#${ventana}`).classList.add("is-visible");
}

function cerrarModal(ventana){
  document.querySelector(`#${ventana}`).classList.remove("is-visible");
  document.querySelector(`#${ventana}`).close();
}

$botonAbrir1.addEventListener("click",e=>abrirModal(e.target.dataset.modal));
$botonAbrir2.addEventListener("click",e=>abrirModal(e.target.dataset.modal));
$botonCerrar1.addEventListener("click",e=>cerrarModal(e.target.dataset.modal));
$botonCerrar2.addEventListener("click",e=>cerrarModal(e.target.dataset.modal));


/* document.addEventListener("click", (e) => {
  switch (e.target) {
    case document.querySelector("#openModal1"):
      abrirModal("#modal1");
      break;
    case document.querySelector("#openModal2"):
      abrirModal("#modal2");
      break;
    case document.querySelector("#cerrar1"):
      cerrarModal("#modal1");
      break;
    case document.querySelector("#cerrar2"):
      cerrarModal("#modal2");

      break;
  }
}); */

/* document.addEventListener("click", (e) => {
  switch (e.target) {
    case document.querySelector("#openModal1"):
      document.querySelector("#modal1").showModal();
      document.querySelector("#modal1").classList.add("is-visible");
      break;
    case document.querySelector("#openModal2"):
      document.querySelector("#modal2").showModal();
      document.querySelector("#modal2").classList.add("is-visible");
      break;
    case document.querySelector("#cerrar1"):
      document.querySelector("#modal1").classList.remove("is-visible");
      document.querySelector("#modal1").close();
      break;
    case document.querySelector("#cerrar2"):
      document.querySelector("#modal2").classList.remove("is-visible");
      document.querySelector("#modal2").close();
      break;
  }
});
 */