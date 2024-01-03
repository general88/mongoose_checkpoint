const Person = require("../model/person.model");

// Delete One Document Using model.findByIdAndRemove
const findByIdAndRemove = async (id) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(id);
    if (deletedPerson) {
      console.log(deletedPerson.name, "Has been removed from our Db");
      return deletedPerson;
    }
  } catch (error) {
    console.log({
      errorName: error.name,
      message: error.message,
    });
  }
};

// Delete many users that has name mary
const deleteMany = async () => {
  try {
    const deletedPeople = await Person.deleteMany({ name: "Mary" });
    if (deletedPeople) {
      console.log(
        "All people whose name is mary has been wiped from our DB",
        deletedPeople.deletedCount
      );
      return deletedPeople;
    }
  } catch (error) {
    console.log({
      errorName: error.name,
      message: error.message,
    });
  }
};

module.exports = {
  findByIdAndRemove,
  deleteMany,
};
