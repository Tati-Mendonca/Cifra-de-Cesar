const cipher = {

  }


let entrada = document.getElementById("entrada")
let saida = document.getElementById("saida")
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let number = function add(){
  let quantidade = parseInt(document.getElementById('numero').value); 
        console.log("Value: "+quantidade);
        }



entrada.onkeyup = function(){ //na textarea entrada qnd alguem digita o valor é enviaado a textarea saida
  let valor = entrada.value.toUpperCase(); 
  let deslocamento = valor.charCodeAt() - 65;
  let chaveSecreta = deslocamento + number;

  console.log(chaveSecreta); //codigo funcionando Alfabeto zerado


  saida.value = deslocamento;
}


  export default cipher;



  // Código que duplica msg de entrada e saida funcionando.

  // let entrada = document.getElementById("entrada")
  // let saida = document.getElementById("saida")
  
  // entrada.onkeyup = function(){
  //   let valor = entrada.value
  //   saida.value = valor
  // }
