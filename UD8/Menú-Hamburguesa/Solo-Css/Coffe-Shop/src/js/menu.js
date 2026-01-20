const $d = document;

function showMenu(boton, menu, link) {
  $d.addEventListener("click", (e) => {
    if (e.target.closest(boton)) {
      e.preventDefault();
      $d.querySelector(boton).classList.toggle("close");
      $d.querySelector(menu).classList.toggle("nav--show");
    }

    if (e.target.closest(link)) {
      $d.querySelector(boton).classList.remove("close");
      $d.querySelector(menu).classList.remove("nav--show");
    }
  });
}

$d.addEventListener("DOMContentLoaded", (e) => {
  showMenu(".nav__btn", ".nav", ".menu__item");
});
