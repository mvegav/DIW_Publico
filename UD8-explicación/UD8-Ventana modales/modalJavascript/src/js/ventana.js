const $d = document,
    $botonAbrir = $d.querySelector("#openShow"),
    $ventana = $d.querySelector("#modalShow"),
    $botonCerrar = $d.querySelector("#cerrar1"),
    $botonAbrir2 = $d.querySelector("#openShowModal"),
    $ventana2 = $d.querySelector("#modalShowModal"),
    $botonCerrar2 = $d.querySelector("#cerrar2");

// función a la que se le pasa el botón y el modal
// se encarga de capturar el evento click para sobre el boton y hacer un showModal sobre la ventana 
function abrir(boton,modal,show){
    boton.addEventListener('click',e =>{
       (show) ? modal.show() : modal.showModal();
    })
}

function cerrar(boton,modal){
    boton.addEventListener('click',e =>{
        modal.close()
    })
}

// llamamos a las funciones
abrir($botonAbrir,$ventana,true);
cerrar($botonCerrar,$ventana);

// llamamos a las funciones
abrir($botonAbrir2,$ventana2,false);
cerrar($botonCerrar2,$ventana2);
