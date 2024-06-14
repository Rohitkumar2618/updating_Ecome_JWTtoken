// const express = require("express");
// const app = express();

// require("dotenv").config();
// const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.json({ message: "Hello, world!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // connect mongodb
// const URI = process.env.MONGODB_URL;
// mongoose
//   .connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const express = require("express");
const mongoose = require("mongoose"); // Import mongoose
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
const URI = process.env.MONGODB_URL;

// Remove deprecated options (Mongoose >= 6.0)
mongoose
  .connect(URI, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err); // Use console.error for errors
  });
