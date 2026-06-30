const prompt = require('prompt-sync')();

/* 
Atividade 01 - Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5). 
*/

/*
const nota = Number(prompt("Qual a nota do aluno? "));
if(nota >= 7){
    console.log("Aluno aprovado")
}else if(nota >= 5){
    console.log("Aluno de recuperação")
}else if (nota >= 0){
    console.log("Aluno reprovado")
}else{
    console.log("Nota inválida")
}
*/

/*
Atividade 02 - Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais). 
*/

/*
const idade = Number(prompt("Qual a sua idade? "))

if(idade <= 12){
    console.log("Você é uma criança")
}else if(idade <= 17){
    console.log("Você é um adolescente")
}else if(idade <= 59){
    console.log("Você é um adulto")
}else{
    console.log("Você é um idoso")
}
*/

/*
Atividade 03 - Escreva um programa que pergunte o salário mensal de um funcionário e o percentual de aumento concedido pela empresa. Caso o salário seja menor que R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o novo salário do funcionário.
*/

/*
const salario = Number(prompt("Qual é o seu salário? "))
const aumentoSalário = Number(prompt("Quantos % aumentou seu salário? "))
let novoSalario = 0

novoSalario = salario + (salario * (aumentoSalário / 100))

if(salario < 1500){
    novoSalario = salario + (salario * ((aumentoSalário * 2) / 100))
}

console.log(`Seu novo salário ajustado é de ${novoSalario}`)
*/

/* 
Atividade 04 - Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar funções prontas como Math.max(). 
*/

/*
const num1 = Number(prompt("Qual o primeiro número? "))
const num2 = Number(prompt("Qual o segundo número? "))
const num3 = Number(prompt("Qual o terceiro número? "))

let maiorNumero = num1;

if (num2 > maiorNumero) {
    maiorNumero = num2;
}
if (num3 > maiorNumero) {
    maiorNumero = num3;
}

console.log(`O maior número é ${maiorNumero}`)
*/

/*
Atividade 05 - Uma loja oferece desconto progressivo conforme o valor da compra. Faça um programa que leia o valor total de uma compra e aplique as seguintes regras: compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$ 299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem  15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o valor original, o desconto aplicado e o valor final a pagar. 
*/

/*
const valorCompra = Number(prompt("Qual o valor da compra? "))
let percentual = 0
let valorComDesconto = 0

if(valorCompra < 100){
    percentual = 0
    valorComDesconto = valorCompra
}else if(valorCompra <= 299.99){
    percentual = 10
    valorComDesconto = valorCompra - (percentual / 100) * valorCompra
}else if(valorCompra <= 499.99){
    percentual = 15
    valorComDesconto = valorCompra - (percentual / 100) * valorCompra
}else{
    percentual = 20
    valorComDesconto = valorCompra - (percentual / 100) * valorCompra
}

console.log(`O valor original da compra é de R$ ${valorCompra.toFixed(2)}, o desconto aplicado é de ${percentual}%, o valor final que pagará é: R$ ${valorComDesconto.toFixed(2)}`)
*/

/*
Atividade 06 - Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para compor o saque.
*/

/*
let valor = parseInt(prompt('Informe o valor do saque (Múltiplo de R$ 10): '))

if(!valor || valor <= 0 || valor % 10 !== 0) {
    console.log("Valor inválido! Deve ser positivo e múltiplo de 10.")
} else {
    let restante = valor

    let notas100 = Math.floor(restante / 100)
    restante = restante % 100

    let notas50 = Math.floor(restante / 50)
    restante = restante % 50

    let notas20 = Math.floor(restante / 20)
    restante = restante % 20

    let notas10 = Math.floor(restante / 10)
    restante = restante % 10

    let totalCedulas = notas100 + notas50 + notas20 + notas10

    console.log(`\nSaque: R$ ${valor}`)
    console.log("---------------------------")
    if (notas100 > 0) {
        console.log(`${notas100} nota(s) de R$ 100`)
    }
    if (notas50 > 0) {
        console.log(`${notas50} nota(s) de R$ 50`)
    }
    if (notas20 > 0) {
        console.log(`${notas20} nota(s) de R$ 20`)
    }
    if (notas10 > 0) {
        console.log(`${notas10} nota(s) de R$ 10`)
    }
    console.log("---------------------------")
    console.log(`Total de cédulas: ${totalCedulas}`)
}
*/

/*
Atividade 07 - Faça um programa que funcione como uma calculadora básica. Leia dois números e uma operação desejada (+, -, *, /). Usando switch case, realize a operação correspondente e exiba o resultado. Trate o caso de divisão por zero e de operação inválida.  
*/

