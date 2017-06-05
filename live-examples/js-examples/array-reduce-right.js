var cmInitContent = `/* Calls reduceRight() on a multi dimensional array,
passing a callback function that converts it into a flattened array. */
var flattenedArray = [[0, 1], [2, 3], [4, 5]].reduceRight(
    function(previousValue, currentValue) {
        return previousValue.concat(currentValue);
    }
);

// log the result
console.log(flattenedArray);`;

var cmSelectLine = 2;
var cmSelectChStart = 44;
