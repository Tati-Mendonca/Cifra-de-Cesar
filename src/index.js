
import cipher from './cipher.js';  

        
function encode() {
    let string = document.getElementById("string").value.toUpperCase();
    let offset = Number(document.getElementById("offset").value);
    let encodeCipher = cipher.encode(offset, string)
    document.getElementById("saida").value = encodeCipher    
    
}


 //Se usuário clicar em botão decifrar executar função abaixo

    function decode (e){
        e.preventDefault() 
        
        let string1 = document.getElementById("string").value.toUpperCase();
        let offset1 = Number(document.getElementById("offset").value);
        let decodeCipher = cipher.decode(offset1, string1)
        document.getElementById("saida").value = decodeCipher    
}

document.getElementById("buttonDecode").addEventListener("click", decode)
let textCipher = document.getElementById("string");
textCipher.addEventListener("keyup", encode);


document.getElementById("saiba-mais").addEventListener("click", demoDisplay);




    function demoDisplay(e) {
        e.preventDefault()
    
        let info = document.getElementById("secret");
        if(info.style.display === "block"){
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
   
   
}