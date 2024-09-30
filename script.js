let numeroCliente = Number(prompt("Digite o número da conta do cliente"))
let saldo = Number(prompt("Digite o saldo"))
let debito = Number(prompt("Digite o débito"))
let credito = Number(prompt("Digite o crédito"))

let saldoAtual = saldo - debito + credito

if (saldoAtual >= 0) {
    alert("Saldo positivo")
}else{
    alert("Saldo negativo")
}

