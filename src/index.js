
import cipher from './cipher.js';  

document.getElementById("string").addEventListener("keyup", encode);
        
function encode() {
    let string = document.getElementById("string").value;
    let offset = Number(document.getElementById("offset").value);
    let encodeCipher = cipher.encode(offset, string)
    document.getElementById("exit").value = encodeCipher    
    
}

document.getElementById("buttonDecode").addEventListener("click", decode);

function decode (e){
    e.preventDefault() 
        
    let string1 = document.getElementById("string").value.toUpperCase();
    let offset1 = Number(document.getElementById("offset").value);
    let decodeCipher = cipher.decode(offset1, string1)
    document.getElementById("exit").value = decodeCipher  
        
}


//Função div oculta

document.getElementById("btn-div-secret").addEventListener("click", display);


    function display(e) {
        e.preventDefault()
    
        let info = document.getElementById("secret");
        if(info.style.display === "block"){
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
   
}




