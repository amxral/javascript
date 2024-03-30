function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        } if (i < f) { // Contagem Crescente
            for(c = i; c <= f; c += p) {
            res.innerHTML += `${c} &#10137;`
            }
        } else { // Contagem Regressiva
            for(c = i; c >= f; c -= p) {
            res.innerHTML += `${c} &#10137;`
            }
        }
    } res.innerHTML += '&#127937;'
}