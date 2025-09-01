const body = document.body;
if (localStorage.mode === 'dark'){
    body.classList.add("dark-mode");
}

function toggleLook(){
    body.classList.toggle("dark-mode");
    localStorage.setItem('mode', localStorage.mode === 'light' || localStorage.mode === undefined ? 'dark' : 'light');
}