use("badminton");

// ? aggregation
// ?powerful query tool
// ?uses pipeline
// ? popular stages
// ? $match, $sort, $limit, $skip, $project, $lookup,$group

// ?$match stage => filter
// db.movies.aggregate([
//   {
//     $match: {
//       name: "Under the Dome",
//     },
//   },

//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

// $sort => it is used for sorting
// 1=> ascending sort
// -1 => descending sort

// db.movies.aggregate([
//   {
//     $match: {},
//   },

//   {
//     $sort: {
//       "rating.average": -1,
//     },
//   },

//   {
//     $project: {
//       movieName: "$name",

//       movieRating: "$rating.average",
//     },
//   },
// ]);

// hieraracy => small to big (numbers, capital letter, small letter)
db.movies.aggregate([
  {
    $match: {
      genres: { $all: ["Action", "Thriller"] },
    },
  },

  {
    $project: {
      movieName: { $toLower: "$name" },
      genres: 1,
    },
  },

  {
    $sort: {
      movieName: 1,
    },
  },
]);
