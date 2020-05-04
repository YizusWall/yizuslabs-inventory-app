 //font: https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-rest");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//db nsql connection

const url = 'mongodb+srv://priyankumar:H3br30s1782!@yizuslabs-dc-jupiter-9ajdw.mongodb.net/inventory?retryWrites=true&w=majority'
// Connect to Mongoose and set connection variable
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

    //express request handlers
    //place body parser before CRUD handles
    app.use(bodyParser.urlencoded({extended:true}))
	//read JSON Data 
    app.use(bodyParser.json())
    // Send message for default URL
    app.get('/', (req, res) => res.send('Service Ecommerce'));

    // Use Api routes in the App
    app.use('/api', apiRoutes);
    //the browser must to listen the server connection
	app.listen(9090, function(){
        console.log('listening in 9090 port')
        })