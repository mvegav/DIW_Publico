/* Toggle Animations */
const btn = document.querySelector("#animacion");
btn.addEventListener("click", () => {
  const animations = document.querySelectorAll("[data-animation]");
  animations.forEach((animation) => {
    const running = animation.style.animationPlayState || "running";
    animation.style.animationPlayState =
      running === "running" ? "paused" : "running";
  });
  if (btn.innerHTML == "Pausar") {
    btn.innerHTML = "Arrancar";
    btn.classList.remove("pausar");
    btn.classList.add("arrancar");
  } else {
    btn.innerHTML = "Pausar";
    btn.classList.remove("arrancar");
    btn.classList.add("pausar");
  }
});
