//Projeto 01 – Projeto Detetive
//Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//1.	"Telefonou para a vítima?"
//2.	"Esteve no local do crime?"
//3.	"Mora perto da vítima?"
//4.	"Devia para a vítima?"
//5.  "Ja trabalhou com a vítima?"
//O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
//Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso , ele ser//classificado como "Inocente".\*

console.log('Você foi intimado a comparecer em uma Delegacia para ser investigado sobre um possível crime. Responda as perguntas do investigador deste caso.');

let sim = 0
let resp1 = parseInt(prompt('Você telefonou para a vítima? 1=Sim 0=Nao.'));
let resp2 = parseInt(prompt('Esteve no local do crime? 1=Sim 0=Nao.'));
let resp3 = parseInt(prompt('Mora perto da vítima? 1=Sim 0=Nao.'));
let resp4 = parseInt(prompt('Devia para a vítima? 1=Sim 0=Nao'));
let resp5 = parseInt(prompt('Ja trabalhou com a vítima? 1=Sim 0=Nao.'));

let soma = (resp1 + resp2 + resp3 + resp4 + resp5)


if(soma == 2){ 
  console.log("Suspeito");
}else if(soma == 3 || soma == 4 ){
  console.log("Cumplice");
}else if(soma == 5){
  console.log("Assassino");
}else{soma = 0<5
  console.log("Inocente")
}