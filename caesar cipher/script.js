// Write class below
class ShiftCipher {
    constructor(shift){
      this.shift = shift;
    }

    encrypt(textString) {
        let resArr=[];
        if (this.shift > 25) {
            return console.log ('Shift is to big');
        }
        // a=65 z=90
            for (let element of textString.toUpperCase()){
                element = element.charCodeAt(0);
                if ((element >= 65)&&(element <= 90)) {
                    if (element + this.shift > 90) {
                        element = (element + this.shift) - 90 + 65 - 1;
                    } else {
                        element = element + this.shift;
                    }
                }
                element = String.fromCharCode(element)
                resArr.push(element);
            }
        resArr = resArr.join('');
        console.log(resArr);
        return resArr;
      }
    decrypt(textString) {
        let resArr=[];
        if (this.shift > 25) {
            return console.log ('Shift is to big');
        }
        // a=97 z=122
            for (let element of textString.toLowerCase()){
                element = element.charCodeAt(0);
                if ((element >= 97)&&(element <= 122)) {
                    if (element - this.shift < 97) {
                        element = 122 - (97 - (element - this.shift)) + 1;
                    } else {
                        element = element - this.shift;
                    }
                }
                element = String.fromCharCode(element)
                resArr.push(element);
            }
        resArr = resArr.join('');
        console.log(resArr);
        return resArr;        
    }
  }
  
  
const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!');
cipher.decrypt('K <3 OA RWRRA'); 