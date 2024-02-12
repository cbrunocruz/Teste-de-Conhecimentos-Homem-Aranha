const perguntas = [
    {
      pergunta: "Qual foi a primeira aparição do Homem-Aranha nos quadrinhos?",
      respostas: [
        "Amazing Fantasy #15",
        "Amazing Spider-Man #1",
        "Spectacular Spider-Man #1",
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi o primeiro vilão a aparecer no universo do Homem-Aranha?",
      respostas: [
        "Duende Verde",
        "Abutre",
        "Dr. Octopus",
      ],
      correta: 2
    },
    {
      pergunta: "Quem foi o primeiro Duende Verde, inimigo do Homem-Aranha?",
      respostas: [
        "Norman Osborn",
        "Wilson Fisk",
        "Harry Osborn",
      ],
      correta: 0
    },
    {
      pergunta: "Quem matou Gwen Stacy nas histórias em quadrinhos do Homem-Aranha?",
      respostas: [
        "Duende Verde",
        "Venom",
        "Electro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do cientista responsável pela criação dos tentáculos do Doutor Octopus?",
      respostas: [
        "Otto Octavius",
        "Curt Connors",
        "Miles Warren",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a identidade secreta do vilão Mysterio, inimigo do Homem-Aranha?",
      respostas: [
        "Otto Octavius",
        "Quentin Beck",
        "Mac Gargan",
      ],
      correta: 1
    },
    {
      pergunta: "Em que cidade fictícia o Homem-Aranha combate o crime?",
      respostas: [
        "Nova Jersey",
        "Los Angeles",
        "Nova York",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do laboratório onde Peter Parker é mordido por uma aranha radioativa?",
      respostas: [
        "Oscorp Industries",
        "Baxter Building",
        "Alchemax",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a habilidade especial do vilão Venom, que o torna um inimigo perigoso do Homem-Aranha?",
      respostas: [
        "Invisibilidade",
        "Regeneração rápida",
        "Simbionte",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a identidade secreta do vilão Duende Macabro, outro inimigo do Homem-Aranha?",
      respostas: [
        "Harry Osborn",
        "Roderick Kingsley",
        "Norman Osborn",
      ],
      correta: 1
    },
 ];
 
 
 const quiz = document.querySelector('#quiz')
 const template = document.querySelector('template')
 
 const corretas = new Set()
 const totalDePerguntas = perguntas.length
 const mostrarTotal = document.querySelector('#acertos span')
 mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
 
 //loop ou laço de repetição
 for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
   
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'perguntas-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
       
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
     
     
     quizItem.querySelector('dl').appendChild(dt)
   
   
   
   }
   
   quizItem.querySelector('dl dt').remove()
   
   // coloca a pergunta na tela
   quiz.appendChild(quizItem)
 
   }
 