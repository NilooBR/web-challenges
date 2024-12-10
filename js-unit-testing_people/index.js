import { people } from "./data.js";
export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

console.log(getFirstNames(people));

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

console.log(getFullNames(people));

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

console.log(getNameAndAge(people));

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

console.log(getPeopleByAge(people, 38));

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age)
    .map((person) => `${person.firstName} ${person.lastName}`);
}

console.log(getPeopleNamesOlderThan(people, 23));

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}

console.log(getPeopleByLastName(people, "Musterfrau"));

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

console.log(findPersonById(people, 3));

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

console.log(isAnyoneOlderThan(people, 55));
console.log(isAnyoneOlderThan(people, 23));

export function getFullNamesSortedByAge(people) {
  return people
    .toSorted((a, b) => a.age - b.age)
    .map((person) => person.lastName);
}

console.log(getFullNamesSortedByAge(people));
