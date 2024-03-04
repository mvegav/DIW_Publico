const d=document;

function hamburgerMenu(boton,menu,link){
    console.log("entra")
    d.addEventListener('click', e=>{
        if (e.target.matches(boton) || e.target.matches(link) ){
            d.querySelector(boton).classList.toggle("close");
            d.querySelector(menu).classList.toggle("nav--show");
        }
       // hacemos click sobre las opciones del menú      
        // if (e.target.matches(link)){
        //     d.querySelector(boton).classList.toggle("close");
        //     d.querySelector(menu).classList.toggle("nav--show");
        // }
    })
}

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".off-canvas__burger",".nav",".nav__link")
})