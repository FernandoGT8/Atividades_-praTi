const prompt = require('prompt-sync')()

/*
Atividade 01 - Crie um objeto representando um produto com as propriedades: nome, preço, categoria e quantidade em estoque. Use for .in para percorrer e exibir todas as propriedades e seus valores. Em seguida, adicione uma nova propriedade desconto ao objeto e exiba o preço final calculado.
*/

/*
let produto = {
    nome: "Cadeira Gamer",
    preco: 1200,
    categoria: "Móveis",
    quantidadeEstoque: 15
}

console.log("--- Propriedades do Produto ---")
for (let chave in produto) {
    console.log(chave + ": " + produto[chave])
}
console.log("-------------------------------\n")

let porcentagemDesconto = Number(prompt("Digite a porcentagem de desconto (ex: 15 para 15%): "))

produto.desconto = porcentagemDesconto / 100

let valorDoDesconto = produto.preco * produto.desconto
let precoFinal = produto.preco - valorDoDesconto

console.log("")
console.log("--- Resumo Financeiro ---")
console.log("Preço original: R$ " + produto.preco.toFixed(2))
console.log("Preço final com desconto: R$ " + precoFinal.toFixed(2))
*/

/*
Atividade 02 - Crie dois objetos representando personagens de um jogo, cada um com as propriedades: nome, vida, ataque e defesa. Use for .in para exibir os atributos de cada personagem lado a lado e determine qual deles tem maior poder total (soma de vida + ataque + defesa).
*/

/*
let paladino = {
    nome: "Nyo",
    vida: 120,
    ataque: 25,
    defesa: 18
}

let mago = {
    nome: "Kai",
    vida: 85,
    ataque: 40,
    defesa: 10
}

console.log("--- Atributos dos Personagens ---")
for (let atributo in paladino) {
    console.log(atributo.toUpperCase() + " -> " + paladino[atributo] + "   |   " + mago[atributo])
}
console.log("---------------------------------\n")

let poderPaladino = paladino.vida + paladino.ataque + paladino.defesa
let poderMago = mago.vida + mago.ataque + mago.defesa

console.log("Poder Total de " + paladino.nome + ": " + poderPaladino)
console.log("Poder Total de " + mago.nome + ": " + poderMago)
console.log("---------------------------------")

if (poderPaladino > poderMago) {
    console.log("O personagem com maior poder total é: " + paladino.nome)
} else if (poderMago > poderPaladino) {
    console.log("O personagem com maior poder total é: " + mago.nome)
} else {
    console.log("Ambos os personagens possuem o mesmo poder total!")
}
*/

/*
Atividade 03 - Crie um objeto representando um funcionário com nome, cargo, salário e anos de experiência. Use for .in para listar todos os dados. Com base nos anos de experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5 anos = 10%, acima de 5 anos = 15%.
*/

/*
let funcionario = {
    nome: "Carlos Silva",
    cargo: "Desenvolvedor Backend",
    salario: 6000,
    anosExperiencia: 4
}

console.log("--- Dados do Funcionário ---")
for (let chave in funcionario) {
    console.log(chave + ": " + funcionario[chave])
}
console.log("-----------------------------\n")

let percentualBonus

if (funcionario.anosExperiencia <= 2) {
    percentualBonus = 0.05
} else if (funcionario.anosExperiencia <= 5) {
    percentualBonus = 0.10
} else {
    percentualBonus = 0.15
}

let valorBonus = funcionario.salario * percentualBonus

console.log("--- Cálculo do Bônus Anual ---")
console.log("Percentual aplicado: " + (percentualBonus * 100) + "%")
console.log("Valor do bônus: R$ " + valorBonus.toFixed(2))
*/

/*
Atividade 04 - Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for .in para listar o inventário completo. Permita que o usuário informe um item para usar: reduza a quantidade em 1 ou exiba "item esgotado" se for zero. 
*/

/*
let inventario = {
    espada: 1,
    pocao: 5,
    escudo: 2,
    pergaminho: 0
}

console.log("--- Inventário Completo ---")
for (let item in inventario) {
    console.log(item + ": " + inventario[item] + " unidade(s)")
}
console.log("---------------------------\n")

let itemParaUsar = prompt("Qual item você deseja usar? ").toLowerCase()

if (inventario[itemParaUsar] !== undefined) {
    
    if (inventario[itemParaUsar] > 0) {
        inventario[itemParaUsar]--
        console.log("\nVocê usou: " + itemParaUsar)
        console.log("Quantidade atualizada de " + itemParaUsar + ": " + inventario[itemParaUsar])
    } else {
        console.log("\nItem esgotado!")
    }

} else {
    console.log("\nEsse item não existe no seu inventário.")
}
*/

