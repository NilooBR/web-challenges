import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    name: chance.name(),
    gender: chance.gender(),
    age: chance.age(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    jobTitle: chance.profession(),
    favoriteColor: chance.color(),
  };

  res.status(200).json(character);
}