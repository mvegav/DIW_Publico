const d = document,
  $ventana = d.querySelector("#comprar"),
  $botonesAbrir = d.querySelectorAll(".openModal"),
  $botonCerrar = d.querySelector("#closeModal");

function abrir(boton, modal, show) {
  boton.addEventListener("click", (e) => {
    show ? modal.show() : modal.showModal();
  });
}

function cerrar(boton, modal) {
  boton.addEventListener("click", (e) => {
    modal.close();
  });
}

$botonesAbrir.forEach((e) => {
  abrir(e, $ventana, false);
});

cerrar($botonCerrar, $ventana);
