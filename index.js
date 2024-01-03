const express = require("express");
// const { connectDB } = require("./dbConnect");
const { connectDB } = require("./dbConnect");
require("dotenv").config();
const app = express();

const { person, peopleArray } = require("./data.js");
const Person = require("./model/person.model.js");
const { createPerson, createPeople } = require("./createTasks.js");
const { findByName, findOnePerson, findById } = require("./readTasks.js");
const { classicUpdate, findOneAndUpdate } = require("./updateTasks.js");
const { findByIdAndRemove, deleteMany } = require("./deleteTasks.js");
const { searchQuery } = require("./searchQuery.js");

const PORT = process.env.PORT || 3000;

const startApp = async () => {
  try {
    const connected = await connectDB();
    if (connected) {
      console.log("Database Connected ");
      //to perforn other tasks
      // This clears the database before we perform any operation.
      await Person.deleteMany({});
      // Task one - Create a person using save() method
      await createPerson(person);
      // Task two - Create many people using
      await createPeople(peopleArray);
      // Task 3 - find user by Name
      await findByName({ name: "Mary" });
      // findOnePerson - that loves a particular food
      await findOnePerson("Guacamole");
      // findById - specifical - get a person detail by just providing his ID
      const persons = await Person.find();
      await findById(persons[0]._id.toString());
      // classicUpdate - update the favoritFoods of the found person
      await classicUpdate(persons[5]._id.toString());
      // findOneAndUpdate - find and update the age of a user
      await findOneAndUpdate("Davis");
      // {findByIdAndRemove,
      const removed = await findByIdAndRemove(persons[5]._id.toString());
      // delete all mary in our DB
      await deleteMany();
      // chainSearchQuery - find all persons that likes Burritos, sort them by name and return just two
      await searchQuery();
    }
  } catch (error) {
    console.log(error);
  }
};

startApp();
