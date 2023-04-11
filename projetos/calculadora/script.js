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
    dis.innerHTML = "..."
}