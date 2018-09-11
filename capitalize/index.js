// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



//Create 'result' which is the first charchter of the input string capitalized
//for each character in the string
//If the character to the left a space
    //Capitalize it and add it to 'result'
//Else
    //Add it to 'result'
function capitalize(str) {
    let result = str[0].toUpperCase();//讓第一個數為大寫存入str
    for (let i =1;i<str.length;i++){ 
        if (str[i-1]===' '){
            result += str[i].toUpperCase();
        }else{
            result += str[i];
        }
    }
    return result;
    }
    module.exports = capitalize;


// function capitalize(str) {
//     const words = [];//設定一個空字串

//     for (let word of str.split(' ')){//跑回圈讓植進去並分隔
//         words.push(word[0].toUpperCase()+word.slice(1));
//     }
//     return words.join(' ');
// }

// module.exports = capitalize;
