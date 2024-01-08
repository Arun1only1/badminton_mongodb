use("badminton");

// insert
// ? insertOne
// ? insertMany

// ? insertOne => to add one document

// db.students.insertOne({
//   name: "Sulochan",
//   college: "NCIT",
//   address: {
//     temporary: "Anamnagar",
//     permanent: "Baneswor",
//   },
// });

// db.students.insertOne({
//   name: "Bivek",
//   college: "Broadway",
//   address: {
//     temporary: null,
//     permanent: "Lokanthali",
//   },
// });

// ? insertMany
// db.courses.insertMany([
//   {
//     name: "MERN",
//     price: 25000,
//     duration: 90,
//   },
//   {
//     name: "Spring Boot",
//     price: 25000,
//     duration: 100,
//   },

//   {
//     name: "Devops",
//     price: 30000,
//     duration: 60,
//   },
// ]);

// ? Read
// ? findOne, find

// ? find always returns array
// ?if there is no data, find return empty array
// db.students.find();
// db.courses.find();

// ? findOne
//  always returns one element based on provided condition
//  returns null if no document gets matched with provided condition

// name ==="Devops"
// db.courses.findOne({ name: "Spring Boot" });
// db.courses.findOne({ duration: 100 });

// db.courses.findOne({ name: "Django" });

// ? delete
// deleteOne, deleteMany
// db.courses.deleteOne({ duration: 60 });

// db.courses.deleteMany({});
// db.courses.find();

// ?update
// ? updateOne, updateMany

// db.courses.updateOne(
//   { name: "MERN" },
//   {
//     $set: {
//       price: 20000,
//     },
//   }
// );

// db.courses.updateOne(
//   { name: "Spring Boot" },
//   {
//     $set: {
//       price: 20000,
//       duration: 90,
//     },
//   }
// );

// db.courses.updateMany(
//   { price: 20000 },
//   {
//     $set: {
//       duration: 120,
//     },
//   }
// );

db.courses.find();
