console.log("Bem Vindo Ao Jogo Iterativo, Cuidado com suas Escolhas!");
console.log("        ============================================");
console.log("Você está chegando em sua casa depois de um cansativo dia de trabalho. Ao chegar em sua rua tudo parece estar muito tranquilo, porém, isto te deixa meio espantado pois ela costuma estar sempre movimentada...😕");

console.log("        ===========================================");

class Casa{
  constructor(){
     this.luzes = false
  }
  acenderluzes(){
     this.luzes = true;
     console.log(" Você acendeu as luzes");
  }
}

let casa = new Casa();
console.log("Em sua casa, você ouve um barulho...");

while (true){
console.log(`
O que você ira fazer?
1. Verificar a sala
2. Verificar a cozinha
3. Verificar o quarto
4. Acender as luzes
0. Sair do jogo
`)
let opcao = +prompt("Qual sua escolha");

if (opcao == 0){
  console.log("Muito Obrigado Por Jogar!!!");
  break
} else if (opcao == 4){
  casa.acenderluzes();
} else if (opcao == 3){
    if (casa.luzes == false){
      console.log("Entramos, mas como as luzes estavam apagadas você tropeçou");
    } else {
      console.log("Você observa que uma joia valiosa sumiu");
    }
} else if (opcao == 2){3
    if (casa.luzes == false){
      console.log(",Entramos, mas como as luzes estavam apagadas você tropeçou");
    } else {
      console.log("Na cozinha tudo parece normal.");
    }
} else if (opcao == 1){
    if (casa.luzes == false){
      console.log("Entramos, mas como as luzes estavam apagadas você tropeçou");
    } else {
      console.log("Na sala você encontra gavetas reviradas");
    }
  }
}