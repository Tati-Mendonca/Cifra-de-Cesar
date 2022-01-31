import cipher from './cipher.js';  


let textCipher = document.getElementById("string");
textCipher.addEventListener("keyup", encode);
        
function encode() {
    let string = document.getElementById("string").value.toUpperCase();
    let offset = Number(document.getElementById("offset").value);
    let encodeCipher = cipher.encode(offset, string)
    document.getElementById("saida").value = encodeCipher    
}
