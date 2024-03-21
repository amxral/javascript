function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >= 1 && idade < 12) {
                //criança
                img.setAttribute('src', 'images/menino.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'images/jovem-h.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'images/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/velho.png')
            }
        } else if (sex[1].checked){
            gen = 'Mulher'
            if (idade >= 1 && idade < 12) {
                //criança
                img.setAttribute('src', 'images/menina.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'images/jovem-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'images/adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/velha.png')
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos</p>`
        res.appendChild(img)
    }
}