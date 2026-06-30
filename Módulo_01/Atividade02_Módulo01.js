const prompt = require('prompt-sync')();

/*
Atividade 01 - Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto a resposta for "sim".
*/

/*
let continuar = "s"

while (continuar === "s") {
    
    let entrada = prompt("Digite um número para ver a tabuada:")
    let numero = parseInt(entrada)

    if (!isNaN(numero)) {
        console.log("Tabuada do " + numero + ":")
        
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i
            console.log(numero + " x " + i + " = " + resultado)
        }
    } else {
        console.log("Por favor, digite apenas números válidos.")
    }

    continuar = prompt("Deseja ver outra tabuada? (s para sim, n para não)")
}

console.log("Programa encerrado.")
*/

/*
Atividade 02 - Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).  
*/

/*
let numero = parseInt(prompt("Digite um número inteiro positivo:"))
let contador = 0
let temp = numero

if (temp === 0) {
    contador = 1
} else {
    while (temp > 0) {
        temp = Math.floor(temp / 10)
        contador++
    }
}

console.log("O número " + numero + " possui " + contador + " dígito(s).")
*/

/*
Atividade 03 - Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13…  
*/

/*
let quantidade = parseInt(prompt("Quantos termos da sequência de Fibonacci você deseja ver?"))

if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Por favor, digite um número inteiro positivo.")
} else {
    let termoAnterior = 0
    let termoAtual = 1
    let sequencia = ""

    for (let i = 1; i <= quantidade; i++) {
        sequencia += termoAtual + (i < quantidade ? ", " : "")
        
        let proximo = termoAnterior + termoAtual
        termoAnterior = termoAtual
        termoAtual = proximo
    }

    console.log(sequencia);
}
*/

/*
Atividade 04 - Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço do .while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as tentativas.  
*/

/*
const senhaCorreta = "1234"
const limiteTentativas = 3
let tentativas = 0
let acertou = false

do {
    let senhaDigitada = prompt("Digite a senha (tentativa " + (tentativas + 1) + "/" + limiteTentativas + "): ")
    
    if (senhaDigitada === senhaCorreta) {
        acertou = true
    } else {
        tentativas++
        if (tentativas < limiteTentativas) {
            console.log("Senha incorreta. Tente novamente.")
        }
    }
} while (tentativas < limiteTentativas && !acertou)

if (acertou) {
    console.log("Acesso concedido.")
} else {
    console.log("Acesso bloqueado. Limite de tentativas excedido.")
}
*/

/*
Atividade 05 - Leia um número N e exiba todos os números primos entre 2 e N usando laços aninhados (for dentro de for). Exiba também a quantidade total de primos encontrados.  
*/

/*
const n = parseInt(prompt("Digite um número limite (N): "))
let contadorPrimos = 0
let listaPrimos = ""

for (let num = 2; num <= n; num++) {
    let ehPrimo = true

    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
            ehPrimo = false
            break
        }
    }

    if (ehPrimo) {
        listaPrimos += num + " "
        contadorPrimos++
    }
}

console.log("Números primos encontrados: " + listaPrimos)
console.log("Total de números primos: " + contadorPrimos)
*/

/*
Atividade 06 - Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média da turma, o nome do aluno com maior nota e o nome do aluno com menor nota. Não use funções prontas como Math.max(). 
*/

/*
let alunos = []
let somaNotas = 0

for (let i = 0; i < 5; i++) {
    console.log(`\nAluno ${i + 1}:`)
    let nome = prompt("Nome: ")
    let nota = parseFloat(prompt("Nota: "))

    alunos.push({ nome: nome, nota: nota })
    somaNotas += nota
}

let media = somaNotas / 5
let alunoMaior = alunos[0]
let alunoMenor = alunos[0]

for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota > alunoMaior.nota) {
        alunoMaior = alunos[i]
    }
    if (alunos[i].nota < alunoMenor.nota) {
        alunoMenor = alunos[i]
    }
}

console.log("")
console.log(`Média da turma: ${media.toFixed(2)}`)
console.log(`Maior nota: ${alunoMaior.nome} (${alunoMaior.nota})`)
console.log(`Menor nota: ${alunoMenor.nome} (${alunoMenor.nota})`)
*/

