
const cipher = { 

  encode: function encode(offset,string){

  
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
    }
  }
export default cipher;