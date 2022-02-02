
const cipher = { 

  encode(offset,string){

    let newString = ""
            for (let i = 0; i < string.length; i++) {
                let codigoAsc = string.charCodeAt(i);
                let cod1aLetra = 65;
                let valorEncode = ((codigoAsc - cod1aLetra + offset)% 26) + cod1aLetra;
                let textCipher = String.fromCharCode(valorEncode);
                newString += textCipher
      
            }
            console.log(newString);
            return newString
 },

decode(offset,string){


    let decipherString = "";
              for (let i = 0; i < string.length; i++) {
                let codigoAsc1 = string.charCodeAt(i);
                let codUltimaLetra = 90;

                let valorDecode = ((codigoAsc1 - codUltimaLetra - offset) % 26) + codUltimaLetra;
                let textDecipher = String.fromCharCode(valorDecode);
                decipherString += textDecipher;

    }
    console.log(decipherString);
    return decipherString;





  
  }
} 


export default cipher;