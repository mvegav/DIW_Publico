const $d = document,
$contenedor = $d.querySelector(".abrir");
$contenedor.addEventListener("click", e => {
  e.target.querySelector("#${e.target.id}").showModal();
  


  if (e.target.classList.contains("carta")) {
  e.target.style.backgroundImage = e.target.style.backgroundImage == `url("./img/asart-naipes-dorso-minimalart.png")`
    ? `url("./img/asart-naipes-${e.target.id}-1-minimalart.png")`
    : `url("./img/asart-naipes-dorso-minimalart.png")`
  // e.target.style.backgroundImage = `url("./img/asart-naipes-${e.target.id}-1-minimalart.png")`
  // url("./img/asart-naipes-dorso-minimalart.png")
}
});