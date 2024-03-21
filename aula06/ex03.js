var agora = new Date()
var hr = agora.getHours()

console.log(`São exatamente ${hr} horas`)
if (hr >= 1 && hr < 6) {
    console.log('Boa Madrugada!')
} else if (hr > 6 && hr < 12) {
    console.log('Bom dia Flor do Dia')
} else if (hr > 12 && hr < 18) {
    console.log('Boa Tarde! Calor da Porra né')
} else if(hr > 18) {
    console.log('Boa noite, amigo!')
}