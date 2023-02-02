const audioPop = document.getElementById('audio-pop');

function tocarAudio(numero) {
    const audioVictory = document.getElementById('audio-victory');
    
    if (numero != numeroSecreto) {
        audioPop.play();
    } else if (numero == numeroSecreto) {
        audioVictory.play();
    };
};
