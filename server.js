require('dotenv').config()
var express = require("express");
var mongoose = require("mongoose");

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}
);

mongoose.set('useCreateIndex', true)
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})
console.log(":thumbsUp:")
