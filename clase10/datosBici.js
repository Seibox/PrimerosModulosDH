let fs = require('fs');
let bicis = fs.readFileSync(__dirname+'/bicicletas.json');
let biciArray = JSON.parse(bicis);
console.log(bicis);
console.log(biciArray);

module.exports = biciArray;