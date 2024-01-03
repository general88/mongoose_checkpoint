// Create a person instance
const newPerson = new Person({
  name: "Oguntamu Adeniyi",
  age: 45,
  favoriteFoods: ["Plantain", "Beans"],
});

// Save the person record
newPerson.save((err, data) => {
  if (err) return console.error(err);
  console.log("Person saved:", data);
});
