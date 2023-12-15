const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db is connected succesfuly guyss"))
  .catch((err) => {
    console.log(err);
  }); 
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running guys");
});
