require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
// middleware
app.use(cors({
    //adding the ability to use credentials with cookies
    credentials:true,
    origin: '*'
}));//means we can access the other things that store in cokkies with token , exipery date etc...
app.use(express.json());


// configure the server to accept and update the cookies
app.use(cookieParser());

// mongoDB initialization
require("./config/db.config");

//importing user routes
require('./routes/user.routes')(app);

// add favorites routes
const favoritesRoutes = require('./routes/favorites.routes');
app.use('/api/favorites', favoritesRoutes);

const PORT = 8000;

app.listen(PORT, function () {
    console.log(`The server has started on PORT: ${PORT}`)
});
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});