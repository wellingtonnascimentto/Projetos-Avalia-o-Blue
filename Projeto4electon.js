console.log("ELEIÇÔES DE 2022");
console.log()
console.log("EXERÇA SEU DIREITO DE CIDADÂO!");
console.log()

  var candidato1 = 0
  var candidato2 = 0
  var candidato3 = 0
  var nulo = 0
  var branco = 0



function autorizaVoto(anoNascimento){
  let idade = 2021 - anoNascimento

  if (idade >= 18 && idade <= 69) {
    return "Obrigatorio";
  } else if(idade <= 17) {
    return "Negado";
  } else if (idade >= 70) {
    return "Opcional";
  }
}

function votacao(autorizacao, voto){
  if (autorizacao == "Obrigatorio"){
    if (voto == 1){
      console.log("Você votou no Bolsonaro!");
      candidato1++
    } else if (voto == 2){
      console.log("Você votou no Doria");
      candidato2++
    } else if (voto == 3){
      console.log("Você votou na Marina");
      candidato3++
    } else if (voto == 4){
      console.log("Você votou Nulo");
      nulo++
    } else if (voto == 5){
      console.log("Você votou em Branco");
      branco++
    }
  }
}

function exibirResultados(){
    console.log(`Bolsonaro teve: ${candidato1} VOTOS! `);
    console.log(`Doria teve: ${candidato2} VOTOS! `);
    console.log(`Marina teve: ${candidato3} VOTOS! `);
    console.log(`NESSA ELEIÇÃO TIVEMOS: ${nulo} VOTOS NULOS! `);
    console.log(`NESSA ELEIÇÃO TIVEMOS: ${branco} VOTOS BRANCOS! `);

  if (candidato1 > candidato2 && candidato3 < candidato1){
    console.log ("COM A MAIORIA DOS VOTOS O CANDIDATO ELEITO É O Bolsonaro !!!");
  } else if (candidato2 > candidato3 && candidato1 < candidato2){
    console.log("COM A MAIORIA DOS VOTOS O CANDIDATO ELEITO É O Doria !!! ");
  } else if (candidato3 > candidato1 && candidato2 < candidato3){
    console.log("COM A MAIORIA DOS VOTOS A CANDIDATA ELEITA É A MArina!!!");
  } else if (nulo > candidato1 && nulo > candidato2 && nulo > candidato3){ 
    console.log("Ninguém ganhou a votação");
  } else if (branco > candidato1 && branco > candidato2 && branco > candidato3){
    console.log("Ainda não teremos um presidente!!!")      
  } else if  ( candidato1  ===  candidato2  &&  candidato1  ===  candidato3 )  {
    console.log ( "temos um empate" ) ;
  } else if  ( candidato1  ===  candidato2  &&  candidato1  >  candidato3 )  {
    console.log ( "temos um empate" ) ;
  } else if  ( candidato1  ===  candidato3  &&  candidato1  >  candidato2 )  {
    console.log ( "temos um empate" ) ;
  } else if  ( candidato2  ===  candidato3  &&  candidato2  >  candidato1 )  {
    console.log ( "temos um empate" ) ;
  } else if  ( candidato2  ===  candidato1  &&  candidato2  >  candidato3 )  {
    console.log ( "temos um empate" ) ;
  } else if  ( candidato3  ===  candidato2  &&  candidato3  >  candidato1 )  {
    console.log ( "temos um empate" ) ;
  } else if  ( candidato3  ===  candidato2  &&  candidato3  >  candidato2 )  {
    console.log ( "temos um empate" ) ;
  }
}
    
      

do {

let ano_usuario = +prompt("Qual seu ano de Nascimento?");
let idade_usuario = autorizaVoto(ano_usuario);
console.log(`A idade do usuario é ${idade_usuario}.`);



console.log()

  console.log("Os Candidatos a Presidência são: ");
  console.log("Bolsonaro = 1 ");
  console.log("Dilma = 2 ");
  console.log("Doria = 3 ");
  console.log("Voto Nulo = 4 ");
  console.log("Voto em Branco = 5 ");
  let votos = prompt("Digite seu Voto: ");
  votacao(idade_usuario, votos)


votarNovamente = prompt("Você quer computar mais um voto? Digite 1 para sim e 2 para não: ")

while (votarNovamente != 2 && votarNovamente != 1) {
        votarnovamente = prompt("Digite 1 para registrar um novo voto ou 2 para encerrar a votação. ");
        }
        if (votarNovamente == 2) {
            console.log("Fim da votação!")
        }

} while (votarNovamente == 1)

console.log() 
console.log("Obrigado por votar");
exibirResultados()
