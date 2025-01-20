  /* Toggle Animations */
const btn = document.querySelector('#animacion');
btn.addEventListener('click',() => {
  const animations = document.querySelectorAll('[data-animation');
  animations.forEach(animation => {
    const running = animation.style.animationPlayState || 'running';
    animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
  })
  if (btn.textContent == 'Pausar'){
    btn.textContent = "Arrancar";
    btn.classList.remove('pausar');
    btn.classList.add('arrancar');
  }else{
    btn.textContent = "Pausar";
    btn.classList.remove('arrancar');
    btn.classList.add('pausar');
  }
})