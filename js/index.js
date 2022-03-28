arr = []
do {
	lengthMassive = prompt(`Enter number from 2 to 10`)
	lengthMassive = Math.round(Math.abs(lengthMassive));
} while (!lengthMassive || lengthMassive < 2 || lengthMassive > 10)
if (lengthMassive) {
	arr.length = lengthMassive
}
do {
	randomUserMin = +prompt(`Enter min number from -10 to 10`)
	randomUserMin = Math.round(randomUserMin);
} while (!randomUserMin || randomUserMin < -10 || randomUserMin >10)
do {
	randomUserMax = +prompt(`Enter max number from ${randomUserMin} number to 50`)
	randomUserMax = Math.round(randomUserMax)
} while (!randomUserMax || randomUserMax <= randomUserMin || randomUserMax > 50)
for (i = 0, mul =1; i < arr.length; i++) {	
arr[i] = Math.floor(Math.random() * (randomUserMax - randomUserMin +1)) + randomUserMin;
mul *= arr[i]
}
console.log(arr)
console.log(`Total sum massive: ${mul}`);