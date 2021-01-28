/**
 * Takes an object where the keys are people's names and the values are their ages.
 * Returns the name of the person with the greatest age.
 *
 * @param {object} obj - The input object of the form { 'Joe': 42, 'Tanya': 11 }
 * @returns {string} - Returns the name of the oldest person
 *
 * ex: oldestPerson({ 'Joe': 42, 'Tanya': 11 })
 * returns: "Joe"
 *
 * ex: oldestPerson({ 'Marcus': 29, 'Julia': 29, 'Kevin': 34 })
 * returns: 'Kevin'
 */
function oldestPerson(obj) {
    //key = names
    //values = ages

    let arr = [];
    arr.push(obj);
    arr.sort((a,b) => a.ages - a.ages);

    for(let i = 0; i < arr.length; i++){
     return arr[i].names.tostring();

    }
}

module.exports = oldestPerson