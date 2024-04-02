const num = ["maçã", "banana", "abacaxi"]
num.push("limão")
let pos = num.length
console.log(num)

for (pos in num) {
    console.log(`O índice ${pos} tem o valor ${num[pos]}`)
}