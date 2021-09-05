console.log("Olá, Bem-vindo ao DICE GAME")
console.log()

var rodadas = +prompt("DIGITE A QUANTIDADE DE RODADAS:");
console.log(`VOCÊ ESCOLHEU ${rodadas} RODADAS`);
console.log()

var jogadores = +prompt("Escolha quantos jogadores irão jogar.") 
console.log(`Você escolheu ${jogadores} jogadores!`)
console.log()

var listajogadores = []
for (let i = 1; i < rodadas; i++){
  console.log(`Rodada ${i}`);
  console.log()

for (let i = 1 ; i<=jogadores; i++){
  console.log(`Jogador ${i}`)


var aleatorio = ["1", "2", "3", "4", "5", "6"]; 
var jogador = {
  nome: prompt("Digite um nome?"),
  dado: aleatorio [Math.floor(Math.random() * aleatorio.length)]
};

  listajogadores.push(jogador);
  listajogadores.sort((a,b) => {
   if (b.dado < a.dado){
      return-1
    } else {
      return true};
})
}} 
console.log(listajogadores);
console.log(`Parabéns  ${listajogadores[0].nome} você venceu!!!`)

//obs: cada vez que pedir o nome do jogador 1 será contado uma rodada. 