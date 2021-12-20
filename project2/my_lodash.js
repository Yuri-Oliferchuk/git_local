const _ = {

clamp(number,lower,upper){
  let lowerClampedValue = Math.max(number, lower);
  let clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
},

inRange(number, start, end){
  if (!end) {
    end = start;
    start = 0;
  } else if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let isRange = ((start <= number)&&(number < end)) ? true : false;
  return isRange;
},

words(string){
  let words = string.split(' ')
  return words;
},

pad(string, length){
  if (length < string.length) {
    return string;}
  let startPaddingLength = Math.floor((length - string.length)/2);
  let endPaddingLength = (length - string.length - startPaddingLength);
  let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  return paddedString;
},

has(object, keys){
  let hasValue = (object[keys]) ? true : false;
  return hasValue;
},

invert(object){
  let invertedObject = {};
  for (let keys in object) {
    let originalValue = object[keys];
    invertedObject[originalValue] = keys;
  };
  return invertedObject;
},

findKey(object, predicate){
  for (let key in object) {
    let value = object[key];
    let predicateReturnValue = predicate(value);
    if (predicateReturnValue === true) {
      return key;
    } return undefined;
  };
},

drop(array, n){
  if (!n) {n = 1;}
  let droppedArray = array.slice(n);
  return droppedArray;
},

dropWhile(array, predicate){
  let cb = (element, index) => {return !predicate(element, index, array);}
  let dropNumber = array.findIndex(cb);
  let droppedArray = this.drop(array, dropNumber);
  return droppedArray;
},

chunk(array, size=1){
  let arrayChunks = [];
  for (let i=0; i < array.length; i += size){
    let arrayChunk = array.slice(i,i+size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
}
};
// Do not write or modify code below this line.
module.exports = _;