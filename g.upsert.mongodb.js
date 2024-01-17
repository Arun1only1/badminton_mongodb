use("badminton");

// db.laptops.insertOne({
//   name: "GT75",
//   brand: "MSI",
//   ram: 16,
//   ssd: 512,
// });

db.laptops.find();

// ? upsert => update or insert

// db.laptops.updateOne(
//   { name: "GF63" },
//   {
//     $set: {
//       brand: "MSI",
//       ram: 8,
//       ssd: 256,
//     },
//   },
//   {
//     upsert: true,
//   }
// );

// db.laptops.updateOne(
//   {
//     name: "F15",
//   },
//   {
//     $set: {
//       brand: "asus",
//       ram: 16,
//       ssd: 512,
//     },
//   },
//   {
//     upsert: true,
//   }
// );
