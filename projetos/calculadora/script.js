var dis = document.querySelector('p#dis')

function insert(num) {
    dis.innerHTML += num
}

function allClean() {
    dis.innerHTML = ""
}

function clean() {
    var res = dis.innerHTML
    dis.innerHTML = res.substring(0, res.length - 1)
}

function calcular() {
    var res = eval(dis.innerHTML)
    if (dis.innerHTML.length == 0) {
        dis.innerHTML = ""
    } else if (res > 99999999) {
        dis.innerHTML = ""
        alert("[ERRO]: Número muito grande.")
    } else {
        dis.innerHTML = res
    }
}