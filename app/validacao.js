function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute;

    if (fimDeJogo(chute)) {
        document.body.innerHTML = `
        <h1>GAME OVER</h1>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
        document.body.style.backgroundColor = "black";
    };

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>';
        return
    };

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>É um valor invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    };

    //--- se o número falado é igual ao número secreto/gerado ---
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era o ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        <audio src="audio/sfx-victory5.mp3" id="audio-victory"></audio>
        `;
        tocarAudio(numero);
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
        tocarAudio(numero)
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
        `;
        tocarAudio(numero);
    };
};

function fimDeJogo(chute) {
    return chute === "Game Over." || chute === "Fim de jogo.";
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
};

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
};

document.body.addEventListener("click", e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});