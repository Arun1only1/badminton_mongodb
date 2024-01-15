use("badminton");

// ? array update
// ? $push,$addToSet, $pop, $pull, $pullAll
// ? $ , $[], $[identifier]

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

// ? modifier => $each,$position, $sort, $slice

// db.friends.updateOne(
//   { _id: ObjectId("656070d2b16daaa31169a51a") },
//   {
//     $push: {
//       hobbies: { $each: ["Singing", "Cardio"] },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           { sub: "Political science", point: 45 },
//           { sub: "Environment science", point: 55 },
//         ],
//       },
//     },
//   }
// );

// ? Add Singing and Driving to Sulochan's hobbies

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Hiking", "Cycling"] },
//     },
//   }
// );
//? $addToSet =>
// Adds elements to an array only if they do not already exist in the array.

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $addToSet: {
//       scores: {
//         sub: "Social",
//       },
//     },
//   }
// );
// ? $pop
// ? 1 => removes last element from array
// ? -1 => removes first element from array

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pop: {
//       scores: 1,
//     },
//   }
// );

// ? $pull
// ? removes item from array based upon condition
// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pull: {
//       scores: { sub: "Social" },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pull: {
//       scores: { sub: "Math", point: { $gt: 50 } },
//     },
//   }
// );

// db.friends.updateOne(
//   {
//     name: "Alish",
//   },
//   {
//     $pull: {
//       hobbies: "Cardio",
//     },
//   }
// );

// ?$pullAll
// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pullAll: { hobbies: ["Dancing", "Driving", "Hiking"] },
//   }
// );

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $pullAll: {
//       scores: [
//         {
//           sub: "Math",
//           point: 50,
//         },
//         {
//           sub: "Science",
//           point: 65,
//         },
//       ],
//     },
//   }
// );

// ============================================================================

// ? Update Math score of Sulochan to 50
// db.friends.updateOne(
//   { name: "Sulochan", "scores.sub": "Math" },
//   {
//     $set: {
//       "scores.$.point": 50,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan", "scores.sub": "Political science" },
//   {
//     $set: {
//       "scores.$.sub": "Arts",
//       "scores.$.point": 40,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan", hobbies: "Singing" },
//   {
//     $set: {
//       "hobbies.$": "Cycling",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Alish", hobbies: "Singing" },
//   {
//     $set: {
//       "hobbies.$": "Cycling",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sagar", "scores.sub": "Social" },
//   {
//     $inc: {
//       "scores.$.point": 10,
//     },
//   }
// );

// ? $[]
// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $set: {
//       "scores.$[].point": 50,
//     },
//   }
// );

db.friends.updateOne(
  { name: "Alish" },
  {
    $set: {
      "hobbies.$[]": "Books",
    },
  }
);

db.friends.find();
