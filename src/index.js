const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

// 1. разбить строку на массив строк по буквам

const numbersArray = [];
for(let i = 0; i < expr.length; i = i + 10){
    numbersArray.push(expr.substr(i, 10));
}

// 2. перекодировать каждый элелмент в код морзе

const morseLetters = [];

for(let morseLetter of numbersArray){

    let tempString = '';

    for(let i = 0; i < morseLetter.length; i++){
        if(morseLetter[i] === '*'){
            tempString += ' ';
            break;
        }
        if(morseLetter[i] === '1'){
            if(morseLetter[i + 1] === '0'){
                tempString += '.';
            }
            if(morseLetter[i + 1] === '1'){
                tempString += '-';
            }
            i++;
        }
    }

    morseLetters.push(tempString)
}

// 3. перекодировать код морзе в буквы

let result = [];

for(let codedLetter of morseLetters){
    if(MORSE_TABLE[codedLetter] === undefined){
        result.push(' ');
    }
    else{
        result.push(MORSE_TABLE[codedLetter]);
    }
}
    return result.join('');
}

module.exports = {
    decode
}