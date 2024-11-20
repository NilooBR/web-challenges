/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountry = ({ name, country }) => [name, country];

// export const getRelocatedCity = (
//   city1,
//   city2 = { name: "Berlin", country: "Germany" }
// ) => {
//   const [, country] = getNameAndCountry(city2);
//   return {
//     ...city1,
//     country,
//   };
// };


export const getNameAndCountry = function(city) {
  var name = city.name;
  var country = city.country;
  return [name, country];
};

export const getRelocatedCity = function(city1, city2) {
  if (city2 === undefined) {
    city2 = { name: "Berlin", country: "Germany" };
  }
  var country = getNameAndCountry(city2)[1];
  var updatedCity = {};
  updatedCity.name = city1.name;
  updatedCity.country = country;
  return updatedCity;
};