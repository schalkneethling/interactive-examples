var cmInitContent = `// create testing function
var findFirstLargeNumber = function(element) {
    return element > 13;
}

// call findIndex(), passing the above function
var result = [5, 12, 8, 130, 44].findIndex(findFirstLargeNumber);

// log the resulting index
console.log(result);`;

var cmSelectLine = 6;
var cmSelectChStart = 23;