/*
Atividade 05 - Crie um objeto representando o orçamento mensal de uma pessoa, com categorias como alimentação, transporte, lazer e saúde, cada uma com valor planejado e valor gasto. Use for .in para percorrer as categorias e exibir se cada uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.
*/

/*
let orcamento = {
    alimentacao: { planejado: 600, gasto: 550 },
    transporte: { planejado: 300, gasto: 350 },
    lazer: { planejado: 200, gasto: 250 },
    saude: { planejado: 150, gasto: 120 }
}

let totalPlanejado = 0
let totalGasto = 0

console.log("--- Análise por Categoria ---")

for (let categoria in orcamento) {
    let planejado = orcamento[categoria].planejado
    let gasto = orcamento[categoria].gasto
    
    totalPlanejado += planejado
    totalGasto += gasto
    
    if (gasto <= planejado) {
        console.log(categoria.toUpperCase() + ": Dentro do orçamento (Sobrou R$ " + (planejado - gasto) + ")")
    } else {
        console.log(categoria.toUpperCase() + ": ACIMA do orçamento (Estourou R$ " + (gasto - planejado) + ")")
    }
}

console.log("---------------------------------\n")

let saldoGeral = totalPlanejado - totalGasto

console.log("--- Resumo Geral do Mês ---")
console.log("Total Planejado: R$ " + totalPlanejado)
console.log("Total Gasto: R$ " + totalGasto)

if (saldoGeral >= 0) {
    console.log("Saldo Geral: POSITIVO (Economizou R$ " + saldoGeral + ")")
} else {
    console.log("Saldo Geral: NEGATIVO (Prejuízo de R$ " + Math.abs(saldoGeral) + ")")
}
*/

/*
Atividade 06 - Crie um array de objetos representando músicas, cada uma com título, artista e duração em segundos. Use for .of para exibir cada música no formato "Artista — Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no mesmo formato.  
*/

/*
let playlist = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracao: 355 },
    { titulo: "Shape of You", artista: "Ed Sheeran", duracao: 233 },
    { titulo: "Blinding Lights", artista: "The Weeknd", duracao: 200 },
    { titulo: "Hotel California", artista: "Eagles", duracao: 390 }
]

console.log("--- Lista de Músicas ---")

for (let musica of playlist) {
    let minutos = Math.floor(musica.duracao / 60)
    let segundos = musica.duracao % 60

    if (segundos < 10) {
        segundos = "0" + segundos
    }

    console.log(musica.artista + " — " + musica.titulo + " (" + minutos + ":" + segundos + ")")
}

console.log("------------------------\n")

let duracaoTotalSegundos = 0

playlist.forEach(function(musica) {
    duracaoTotalSegundos += musica.duracao
})

let totalMinutos = Math.floor(duracaoTotalSegundos / 60)
let totalSegundos = duracaoTotalSegundos % 60

if (totalSegundos < 10) {
    totalSegundos = "0" + totalSegundos
}

console.log("--- Tempo Total da Playlist ---")
console.log("Duração Total: " + totalMinutos + ":" + totalSegundos)
*/

/*
Atividade 07 - Crie um array de objetos com nome e nota de 6 alunos. Use for .of para classificar cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use forEach para calcular e exibir separadamente a média dos aprovados e a média dos reprovados. 
*/

