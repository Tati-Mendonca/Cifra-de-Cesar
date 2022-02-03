
const cipher = { 
  encode(offset,string){
    let newString = ""
            for (let i = 0; i < string.length; i++) {
                let codAsc = string.charCodeAt(i);
                let firstLetter = 65;
                let valueEncode = ((codAsc - firstLetter + offset)% 26) + firstLetter;
                let cipherText = String.fromCharCode(valueEncode);
                newString += cipherText
      
            }
            console.log(newString);
            return newString
 },

decode(offset,string){

    let decipherString = "";
              for (let i = 0; i < string.length; i++) {
                let codAsc = string.charCodeAt(i);
                let lastLetter = 90;
                let valueDecode = ((codAsc - lastLetter - offset)% 26) + lastLetter;
                let decipherText = String.fromCharCode(valueDecode);
                decipherString += decipherText;

    }
    console.log(decipherString);
    return decipherString;
  
  }
} 


export default cipher;