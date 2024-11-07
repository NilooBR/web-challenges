console.clear();

/*
Let's calculate some interesting facts based on the age of a user! It is expected that the user of this program provides a number as the input. The code for receiving this input is provided below.

Calculate the following:
- The number of days the person has lived.
- The expected number of remaining days for the person. Use an expected life span of 80 years.
- The percentage of already lived days in relation to the life expectancy.
- The cumulative number of days the person already slept in their life. Assume the person sleeps on average 8 hours per day.

Make sure to log every number with a nice descriptive text. Hint: you can combine text by using "+"

💡 You can ignore leap years.
*/

const currentAge = Number(process.argv[2]); // this gives you the <age> the user entered in the command "node index.js <age>"

console.log("current age is: " + currentAge);

// 1. The number of days the person has lived.
const daysLived = currentAge * 365;
console.log("The number of days the person has lived is " + daysLived);

// 2. The expected number of remaining days for the person. Use an expected life span of 80 years.
const remainingDays = (80 * 365) - currentAge;
console.log("The expected number of remaining days for the person is " + remainingDays );

// 3. The percentage of already lived days in relation to the life expectancy.
const percentageLivedDays = (daysLived / (80 * 365)) * 100;
console.log("The percentage of already lived days in relation to the life expectancy is " + percentageLivedDays);

// 4. The cumulative number of days the person already slept in their life. Assume the person sleeps on average 8 hours per day.
const daysSlept = (daysLived * 8) / 24;
console.log("The cumulative number of days the person already slept in their life is " + daysSlept);
