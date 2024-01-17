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

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $set: {
//       "hobbies.$[]": "Books",
//     },
//   }
// );

// ? Add Football to hobbies array of Sagar
// ?$push
// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $push: {
//       hobbies: "Football",
//     },
//   }
// );

// ? Add Badminton and Basketball to Sagar's hobbies
// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $push: {
//       hobbies: { $each: ["Badminton", "Basketball"] },
//     },
//   }
// );

//? add Swimming, Cycling and Cricket as Sagar's hobbies
// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Swimming", "Cycling", "Cricket"] },
//     },
//   }
// );

// ? add Swimming and Cycling as Prakash's hobbies

// ? add two subjects with points in Prakash's scores
// {
//   "sub": "Nepali",
//   "point": 65
// },
// {
//   "sub": "English",
//   "point": 60
// }

// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           { sub: "Nepali", point: 65 },
//           { sub: "English", point: 60 },
//         ],
//       },
//     },
//   }
// );

// ? remove last item from Sagar's hobbies
// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );

// ? remove first item from Sagar's hobbies
// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );

// ? $pull
//?Remove those subjects in which Prakash has scored less than 60
// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $pull: {
//       scores: { point: { $lt: 60 } },
//     },
//   }
// );

// ? $pullAll
// ? remove Badminton and Swimming from Sagar's hobbies
// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $pull: {
//       hobbies: "Badminton",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sagar" },
//   {
//     $pullAll: {
//       hobbies: ["Swimming", "Basketball"],
//     },
//   }
// );

// ? update Sagar's Science score to 63
// db.friends.updateOne(
//   { name: "Sagar", "scores.sub": "Science" },
//   {
//     $set: {
//       "scores.$.point": 60,
//     },
//   }
// );

// ? Change  "Social" subject to "Health" from Sagar's document
// db.friends.updateOne(
//   { name: "Sagar", "scores.sub": "Social" },
//   {
//     $set: {
//       "scores.$.sub": "Health",
//       "scores.$.point": 65,
//     },
//   }
// );

// ? Change Football to Futsal from Sagar's hobbies
// db.friends.updateOne(
//   { name: "Sagar", hobbies: "Football" },
//   {
//     $set: {
//       "hobbies.$": "Futsal",
//     },
//   }
// );

// ? Update Prakash's score to 80 for all subjects
// ? $[]

// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $set: {
//       "scores.$[].point": 80,
//     },
//   }
// );

// Change all "Books" to "Trekking" for Alish

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $set: {
//       "hobbies.$[]": "Trekking",
//     },
//   }
// );

// ? $[identifier]

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $set: {
//       "scores.$[item].point": 60,
//     },
//   },
//   { arrayFilters: [{ "item.point": { $gt: 50 } }] }
// );

// ? Update scores less than 55 by 10 marks for Sulochan

db.friends.updateOne(
  { name: "Sulochan" },
  {
    $inc: {
      "scores.$[item].point": 10,
    },
  },
  { arrayFilters: [{ "item.point": { $lt: 55 } }] }
);

db.friends.find();
