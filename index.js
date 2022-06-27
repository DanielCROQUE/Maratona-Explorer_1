const elementoResposta = document.querySelector 
("#resposta")
const inputPergunta = document.querySelector 
("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "certeza!",
  "Nao tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas.",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "Ao meu ver, sim.",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possivel prever agora.",
  "Perspectivas boas.",
  "As perspectivas não são boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."

]


function fazerPergunta() {
if(inputPergunta.value == "") {
  alert("Digite sua Pergunta")
   return
}
buttonPerguntar.setAttribute("disable",true)

const pergunta ="<div>" + inputPergunta.value + "</div>"



  const totalRespostas = respostas.length
const numeroAleatorio = Math.floor( Math.random() 
* totalRespostas)
console.log(respostas[numeroAleatorio])
  elementoResposta.innerHTML = pergunta + 
  respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}
