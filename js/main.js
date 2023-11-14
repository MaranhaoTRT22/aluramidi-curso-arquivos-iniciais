function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    
    if (elemento) {
        console.log(elemento);
        if (elemento.tagName === "AUDIO") {
            elemento.play();
        } else {
            console.error("Elemento não interativo");
        }
    } else {
        console.error("Elemento não consta no DOM");
    }
}

// atribui uma função ao evento onclick do elemento
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`; // template string

	tecla.onclick = function () {
		tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
        console.log(evento);
        // "==" compara valores "===" compara objetos
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function () {
		tecla.classList.remove("ativa");
	};
}