/*
let alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 4.2 },
    { nome: "Carlos", nota: 6.0 },
    { nome: "Diana", nota: 2.5 },
    { nome: "Eduarda", nota: 9.0 },
    { nome: "Felipe", nota: 5.5 }
]

console.log("--- Classificação dos Alunos ---")

for (let aluno of alunos) {
    let situacao

    if (aluno.nota >= 7.0) {
        situacao = "Aprovado"
    } else if (aluno.nota >= 5.0) {
        situacao = "Recuperação"
    } else {
        situacao = "Reprovado"
    }

    console.log(aluno.nome + " — Nota: " + aluno.nota + " [" + situacao + "]")
}

console.log("---------------------------------\n")

let somaAprovados = 0
let qtdAprovados = 0

let somaReprovados = 0
let qtdReprovados = 0

alunos.forEach(function(aluno) {
    if (aluno.nota >= 7.0) {
        somaAprovados += aluno.nota
        qtdAprovados++
    } else if (aluno.nota < 5.0) {
        somaReprovados += aluno.nota
        qtdReprovados++
    }
})

let mediaAprovados = qtdAprovados > 0 ? somaAprovados / qtdAprovados : 0
let mediaReprovados = qtdReprovados > 0 ? somaReprovados / qtdReprovados : 0

console.log("--- Médias dos Grupos ---")
console.log("Média dos alunos Aprovados: " + mediaAprovados.toFixed(1))
console.log("Média dos alunos Reprovados: " + mediaReprovados.toFixed(1))
*/

/*
Atividade 08 - Crie um array de objetos representando produtos com nome, preço e quantidade. Use forEach para calcular o valor total em estoque de cada produto (preço × quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o estoque.  
*/

/*
let produtos = [
    { nome: "Teclado Mecânico", preco: 250, quantidade: 8 },
    { nome: "Mouse Gamer", preco: 150, quantidade: 12 },
    { nome: "Monitor 24'", preco: 900, quantidade: 4 },
    { nome: "Headset USB", preco: 320, quantidade: 6 }
]

let valorTotalGeral = 0

console.log("--- Relatório de Estoque por Produto ---")

produtos.forEach(function(produto) {
    let valorTotalProduto = produto.preco * produto.quantidade
    
    valorTotalGeral += valorTotalProduto
    
    console.log("Produto: " + produto.nome + " | Qtd: " + produto.quantidade + " | Total: R$ " + valorTotalProduto.toFixed(2))
})

console.log("----------------------------------------\n")

console.log("--- Resumo Financeiro do Estoque ---")
console.log("Valor Total Geral em Estoque: R$ " + valorTotalGeral.toFixed(2))
*/

/*
Atividade 09 - Crie um array de objetos onde cada objeto representa um contato com nome, telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita buscar um contato pelo nome usando for .of e exiba os dados encontrados ou uma mensagem de "não encontrado". 
*/

/*
let agenda = [
    { nome: "Ana Costa", telefone: "1199999-1111", email: "ana.costa@email.com" },
    { nome: "Bruno Ramos", telefone: "2198888-2222", email: "bruno.ramos@email.com" },
    { nome: "Carla Souza", telefone: "3197777-3333", email: "carla.souza@email.com" }
]

console.log("--- Lista Completa de Contatos ---")

agenda.forEach(function(contato) {
    console.log("Nome: " + contato.nome + " | Tel: " + contato.telefone + " | E-mail: " + contato.email)
})

console.log("----------------------------------\n")

let nomeBusca = prompt("Digite o nome do contato que deseja buscar: ")

let contatoEncontrado = null

for (let contato of agenda) {
    if (contato.nome.toLowerCase() === nomeBusca.toLowerCase()) {
        contatoEncontrado = contato
        break
    }
}

console.log("\n--- Resultado da Busca ---")
if (contatoEncontrado !== null) {
    console.log("Contato Localizado!")
    console.log("Nome: " + contatoEncontrado.nome)
    console.log("Telefone: " + contatoEncontrado.telefone)
    console.log("E-mail: " + contatoEncontrado.email)
} else {
    console.log("Contato não encontrado.")
}
*/

/*
Atividade 10 - Implemente uma pilha usando um array para simular o histórico de um navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual() (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a cada operação. 
*/

/*
let historico = []

function visitar(pagina) {
    historico.push(pagina)
    console.log("Visitando: " + pagina)
}

function voltar() {
    if (historico.length > 1) {
        let paginaRemovida = historico.pop()
        console.log("Voltando de: " + paginaRemovida)
    } else if (historico.length === 1) {
        let paginaRemovida = historico.pop()
        console.log("Voltando de: " + paginaRemovida + " (Histórico agora está vazio)")
    } else {
        console.log("Não há páginas para voltar no histórico.")
    }
}

function paginaAtual() {
    if (historico.length > 0) {
        return historico[historico.length - 1]
    }
    return "Nenhuma página aberta"
}

console.log("--- Iniciando Sessão de Navegação ---")

visitar("google.com")
console.log("Página Atual: " + paginaAtual() + "\n")

visitar("github.com")
console.log("Página Atual: " + paginaAtual() + "\n")

visitar("stackoverflow.com")
console.log("Página Atual: " + paginaAtual() + "\n")

visitar("linkedin.com")
console.log("Página Atual: " + paginaAtual() + "\n")

console.log("--- Executando Operações de Voltar ---")

voltar()
console.log("Página Atual: " + paginaAtual() + "\n")

voltar()
console.log("Página Atual: " + paginaAtual() + "\n")

console.log("--- Fim da Simulação ---")
*/

