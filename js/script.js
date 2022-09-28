'use strict';
const str = 'Hello world';

const insertWordInto = (str) => {

  const initialStr = str;
  let index = 0;

  return function (str2) {

    const arr = initialStr.split(' ');
    arr.splice(index, 0, str2);
    index += 1;
    return arr.join(' ');
  }

}

const func = insertWordInto(str);

const result = func('Odesa');
console.log(result);

const result2 = func('Odesa');
console.log(result2);

const result3 = func('Odesa');
console.log(result3);
