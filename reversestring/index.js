// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//第三個解法
function reverse(str) {
    return str.split('').reduce((reversed,character)=>{  //reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
        return character + reversed;
    },'');


}

module.exports = reverse;

//第一個解法
// function reverse(str) {
//     const arr = str.split('');  //已空格切割
//     arr.reverse();              //反轉
//     return arr.join('');        //結合




// }



//第二種解法
// function reverse(str) {
//     let reversed = '';
    
//     for (let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;


// }