/*
Atividade 11 - Implemente uma fila usando um array para simular o atendimento de uma clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo() (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3, exibindo o estado da fila a cada operação.  
*/

/*
let filaClinica = []

function chegarPaciente(nome) {
    filaClinica.push(nome)
    console.log("Paciente " + nome + " chegou e entrou na fila.")
}

function chamarProximo() {
    if (filaClinica.length > 0) {
        let proximo = filaClinica.shift()
        console.log("Atendendo agora: " + proximo)
    } else {
        console.log("Não há pacientes aguardando na fila.")
    }
}

function exibirFila() {
    console.log("--- Estado Atual da Fila ---")
    if (filaClinica.length > 0) {
        filaClinica.forEach(function(paciente, indice) {
            console.log((indice + 1) + "º - " + paciente)
        })
    } else {
        console.log("[Fila Vazia]")
    }
    console.log("----------------------------")
}

console.log("--- Simulando Atendimento na Clínica ---\n")

chegarPaciente("Ana")
exibirFila()
console.log("")

chegarPaciente("Bruno")
exibirFila()
console.log("")

chegarPaciente("Carlos")
exibirFila()
console.log("")

chegarPaciente("Diana")
exibirFila()
console.log("")

chegarPaciente("Eduardo")
exibirFila()
console.log("\n--- Iniciando os Atendimentos ---\n")

chamarProximo()
exibirFila()
console.log("")

chamarProximo()
exibirFila()
console.log("")

chamarProximo()
exibirFila()

console.log("\n--- Fim da Simulação ---")
*/

/*
Atividade 12 - Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós. Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e exiba a lista antes e depois. 
*/

/*
let primeiraTarefa = null

function adicionar(tarefa) {
    let novoNo = {
        valor: tarefa,
        proximo: null
    }

    if (primeiraTarefa === null) {
        primeiraTarefa = novoNo
    } else {
        let atual = primeiraTarefa
        while (atual.proximo !== null) {
            atual = atual.proximo
        }
        atual.proximo = novoNo
    }
    console.log("Tarefa adicionada: '" + tarefa + "'")
}

function remover(tarefa) {
    if (primeiraTarefa === null) {
        console.log("A lista está vazia. Não há o que remover.")
        return
    }

    if (primeiraTarefa.valor === tarefa) {
        primeiraTarefa = primeiraTarefa.proximo
        console.log("Tarefa removida: '" + tarefa + "'")
        return
    }

    let atual = primeiraTarefa
    let anterior = null

    while (atual !== null && atual.valor !== tarefa) {
        anterior = atual
        atual = atual.proximo
    }

    if (atual !== null) {
        anterior.proximo = atual.proximo
        console.log("Tarefa removida: '" + tarefa + "'")
    } else {
        console.log("Tarefa '" + tarefa + "' não foi encontrada para remoção.")
    }
}

function exibir() {
    console.log("--- Lista de Tarefas Atual ---")
    if (primeiraTarefa === null) {
        console.log("[Lista Vazia]")
        console.log("------------------------------")
        return
    }

    let atual = primeiraTarefa
    let posicao = 1
    
    while (atual !== null) {
        console.log(posicao + "º -> " + atual.valor)
        atual = atual.proximo
        posicao++
    }
    console.log("------------------------------")
}

console.log("--- Criando e Alimentando a Lista ---")
adicionar("Estudar JavaScript")
adicionar("Lavar a louça")
adicionar("Comprar pão")
adicionar("Academia às 19h")

console.log("\nExibindo o estado inicial:")
exibir()

console.log("\n--- Executando Remoção ---")
remover("Lavar a louça")

console.log("\nExibindo o estado final:")
exibir()
*/