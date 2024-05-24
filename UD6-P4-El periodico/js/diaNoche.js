const $d = document,
    $colorSwitch = $d.querySelector('#switch input[type="checkbox"]');

function cambiarTema(ev){
    if (ev.target.checked){
        $d.body.setAttribute("tema","dark");
    } else {
        $d.body.setAttribute("tema","light");
    }
}

$colorSwitch.addEventListener("change", cambiarTema);