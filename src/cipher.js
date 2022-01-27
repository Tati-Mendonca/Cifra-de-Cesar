const cipher = {

  }


let entrada = document.getElementById("entrada")
let saida = document.getElementById("saida")
let number = document.getElementById("number");
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//console.log (alfabeto);

for (let i = 0; i < alfabeto.length; i++) { //loop nas letras do Alfabeto
    console.log(i,alfabeto)
}


entrada.onkeyup = function(){ // textarea entrada qnd alguem digita o valor é enviado a textarea saida
  let valor = entrada.value.toUpperCase(); 
  let codigoDaLetraAsc = valor.charCodeAt() - 65; //codigo funcionando Alfabeto inicia em 0
  let deslocamento = parseInt(codigoDaLetraAsc) + parseInt(number.value); // código somando corretamente!
  let retornarCodAsc = deslocamento % 26 + 65; // retorno do alfabeto
  let code = String.fromCharCode(retornarCodAsc)

  saida.value = code; //caixa de saida
}


  export default cipher;



