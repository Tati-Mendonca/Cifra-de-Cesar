import cipher from './cipher.js';  


// let textCipher = document.getElementById("string");
// textCipher.addEventListener("keyup", encode);
        
// function encode() {
//     let string = document.getElementById("string").value.toUpperCase();
//     let offset = Number(document.getElementById("offset").value);
//     let encodeCipher = cipher.encode(offset, string)
//     document.getElementById("saida").value = encodeCipher    
// }



// if {       //Se usuário clicar em botão decifrar executar função abaixo
//     let button = document.getElementById("button");
//     button.addEventListener("click", decode)
// }



let textCipher = document.getElementById("string");
textCipher.addEventListener("keyup", decode);
        
function decode() {
    let string = document.getElementById("string").value.toUpperCase();
    let offset = Number(document.getElementById("offset").value);
    let decodeCipher = cipher.decode(offset, string)
    document.getElementById("saida").value = decodeCipher    
}



