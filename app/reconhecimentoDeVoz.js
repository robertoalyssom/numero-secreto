const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

//--- função que pega os dados que falamos ---
function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exixbeChuteNaTela(chute);
    verificaSeOChutePossuiValorValido(chute);
};

//--- função que faz exibir na tela o que falamos ---
function exixbeChuteNaTela(chute) {
    chuteSemPonto = chute.slice(0, -1);
    elementoChute.innerHTML = `
        <div>Você Disse:</div>
        <span class="box">${chuteSemPonto}</span>
    `;
};

recognition.addEventListener('end', () => {
    if (+chute == numeroSecreto || fimDeJogo(chute)) { // ou (||) 'game over')
        recognition.stop();
    } else {
        recognition.start();
    };
});