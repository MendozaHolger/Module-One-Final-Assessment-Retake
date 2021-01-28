/**
* Counts the number of threes in a given number.
* @param {number} n - The input number.
* @returns {number} - Returns how many threes are in the input.
*
* ex: countThrees(300)
* returns: 1
*
* ex: countThrees(3203)
* returns: 2
*
* ex: countThrees(47)
* returns: 0
*/

function countThrees(n) {
    let arr = n.toString();
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 === 0 && arr[i] % 10 === 3){
            total = total + 1;
        }
    }
    return total;
}


module.exports = countThrees
