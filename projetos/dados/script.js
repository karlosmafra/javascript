function rolar() {
    var dado = document.querySelector('div#d6')
    var resultado = document.querySelector('p#restxt')
    var num = parseInt(Math.random() * 6 + 1)
    dado.innerHTML = num
    resultado.innerHTML = `Resultado: ${num}`
}