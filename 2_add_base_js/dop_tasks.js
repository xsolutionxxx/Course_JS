"use stirct";

// 1

/* function amountOfPages(summary) {
  let str = "";

  for (let i = 1; i <= summary; i++) {
    str += i;
    if (str.length == summary) {
      str = "" + i;
      break;
    }
  }

  return Number(str);
}

console.log(amountOfPages(1095)); */

// 2

/* function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let char of string.toLowerCase()) {
    alphabet.forEach((item, i) => {
      if (char == item) {
        alphabet.splice(i, 1);
      }
    });
  }

  return alphabet.length === 0;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }
      
        return false
    }
    
    return true
}

// При помощи Set
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
} */

// 3

/* function deepCount(a) {
  let counter = 0;

  if (a.every((el) => !Array.isArray(el))) {
    return (counter += a.length);
  } else {
    for (let i = 0; i < a.length; i++) {
      counter++;
      if (Array.isArray(a[i])) {
        return (counter += deepCount(a[i]));
      }
    }
  }
}

console.log(deepCount([1, 2, [3, 4, [5]]]));

// Вариант с циклом
function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}

// Вариант с методом reduce
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
} */
