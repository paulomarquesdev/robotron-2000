const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    });
});

function validValue(value){
    if (value>0){
        return value;
    } else {
        return '00';
    }
};

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = validValue(parseInt(peca.value) - 1);
    } else {
        peca.value = validValue(parseInt(peca.value) + 1);
    }
};

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    });
};

const robo = document.querySelector(".robo");

robo.addEventListener('click', () => {
    const roboCores = [
        './assets/img/robo/azul.png',
        './assets/img/robo/amarelo.png',
        './assets/img/robo/preto.png',
        './assets/img/robo/branco.png',
        './assets/img/robo/rosa.png',
        './assets/img/robo/vermelho.png'
    ];
    robo.src = randomChoice(roboCores)
});

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}