const Person = require("../model/person.model");

//Perform Classic Updates by Running Find, Edit, then Save
const classicUpdate = async (id) => {
  try {
    const person = await Person.findById(id);
    if (!person) {
      console.log("person not in db");
      return;
    }
    const previousData = person.favoriteFoods;
    person.favoriteFoods = [...person.favoriteFoods, "Hamburger"];
    const updatedPerson = await person.save();
    if (updatedPerson) {
      console.log(
        updatedPerson.name,
        "has updated his favoriteFoods from ",
        previousData,
        "to",
        updatedPerson.favoriteFoods
      );
      return updatedPerson;
    } else {
      console.log("Operation not successful.");
    }
  } catch (error) {
    console.log({
      errorName: error.name,
      message: error.message,
    });
  }
};

// Perform New Updates on a Document Using model.findOneAndUpdate()
const findOneAndUpdate = async (personName) => {
  try {
    const person = await Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      {
        new: true,
      }
    );

    if (person) {
      console.log(
        person.name,
        "is the lucky person that got his age changed to",
        20
      );
      return person;
    }
  } catch (error) {
    console.log({
      errorName: error.name,
      message: error.message,
    });
  }
};

module.exports = {
  classicUpdate,
  findOneAndUpdate,
};
