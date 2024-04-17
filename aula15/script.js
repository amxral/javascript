function juntar() {
    // Definindo as variáveis 
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const res = document.getElementById('res');

    let num1 = Number(n1);
    let num2 = Number(n2);

    // Soma entre n1 e n2
    let soma = num1 + num2;

    // Resultado 
    res.innerHTML = `${n1}` + `${n2}`;
}

function hello() {
    // Definindo as variáveis
    const n1 = document.getElementById('n1');
    const n2 = document.getElementById('n2')
    const res = document.getElementById('res01')

    // Restultado 
    res.innerHTML = 'Hello World!'
}

function soma() {
    //Definindo variáveis
    const n1 = document.getElementById('nu1').value;
    const n2 = document.getElementById('nu2').value;
    const res = document.getElementById('res02');

    //Transformando string em número
    let num1 = Number(n1);
    let num2 = Number(n2);

    // Somando os Valores
    const soma = num1 + num2;

    // Resultado 
    res.innerHTML = `${soma}`
}