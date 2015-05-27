var counter = 1;
while(counter <= 100) {
	if(counter % 15 === 0)  {
		console.log("fizzbuzz");
		} else (counter % 5 === 0) {
			console.log("buzz")
			} else if (counter % 3 === 0) {
			console.log("fizz") 
			} else {
			console.log(counter);
		}
	counter++;
}