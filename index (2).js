var rodadas = prompt("Quantas rodadas você deseja jogar???");
console.log(`Você escolheu ${rodadas} rodadas.`);

for (var i = 0; i < rodadas; i++){

  let usuario = 0;
  let pc = 0;

var aleatorio = ["0", "1", "2"];
var escolhapc = aleatorio[Math.floor(Math.random() * aleatorio.length)];

var opcoes = +prompt("Qual a sua escolha? (digite 0, 1 ou 2) 0 = papel, 1 = pedra, 2 = tesoura");

if (opcoes == "0" && escolhapc == "1") {
    console.log('Você ganhou!');
    usuario = usuario + 1
  } else if (opcoes == "0" && escolhapc == "2") {
    console.log('Você perdeu!');
    pc = pc + 1
  } else if (opcoes == "0" && escolhapc == "0") {
    console.log('Empatou!');
  } else if (opcoes == "1" && escolhapc == "2") {
    console.log('Você ganhou!');
    usuario = usuario + 1
  } else if (opcoes == "1" && escolhapc == "0") {
    console.log('Você perdeu!');
    pc = pc + 1
  } else if (opcoes == "1" && escolhapc == "1") {
    console.log('Empatou!');
  }else if (opcoes == "2" && escolhapc == "0") {
    console.log('Você ganhou!');
    usuario = usuario + 1
  } else if (opcoes == "2" && escolhapc == "1") {
    console.log('Você perdeu!');
    pc = pc + 1
  } else if (opcoes == "2" && escolhapc == "2") {
    console.log('Empatou!');
  } 
  console.log(`Você ganhou ${usuario} rodadas, o pc ganhou ${pc}`)
  if (usuario > pc){
    console.log("Você ganhou!!!!")
  }else if(usuario == pc){
    console.log("Houve um empate")
  }else if(usuario < pc){
    console.log("Você perdeu!")
  }
}

let pergunta = prompt("Deseja Jogar novamente? 0 = Não ou 1 = Sim")

if(pergunta = 1){
  while(pergunta == "1"){
    pergunta++
  }
}else{console.log("FIM DE JOGO!!!")}
