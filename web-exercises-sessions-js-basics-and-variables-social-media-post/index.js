console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "Who is the president of the US?";
const text = "Shockingly, it is Trump, the US president.";
let numberOfLikes = 10;
const user = "Niloo";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("What is the title of the social media post?:", title);
console.log("What is the text inside the post?:", text);
console.log("How many people like it?:", numberOfLikes);
console.log("Who was the writer of the post?:", user);
console.log("Is the post reported?:", isReported);

// Increase likes by one and log again
numberOfLikes ++ ;
console.log("Updated number of likes:", numberOfLikes);

// --^-- write your code here --^--
