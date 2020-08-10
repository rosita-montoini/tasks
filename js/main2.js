// 1. Find in array: sum, min and max, replace min and max - create custom functions

let myNumber = [1, 3, 5, 8, 7, 21, 34];

function arraySum(array) {
	let sum = 0;
	for(let i = 0; i < array.length; i++) {
    	sum += array[i];
    }
	console.log("sum", sum);
}
arraySum(myNumber);


let max = getMaxValue(myNumber);
let min = getMinValue(myNumber);

function getMaxValue(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) { 
        if (max < array[i]) max = array[i]; 
    }

    return max;
}
console.log("max", getMaxValue(myNumber));


function getMinValue(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) { 
        if (min > array[i]) min = array[i]; 
    }
  
    return min;
}
console.log("min", getMinValue(myNumber));

function repluceMinMax() {
    let repMax = min;
        repMin = max;
    return ("min " + repMin + ", max " + repMax)
}
console.log(repluceMinMax());


// 2. Create function which will return function with callback in arguments

function mySandwich(food1, food2, callback) {
    console.log('My sandwich with: ' + food1 + ' and ' + food2);
    
    if (callback) {
        callback();
    }
}
 
mySandwich('ham', 'cheese');

/* 3. Create a function that will replace all number dividing three with ‘foo’, 
dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.*/


let divisionNumbers = myNumber.map(function(number) {
    if (number % 7 == 0 && number % 3 == 0) {
        return "foobar";
    }

    if (number % 3 == 0) {
        return "foo";
    }

    if (number % 7 == 0) {
        return "bar";
    }

    return number;
});

console.log(divisionNumbers);

/* 4. Create function with 2 string params. It must check if letters in the first correspond 
to the number of matches in second and return %. */

function compareString (str1, str2) {
    let equivalency = 0;
    let minLength;
    let maxLengt;
        if (str1.length > str2.length) {
            maxLength = str1.length;
            minLength = str2.length;
        } else {
            minLength = str1.length;
            maxLength = str2.length;
        } 

        for(let i = 0; i < minLength; i++) {
            if(str1[i] == str2[i]) {
                equivalency++;
            }
        }

    return (equivalency / maxLength * 100) + "%";
}
console.log(compareString("adventure", "adventures"));


