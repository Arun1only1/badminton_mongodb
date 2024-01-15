use("badminton");

// ? update
// ? update document(s)

// ? $set

// db.friends.updateOne(
//   { name: "Unique" },
//   {
//     $set: {
//       age: 25,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Unique" },
//   {
//     $set: {
//       name: "Sulochan",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Nischal" },
//   {
//     $set: {
//       name: "Sagar",
//       age: 23,
//       isGraduated: true,
//     },
//   }
// );

// ?$inc
//?  used to increase or decrease value

// db.friends.updateMany(
//   {},
//   {
//     $inc: {
//       age: -20,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $inc: {
//       age: 20,
//     },
//   }
// );

// ?$mul
// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $mul: {
//       age: 3,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $mul: {
//       age: 0.5,
//     },
//   }
// );

// ?$rename => renames field
// db.friends.updateMany(
//   {},
//   {
//     $rename: {
//       age: "totalAge",
//     },
//   }
// );

//? $unset => removes field

// db.friends.updateMany(
//   {},
//   {
//     $unset: {
//       contactNumber: "",
//     },
//   }
// );
// db.friends.find();
