use("badminton");

let page = 1;
let limit = 5;

// db.movies.find().count();

// $skip, $limit
db.movies.aggregate([
  {
    $match: {},
  },
  //   {
  //     $sort: {
  //       "rating.average": -1,
  //     },
  //   },
  {
    $skip: (page - 1) * limit,
  },
  {
    $limit: limit,
  },
  {
    $project: {
      name: 1,
      id: 1,
      url: 1,
      _id: 0,
      rating: "$rating.average",
    },
  },
]);
