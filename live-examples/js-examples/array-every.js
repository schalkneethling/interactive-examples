var cmInitContent = `// create the callback function
function isBelowThreshold(currentValue) {
    return currentValue <= 40;
}

// run function against array values
var result = [1, 30, 40, 29, 10, 13].every(isBelowThreshold);

// log the result
console.log(result);`;

var cmSelectLine = 6;
var cmSelectChStart = 14;
