function add (a, b) {
	return (a+b);
	
}

function subtract (a, b) {
	return (a-b);
	
}

function sum (x) {
	let sum = 0;
	x.forEach(function(val) {
		sum += val;
	});
	return sum;
	
}

function multiply (x) {
	let prod = 1;
	x.forEach(function(val) {
		prod *= val;
	});
	return prod;
}

function power(a, b) {
	return Math.pow(a, b);
	
}

function factorial(a) {
	if (a === 0) {
		return 1;
	} else {
		return a * factorial( a - 1 );
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}