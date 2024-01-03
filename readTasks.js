const Person = require("../model/person.model");
// This task find a all the
// Find all the people having a given name,
const findByName = async (criteria) => {
  try {
    const people = await Person.find(criteria);
    if (people) {
      console.log(
        "We found",
        people.length,
        "persons with that",
        criteria,
        "in our DB."
      );
      return people;
    }
    console.log("No Data found.");
  } catch (error) {
    console.log({
      errorName: error.name,
      message: error.message,
    });
  }
};

// Find just one person which has a certain food in the person's favorites
const findOnePerson = async (food) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    if (person) {
      console.log(
        person.name,
        "Is the first person that loves ",
        food,
        " In our db."
      );
      return person;
    }
    console.log("No Data found.");
  } catch (error) {
    console.log({
      errorName: error.name,
      message: error.message,
    });
  }
};

// Find the (only!!) person having a given _id
const findById = async (id) => {
  try {
    const person = await Person.findById(id);
    if (person) {
      console.log(
        id,
        "belongs to",
        person.name,
        "The Id in our DB is",
        person._id
      );
      return person;
    } else {
      console.log("No Data found.");
    }
  } catch (error) {
    console.log({
      errorName: error.name,
      message: error.message,
    });
  }
};

module.exports = {
  findByName,
  findOnePerson,
  findById,
};
