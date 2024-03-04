const $d = document,
    $botonAbrir = $d.querySelector("#abreModal"),
    $form = $d.querySelector("form"),
    $ventana = $d.querySelector("#favDialog"),
    $select = $form.querySelector("select");

$botonAbrir.addEventListener('click', e=>{
    $ventana.showModal()
    $select.value="Elige un animal"
});

$form.addEventListener('click', e =>{
    const $titulo = $d.querySelector("#titulo"),
          $parrafo = $d.querySelector("#parrafo");
    
    if (e.target.id == "confirmar"){
        if ($select.value!="Elige un animal"){
            $titulo.innerHTML = "Animal Favorito"
            $parrafo.innerHTML = "Has elegido un animal favorito, el "+$select.value +"."
            $ventana.close()
        }else e.preventDefault()
    } else if (e.target.id =="cancel"){
        $titulo.innerHTML = "No has elegido animal Favorito"
        $parrafo.innerHTML = ""
        $ventana.close()
    }
})