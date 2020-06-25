#https://www.hackerrank.com/challenges/caesar-cipher-1
//ACII: a-z 97 to 122, A-Z 65 to 90
function caesarCipher(s, k) {
  let alph = `abcdefghijklmnopqrstuvwxyz`;
  let isCapital = false;
  let str = ``;
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);

    if (/[A-Za-z]/.test(ch)) {
      if (/[A-Z]/.test(ch)) {
        isCapital = true;
        ch = ch.toLowerCase();
      }
      ch = alph.charAt((alph.indexOf(ch) + k) % alph.length);
      if (isCapital) {
        ch = ch.toUpperCase();
        isCapital = false;
      }
    }
    str += ch;
  }
  return str;
}
caesarCipher('LBH QVQ VG!', 13);

/* function caesarCipher(s, k) {
    s = s.split('');
    k = k > 25 ? k % 26 : k; 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.slice(k) + alphabet.slice(0,k);
    for(let i=0; i<s.length; i++){
        if(/[a-zA-Z]/.test(s[i])){
            let index = s[i].charCodeAt(0)-97;
            if(index < 0){
                index = s[i].charCodeAt(0)-65;
                s[i] = alphabet[index].toUpperCase();
            }else{
                s[i] = alphabet[index]
            }
        }
    }
    return s.join('') 
}
caesarCipher('LBH QVQ VG!', 13);

 */
/* //one liner two params
function caesarCipher(s, k) {
  return s.replace(/[a-z]/g, v => String.fromCharCode(97 + ((v.charCodeAt(0) - 97 + k) % 26))).replace(/[A-Z]/g, v => String.fromCharCode(65 + ((v.charCodeAt(0) - 65 + k) % 26)))
}
caesarCipher('LBH QVQ VG!', 13);
 */



/* 
//one param 13 symbols
function rot13(str) { 
        var solved = "";
        for (var i=0; i<str.length; i++) {
                var asciiNum = str[i].charCodeAt();
                if (asciiNum >= 65 && asciiNum <= 77) {
                        solved += String.fromCharCode(asciiNum + 13);
                } else if (asciiNum >= 78 && asciiNum <= 90) {
                        solved += String.fromCharCode(asciiNum - 13);
                } else {
                        solved += str[i];
                }
        }
        return solved;
}
rot13("SERR PBQR PNZC");    //FREE CODE CAMP
rot13("LBH QVQ VG!");       //YOU DID IT

 *//
