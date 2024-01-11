use("badminton");

// ?read operations

//?Find movies whose status is "Ended"
// db.movies.find({ status: "Ended" }, { name: 1, status: 1 });

// ?find movies whose rating is 9
// db.movies.find({ "rating.average": 9 });

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
// });

// db.movies.find({ "rating.average": { $gt: 7, $lt: 9 } });

// ?find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" });

// ?find movies whose status is Running
// db.movies.find({ status: "Running" });

//? find movies whose status is Ended and runtime is 60
// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });

// db.movies.find({ status: "Ended", runtime: 60 });
// ?find movies whose weight is 75 and network country is Canada

// db.movies.find({ weight: 75, "network.country.name": "Canada" });

// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });

// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } });

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
// db.movies.find({
//   $or: [
//     { "rating.average": 6 },
//     { "rating.average": 6.5 },
//     { "rating.average": 9 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 8.6 },
//     { "rating.average": 7.7 },
//     { "rating.average": 6.1 },
//     { "rating.average": 7.8 },
//   ],
// });

// ? $in
// db.movies.find({
//   "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 3.1, 7.8] },
// });

// ? find movies whose rating average is neither 6 nor 6.5 nor
// ?9 nor 8 nor 8.5 nor 8.6 nor 7.7 nor 6.1 nor 7.8
// db.movies.find({
//   $nor: [
//     { "rating.average": 6 },
//     { "rating.average": 6.5 },
//     { "rating.average": 9 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 8.6 },
//     { "rating.average": 7.7 },
//     { "rating.average": 6.1 },
//     { "rating.average": 7.8 },
//   ],
// });

// ? $nin
// db.movies.find({
//   "rating.average": { $nin: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 3.1, 7.8] },
// });

// ?find movies whose genre includes Action and Crime
//! db.movies.find({ genres: "Action", genres: "Crime" });

// db.movies.find({ $and: [{ genres: "Action" }, { genres: "Crime" }] });

// db.movies.find({ genres: { $all: ["Action", "Crime"] } });

// ? find movies whose genres size is 2

// db.movies.find({ genres: { $size:2 } });

// ? find movies whose genres size is  not 2
// db.movies.find({ genres: { $size: { $ne: 2 } } });

// db.movies.find({ genres: { $not: { $size: 2 } } });

// ? find movies whose language is not English
// db.movies.find({ language: { $ne: "English" } });

// ? find movies whose summary includes "Pacific"
// db.movies.find({ summary: { $regex: "Pacific", $options: "i" } });

// ? find students whose hobby is neither Swimming nor Dancing
// db.students.find({ $nor: [{ hobbies: "Swimming" }, { hobbies: "Dancing" }] });

// ?find students whose hobby is both Gaming and Singing
// db.students.find({ hobbies: { $all: ["Gaming", "Singing"] } });

// ?find students who have three hobbies
// db.students.find({ hobbies: { $size: 3 } });

// ?find students whose math score is greater than 50
// db.students.find({
//   scores: { $elemMatch: { sub: "Math", point: { $gt: 50 } } },
// });

// ?find students whose score in any subject is greater than 70
// db.students.find({ "scores.point": { $gt: 70 } });

// ? find students whose primary id is "656070d2b16daaa31169a51b"
// db.students.find({ _id: ObjectId("656070d2b16daaa31169a51b") });
