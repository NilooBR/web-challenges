console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

// const receivedPassword = "password1234";
const receivedPassword = "h4x0r1337";

if (receivedPassword !== SUPER_SECRET_PASSWORD){
    console.log("Access denied!");
}else if(receivedPassword === SUPER_SECRET_PASSWORD){
    console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd
const number = 5;

if ((number % 2) === 0) {
    console.log("number is even")
} else {
    console.log("number is not even")
}

// Part 3: Hotdogs

const numberOfHotdogs = 5000000;
let price;

if (numberOfHotdogs < 5) {
    price = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
    price = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
    price = 1;
} else {
    price = 0.10;
}

const totalPrice = numberOfHotdogs * price;
console.log("price for hotdogs is: ", totalPrice);


// Part 4: Daytime
const currentHour = 20;
// let statement;
// if (currentHour < 17){
//     statement = "Still need to learn...";
//     console.log(statement);
// } else if (currentHour >= 17){
//     statement = "Partytime!!!";
//     console.log(statement);
// }

// const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";
// console.log(statement);

const statement = currentHour >= 17 ? "Partytime!!!" : "Still need to learn...";
console.log(statement);



// Part 5: Greeting
const userName = "Archibald";
const coachName = "YourCoachName";

const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";

console.log(greeting);

