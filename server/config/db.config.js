require("dotenv").config();
const mongoose = require("mongoose");


mongoose
  .connect('mongodb+srv://decembet317:Jatin%404471@cluster0.ewrob0g.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(() => {
      console.log(
        "Connected to database on port 8000 and database MovieDb!"
      );
  })
  .catch((err) => {
    console.log(err);
  });

