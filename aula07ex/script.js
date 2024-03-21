function carregar() {
    var img = document.getElementById('image')
    var txt = document.getElementById('msg')
    var data = new Date()
    var hr = data.getHours()

    txt.innerHTML = `<p>Agora são ${hr} horas</p>`
    if (hr >= 0 && hr < 12) {
        img.src = 'images/manha.png'
        txt.innerHTML += 'Bom dia!&#127799;'
        document.body.style.background = '#8C8558'
    } else if (hr >= 12 && hr < 18) {
        img.src = 'images/tarde.png'
        txt.innerHTML += 'Boa tarde!&#127774;'
        document.body.style.background = '#014D80'
    } else {
        img.src = 'images/noite.png'
        txt.innerHTML += 'Boa noite!&#127761;'
        document.body.style.background = '#13131F'
    }
}