/*
Atividade 07 -  Simule um carrinho de compras: leia nomes e preços de produtos em um laço até o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a pagar.  
*/

/*
let nomes = []
let precos = []
let subtotal = 0

console.log("--- Sistema de Carrinho de Compras ---")
console.log("Digite 'sair' no campo de nome para finalizar.\n")

while (true) {
    let nome = prompt("Nome do produto: ")
    
    if (nome.toLowerCase() === 'sair') {
        break
    }
    
    let preco = parseFloat(prompt("Preço do produto: "))
    
    nomes.push(nome)
    precos.push(preco)
    subtotal += preco
}

let quantidade = nomes.length
let desconto = 0

if (quantidade > 3) {
    desconto = subtotal * 0.10
}
let totalAPagar = subtotal - desconto

console.log("\n--- Resumo do Carrinho ---")
for (let i = 0; i < quantidade; i++) {
    console.log(`${nomes[i]}: R$ ${precos[i].toFixed(2)}`)
}

console.log("--------------------------")
console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`)
if (desconto > 0) {
    console.log(`Desconto aplicado (10%): -R$ ${desconto.toFixed(2)}`)
}
console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`)
*/

/*
Atividade 08 - Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de trás para frente com um laço for, monte a palavra invertida. Exiba a palavra original, a invertida e informe se ela é um palíndromo.
*/

/*
const palavraOriginal = prompt("Digite uma palavra: ")
const caracteres = palavraOriginal.split('')
let palavraInvertida = ""

for (let i = caracteres.length - 1; i >= 0; i--) {
    palavraInvertida += caracteres[i]
}

console.log("\nOriginal: " + palavraOriginal)
console.log("Invertida: " + palavraInvertida)

if (palavraOriginal.toLowerCase() === palavraInvertida.toLowerCase()) {
    console.log("É um palíndromo.")
} else {
    console.log("Não é um palíndromo.")
}
*/

/*
Atividade 09 - Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do .while, peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e quantas tentativas foram necessárias. 
*/

/*
const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativas = []
let palpite
let acertou = false

console.log("--- Jogo de Adivinhação ---")
console.log("Tente adivinhar o número entre 1 e 100.")

do {
    palpite = parseInt(prompt("Digite seu palpite: "))
    
    tentativas.push(palpite)

    if (isNaN(palpite)) {
        console.log("Por favor, digite um número válido.")
    } else if (palpite < numeroSecreto) {
        console.log("O número secreto é MAIOR.")
    } else if (palpite > numeroSecreto) {
        console.log("O número secreto é MENOR.")
    } else {
        acertou = true
        console.log("Parabéns! Você acertou.")
    }
} while (!acertou)

console.log("\n--- Resumo do Jogo ---")
console.log("Histórico de tentativas: " + tentativas.join(", "))
console.log("Total de tentativas: " + tentativas.length)
*/

/*
Atividade 10 - Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados. Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve o melhor desempenho. 
*/

/*
const numAlunos = 3
const numNotas = 4
let matriz = []
let mediasAlunos = []
let somaGeral = 0

for (let i = 0; i < numAlunos; i++) {
    matriz[i] = []
    let somaAluno = 0
    console.log(`\n--- Aluno ${i + 1} ---`)
    
    for (let j = 0; j < numNotas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite a nota ${j + 1}: `))
        somaAluno += matriz[i][j]
    }
    
    let media = somaAluno / numNotas
    mediasAlunos.push(media)
    somaGeral += media
}

let mediaTurma = somaGeral / numAlunos
let indiceMelhor = 0

for (let i = 1; i < mediasAlunos.length; i++) {
    if (mediasAlunos[i] > mediasAlunos[indiceMelhor]) {
        indiceMelhor = i
    }
}

console.log("\n--- Resultados Finais ---")
for (let i = 0; i < numAlunos; i++) {
    console.log(`Média do Aluno ${i + 1}: ${mediasAlunos[i].toFixed(2)}`)
}
console.log(`\nMédia Geral da Turma: ${mediaTurma.toFixed(2)}`)
console.log(`Melhor desempenho: Aluno ${indiceMelhor + 1} com média ${mediasAlunos[indiceMelhor].toFixed(2)}`)
*/