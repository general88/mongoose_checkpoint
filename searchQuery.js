const Person = require("../model/person.model");
module.exports = {
  searchQuery: async () => {
    try {
      const people = await Person.find({ favoriteFoods: "Burritos" })
        .sort("name")
        .limit(2)
        .select("-age");

      if (people.length) {
        console.log(
          "here are the sorted two people that  love Burritos in our DB.",
          people
        );
        return people;
      } else {
        console.log("Unable to find users by favoriteFoods Burritos.");
      }
    } catch (error) {
      console.log("Error saving People because", error.message);
    }
  },
};
