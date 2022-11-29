
function tocaSom (idElementAudio) {
    const elemento = document.querySelector(idElementAudio);

    if (elemento && elemento.localName == 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

function tocaSomClap () {
    document.querySelector("#som_tecla_clap").play();
}





const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space' || evento.code == "Enter") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
