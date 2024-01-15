// closer look to read operations
use("badminton");

//? comparison operators

// ?$eq
// name ==="Under the Dome"
// db.movies.find({ name: { $eq: "Under the Dome" } });

// ? find movie whose name is Bitten
// db.movies.find({ name: { $eq: "Bitten" } });

// db.movies.find({ name: "Bitten" });

// db.movies.find({ name: "Person of Interest" });

// ? find movies whose rating is greater than or equal to 9
// db.movies.find({ "rating.average": { $gte: 9 } }, { name: 1, rating: 1 });

//? $gt
//  runtime > 60
// db.movies.find({ runtime: { $gt: 60 } }).count();
// db.movies.find({ runtime: { $gt: 30 } });

// ?gte
// runtime>=60
// db.movies.find({ runtime: { $gte: 60 } });

// ? $lt
// weight<75
// db.movies.find({ weight: { $lt: 75 } });

// ? $lte
// weight <= 75
// db.movies.find({ weight: { $lte: 75 } });

// ?$not
// status !=="Ended"
// db.movies.find({ status: { $not: { $eq: "Ended" } } });

// ? $ne => not equal
// db.movies.find({ status: { $ne: "Ended" } });

// ? $in
// db.movies.find({
//   "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 3.1, 7.8] },
// });

// ? $nin
// db.movies.find({
//   "rating.average": { $nin: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 3.1, 7.8] },
// });
// =============================================================================
// ? logical operator

// ? $and, $or, $not, $nor

// ?$and
//  status==="Ended" && runtime ===60
// db.movies.find({
//   $and: [{ status: "Ended" }, { runtime: 60 }],
// });

// ?$or
// find movie whose runtime is less than 60 or status is Ended
// runtime<60 || status === "Ended"
// db.movies.find(
//   { $or: [{ runtime: { $lt: 60 } }, { status: "Ended" }] },
//   {
//     name: 1,
//     status: 1,
//     runtime: 1,
//   }
// );

// ?$nor
// find movie whose status is neither Ended nor runtime is 60

// db.movies.find(
//   { $nor: [{ status: "Ended" }, { runtime: 60 }] },
//   {
//     name: 1,
//     status: 1,
//     runtime: 1,
//   }
// );

// ================================================================
// ?array
// ? $all, $elemMatch, $size

// find movies whose genres is both Drama and Thriller
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });

// ? $all
// db.movies.find({ genres: { $all: ["Thriller", "Drama"] } });

// db.students.find({ hobbies: { $all: ["Dancing", "Singing"] } });

// db.students.find({ "scores.sub": "Math", "scores.point": { $gt: 70 } });

// db.students.find({
//   scores: { $elemMatch: { sub: "Math", point: { $gt: 70 } } },
// });

// db.scores.find({
//   results: { $gt: 80, $lt: 85 },
// });

// db.scores.find({ results: { $elemMatch: { $gt: 80, $lt: 85 } } });

// ?$size
// ? $size does not accept range
// db.students.find({ hobbies: { $size: 3 } });

// =============================================================
// ? evaluation operator

//? $regex
// i => case insensitive
// db.movies.find({ name: { $regex: "dome", $options: "i" } });

// db.movies.find({ summary: { $regex: "400 inhabitants", $options: "i" } });

// ?$expr
// find sales data whose order is greater than volume
// order>volume
// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });

// db.students.find();

// find students who have two hobbies as well as math score greater than 40
// db.students.find({
//   $and: [
//     { hobbies: { $size: 2 } },
//     { scores: { $elemMatch: { sub: "Math", point: { $gt: 40 } } } },
//   ],
// });

// ? find movies whose rating is greater than 8 and genre is Drama or Action

// db.movies.find({
//   $and: [
//     { "rating.average": { $gt: 8 } },
//     { $or: [{ genres: "Drama" }, { genres: "Action" }] },
//   ],
// });
