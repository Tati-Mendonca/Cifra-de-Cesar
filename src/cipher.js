    const cipher = {
      encode(offset, string) {
        let newString = ""
        for (let i = 0; i < string.length; i++) {
          let codAsc = string.charCodeAt(i);

          if (codAsc < 91){
            let firstLetter = 65;
            let valueEncode = ((codAsc - firstLetter + offset) % 26) + firstLetter;
            let cipherText = String.fromCharCode(valueEncode);
            newString += cipherText
            
            
          } else{
            (codAsc > 97)
              let firstLetter = 97;
              let valueEncode = ((codAsc - firstLetter + offset) % 26) + firstLetter;
              let cipherText = String.fromCharCode(valueEncode);
              newString += cipherText
            
            }
        }
        
        return newString
  },

  decode(offset, string) {

    let decipherString = "";
    for (let i = 0; i < string.length; i++) {
      let codAsc = string.charCodeAt(i);
      let lastLetter = 90;
      let valueDecode = ((codAsc - lastLetter - offset) % 26) + lastLetter;
      let decipherText = String.fromCharCode(valueDecode);
      decipherString += decipherText;

    }

    return decipherString;

  }
}


export default cipher;