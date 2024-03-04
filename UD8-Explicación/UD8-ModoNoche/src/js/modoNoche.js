// cogemos el cuerpo
const body = document.body;

if (localStorage.mode === 'dark'){
    body.classList.add("modo-luna");
}


function toggleLook(){
    body.classList.toggle("modo-luna");
    localStorage.setItem('mode',localStorage.mode === 'light' || localStorage.mode === undefined ? 'dark' : 'light'
    );
}

