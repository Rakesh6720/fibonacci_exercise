"use strict";

function fibonacciAdder(startingArray) {
	//step 1: check the last number of startingArray
	//step 2: add the last number of startingArray and the number before it together and store the value
	//step 3: push the new value to the end of the array
	//step 4: repeat until you get to startingArray[15]
	for (let i=5; i<15; i++){
		let newIndexValue = startingArray[i] + startingArray[i-1];
		startingArray.push(newIndexValue);
		console.log(startingArray);
	}
}

let fibonacciArray = [1, 1, 2, 3, 5, 8];

fibonacciAdder(fibonacciArray); 