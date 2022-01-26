const cipher = {

  }


let entrada = document.getElementById("entrada")
let saida = document.getElementById("saida")
let number = document.getElementById("number");
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let chave = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 21, 22, 23, 24, 25];


for (let letra of alfabeto){ //pegar uma letra da string Alfabeto
    console.log(letra)
}

entrada.onkeyup = function(){ // textarea entrada qnd alguem digita o valor é enviado a textarea saida
  let valor = entrada.value.toUpperCase(); 
  let codigoDaLetraAsc = valor.charCodeAt() - 65; //codigo funcionando Alfabeto inicia em 0
  let deslocamento = parseInt(codigoDaLetraAsc) + parseInt(number.value) %26; // código somando corretamente!
  let retornarCodAsc = deslocamento + 65;
  let decode = String.fromCharCode(retornarCodAsc)

  saida.value = decode; //caixa de saida
}


  export default cipher;




  // Código que duplica msg de entrada e saida funcionando.

  // let entrada = document.getElementById("entrada")
  // let saida = document.getElementById("saida")
  
  // entrada.onkeyup = function(){
  //   let valor = entrada.value
  //   saida.value = valor
  // }
