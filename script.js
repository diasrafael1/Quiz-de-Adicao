const primeiroNumber = document.querySelector('.numero1')
const segundoNumber = document.querySelector('.numero2')
const resposta = document.querySelector('.card__resposta')
const gerador = document.querySelector('.btn-gerador')
const verificar = document.querySelector('.btn-verificar')
const operador = document.querySelector('.operador')
const pontuacao = document.querySelector('.pontuacao')
let pontuador = 0

function numero1() {
    let numero1;
    //IFs para aumentar a dificuldade(gerar números maiores) referente a pontuação
    if (pontuador < 10) {
        console.log("fase1.1")
        numero1 = Math.floor(Math.random() * 10)
    } else if (pontuador > 10 && pontuador < 20) {
        numero1 = Math.floor(Math.random() * 20)
    } else {
        numero1 = Math.floor(Math.random() * 25)
    }
    return numero1
}

function numero2() {
    let numero2;
    //IFs para aumentar a dificuldade(gerar números maiores) referente a pontuação
    if (pontuador < 10) {
        console.log("fase1.2")
        numero2 = Math.floor(Math.random() * 10)
    } else if (pontuador > 10 && pontuador < 20) {
        numero2 = Math.floor(Math.random() * 20)
    } else {
        numero2 = Math.floor(Math.random() * 25)
    }
    return numero2
}

function reset() {
    resposta.classList.remove('erro')
    resposta.classList.remove('acerto')
    resposta.value = ""
    pontuacao.style.color = "black"
}


gerador.addEventListener('click', function () {
    primeiroNumber.textContent = numero1()
    segundoNumber.textContent = numero2()
    operador.textContent = "+"
    gerador.classList.toggle('escondido')
    verificar.classList.toggle('escondido')
    reset()
})


verificar.addEventListener('click', function () {
    const resultado = Number(primeiroNumber.textContent) + Number(segundoNumber.textContent)
    if (resposta.value === "") return
    if (Number(resposta.value) === Number(resultado)) {
        resposta.classList.add('acerto')
        pontuador++
        pontuacao.textContent = pontuador
        pontuacao.style.color = "green"
    } else {
        resposta.classList.add('erro')
        pontuador = 0
        pontuacao.textContent = pontuador
        pontuacao.style.color = "red"
    }
    gerador.classList.toggle('escondido')
    verificar.classList.toggle('escondido')
})