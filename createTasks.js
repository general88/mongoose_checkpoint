// function that save a person to the db  // Create and Save a Record of a Model:
const Person = require("../model/person.model");
const createPerson = async (personObj) => {
  try {
    const person = new Person(personObj);
    const savedPerson = await person.save();
    if (savedPerson) {
      console.log("A new person has been saved to the DB");
      return savedPerson;
    }
  } catch (error) {
    console.log("Person wasn't saved because", error.message);
  }
};

// Create Many Records with model.create()
const createPeople = async (arrayOfPeople) => {
  try {
    const savedPeople = await Person.create(arrayOfPeople);
    if (savedPeople) {
      console.log("bulk people saved to the DB");
      return savedPeople;
    }
  } catch (error) {
    console.log("Error saving People because", error.message);
  }
};

module.exports = {
  createPerson,
  createPeople,
};
