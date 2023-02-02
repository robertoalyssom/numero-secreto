const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
};

const elementoMenorvalor = document.getElementById('menor-valor');
elementoMenorvalor.innerHTML = menorValor;

const elementoMaiorvalor = document.getElementById('maior-valor');
elementoMaiorvalor.innerHTML = maiorValor;

//para o usuário interagir com a tela
const botaoInicio = document.getElementById('comecar-jogo');
const telaInicial = document.querySelector('.container-inicio');
const telaDoJogo = document.querySelector('.container-jogo');

botaoInicio.addEventListener("click", ()=> {
    telaInicial.style.display = "none";

    telaDoJogo.style.display = "block";
})