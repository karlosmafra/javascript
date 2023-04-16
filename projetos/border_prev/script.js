function visualizar() {
    var div = document.querySelector('div#div')
    var code = document.querySelector('div#code')

    var tl = Number(document.querySelector('input#tl').value)
    var tr = Number(document.querySelector('input#tr').value)
    var bl = Number(document.querySelector('input#bl').value)
    var br = Number(document.querySelector('input#br').value)

    div.style.borderTopLeftRadius = `${tl}px`
    div.style.borderTopRightRadius = `${tr}px`
    div.style.borderBottomLeftRadius = `${bl}px`
    div.style.borderBottomRightRadius = `${br}px`

    code.innerHTML = `border-top-left-radius: ${tl}px; <br>
    border-top-right-radius: ${tr}px; <br>
    border-bottom-right-radius: ${br}px; <br>
    border-bottom-left-radius: ${bl}px;`
}
