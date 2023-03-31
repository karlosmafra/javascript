function converter() {
    var inpbin = document.querySelector('input#bin')
    var bin = inpbin.value
    var res = document.querySelector('div#res')
    res.innerHTML = "Número em base decimal..."
    
    if (bin.length == 0) {
        alert("Insira um número.")
    } else {
        var erro = false
        for (i in bin) {
            if (bin[i] != 1 && bin[i] != 0) {
                alert("Número inválido.")
                erro = true
            } 
        }
        
        if (erro == false) {
            res.innerHTML = `O número binário corresponde a ${parseInt(bin, 2)}.`
        }
    } 
}