/*
const num1 = Number(prompt("Digite o primeiro número:"))
const operador = prompt("Digite a operação desejada (+, -, *, /):")
const num2 = Number(prompt("Digite o segundo número:"))
let resultado
let erro = false

switch (operador) {
    case '+':
        resultado = num1 + num2
        break
    case '-':
        resultado = num1 - num2
        break
    case '*':
        resultado = num1 * num2
        break
    case '/':
        if (num2 === 0) {
            console.error("Erro: Divisão por zero não é permitida no conjunto dos reais.")
            erro = true
        } else {
            resultado = num1 / num2
        }
        break
    default:
        console.error("Erro: Operador inválido. Use apenas +, -, * ou /.")
        erro = true;
        break
}

if (!erro) {
    console.log(`Resultado: ${num1} ${operador} ${num2} = ${resultado}`)
}
*/

/*
Atividade 08 -  Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando 
switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido. 
*/

/*
console.log("--- TAMANHOS DE PIZZA ---")
console.log("1 - Pequena (P)  [R$ 25,00]")
console.log("2 - Média (M)    [R$ 35,00]")
console.log("3 - Grande (G)   [R$ 45,00]")
const opcaoTamanho = Number(prompt("Escolha o número correspondente ao tamanho:"))

console.log("\n--- TIPOS DE BORDA ---")
console.log("1 - Tradicional  [Grátis]")
console.log("2 - Recheada     [+ R$ 8,00]")
const opcaoBorda = Number(prompt("Escolha o número correspondente à borda:"))

let precoBase = 0
let erro = false
let tamanhoTexto = ""
let bordaTexto = ""

switch (opcaoTamanho) {
    case 1:
        precoBase = 25.00
        tamanhoTexto = "Pequena (P)"
        break
    case 2:
        precoBase = 35.00
        tamanhoTexto = "Média (M)"
        break
    case 3:
        precoBase = 45.00
        tamanhoTexto = "Grande (G)"
        break
    default:
        console.error("Erro: Opção de tamanho inválida.")
        erro = true
        break
}

if (!erro) {
    let valorTotal = precoBase

    switch (opcaoBorda) {
        case 1:
            bordaTexto = "Tradicional";
            break
        case 2:
            bordaTexto = "Recheada";
            valorTotal += 8.00
            break
        default:
            console.error("Erro: Opção de borda inválida.")
            erro = true
            break
    }

    if (!erro) {
        console.log("\n=========================")
        console.log(`Pedido: Pizza ${tamanhoTexto}`)
        console.log(`Borda: ${bordaTexto}`)
        console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`)
        console.log("=========================")
    }
}
*/

/*
Atividade 09 - Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba o nome do mês correspondente e quantos dias ele possui. Para fevereiro, pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29 caso seja.
*/

/*
const mes = Number(prompt("Digite o número do mês (1 a 12):"))
let nomeMes = ""
let dias = 0
let erro = false

switch (mes) {
    case 1:
        nomeMes = "Janeiro"
        dias = 31
        break
    case 2:
        nomeMes = "Fevereiro"
        const bissexto = prompt("O ano atual é bissexto? (Digite 1 para SIM ou 2 para NÃO):")
        
        if (bissexto === "1") {
            dias = 29
        } else if (bissexto === "2") {
            dias = 28
        } else {
            console.error("Erro: Opção inválida para ano bissexto.")
            erro = true
        }
        break
    case 3:
        nomeMes = "Março"
        dias = 31
        break
    case 4:
        nomeMes = "Abril"
        dias = 30
        break
    case 5:
        nomeMes = "Maio"
        dias = 31
        break
    case 6:
        nomeMes = "Junho"
        dias = 30
        break
    case 7:
        nomeMes = "Julho"
        dias = 31
        break
    case 8:
        nomeMes = "Agosto"
        dias = 31
        break
    case 9:
        nomeMes = "Setembro"
        dias = 30
        break
    case 10:
        nomeMes = "Outubro"
        dias = 31
        break
    case 11:
        nomeMes = "Novembro"
        dias = 30
        break
    case 12:
        nomeMes = "Dezembro"
        dias = 31
        break
    default:
        console.error("Erro: Mês inválido. Digite um número de 1 a 12.")
        erro = true
        break
}

if (!erro) {
    console.log(`O mês de ${nomeMes} possui ${dias} dias.`)
}
*/

/*
Atividade 10 - Um estacionamento cobra por faixas de tempo. Faça um programa que leia quantas horas um veículo ficou estacionado e, usando switch case com intervalos, calcule o valor a pagar conforme a tabela: 1ª hora = R$ 8,00; 2ª hora = R$ 6,00; 3ª hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.
*/

/*
let horas = Number(parseInt(prompt("Informe o número de horas estacionado: ")))

if(!horas || horas < 1) {
    console.error("Número de horas inválido")
} else {
    let valor = 0
    let extras = 0

    switch(true) {
        case horas === 1:
            valor = 8
            break
        case horas === 2:
            valor = 8 + 6
            break
        case horas === 3:
            valor = 8 + 6 + 4
            break

        default:
            extras = horas - 3
            valor = 8 + 6 + 4 + (extras * 2)
    }

    console.log(`Tempo estacionado: ${horas} hora(s)`)
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`)
}
*/