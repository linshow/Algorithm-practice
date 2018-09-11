// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const rI = n.toString().split('').reverse().join(''); //讓n轉自串後反轉放入rI

    if (n<0){               //假如n小於0
        return parseInt(rI)* -1;    //就乘與負一然後轉成數值
    }
    return parseInt(rI);


    //return parseInt(rI)* Math.sign(n); 不用if的解法，利用math.sign的函式將負數變負數．正的轉正

}

module.exports = reverseInt;
