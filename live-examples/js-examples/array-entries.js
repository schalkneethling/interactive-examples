var cmInitContent = `// create an array
var arr1 = ['a', 'b', 'c'];
// create an iterator by calling entries on the array
var iterator = arr1.entries();

// log the results, which prints the next Array index, value on each call
console.log(
    'First entry: ' + iterator.next().value + ' :: ' +
    'Second entry: ' + iterator.next().value + ' :: ' +
    'Third entry: ' + iterator.next().value);`;

var cmSelectLine = 2;
var cmSelectChStart = 25;
