const cipher = {
  encode: function (offset, string) {
    let newString = ""

    if (typeof string !== "string") {
      throw TypeError('A mensagem precisa ser um texto')
    }

    for (let i = 0; i < string.length; i++) {
      let codAsc = string.charCodeAt(i);

      if (codAsc >= 65 && codAsc <= 90) {

        let lastLetter = 65;
        let valueEncode = ((codAsc - lastLetter + offset) % 26) + lastLetter;
        let cipherText = String.fromCharCode(valueEncode);
        newString += cipherText

      } else if (codAsc >= 97 && codAsc <= 122) {
        let lastLetter = 97;
        let valueEncode = ((codAsc - lastLetter + offset) % 26) + lastLetter;
        let cipherText = String.fromCharCode(valueEncode);
        newString += cipherText

      } else {
        newString += string.charAt(i);
      }
    }
    return newString
  },

  decode(offset, string) {

    if (typeof string !== "string") {
      throw TypeError('A mensagem precisa ser um texto')
    }

    let decipherString = "";
    for (let i = 0; i < string.length; i++) {
      let codAsc = string.charCodeAt(i);

      if (codAsc <= 90) {
        let lastLetter = 90;
        let valueDecode = ((codAsc - lastLetter - offset) % 26) + lastLetter;
        let decipherText = String.fromCharCode(valueDecode);
        decipherString += decipherText;

      } else {
        (codAsc >= 122)
        let lastLetter = 122;
        let valueDecode = ((codAsc - lastLetter - offset) % 26) + lastLetter;
        let decipherText = String.fromCharCode(valueDecode);
        decipherString += decipherText;
      }
    }
    return decipherString;
  }
}

export default cipher;
