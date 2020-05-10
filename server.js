 //font: https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
// Import express
const express = require('express');
// Import Body parser
const bodyParser = require('body-parser');
// Import Mongoose
const mongoose = require('mongoose');
//import local variables
require('dotenv').config({path:'variables.env'})
// Initialize the app
const app = express();
// Configure bodyparser to handle post requests
// Import routes
const apiRoutes = require("./api-rest");
  //place body parser before CRUD handles
app.use(bodyParser.urlencoded({extended:true}))
	//read JSON Data 
  app.use(bodyParser.json())

//server setup
const uri = 'mongodb+srv://'+process.env.DB_HOST;
console.info('uri '+uri);
const options = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

mongoose.connect(uri, options).then(
    client=>{

        var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


    // Send message for default URL
    app.get('/', (req, res) => res.send('Service Ecommerce'));

    // Use Api routes in the App
    app.use('/api', apiRoutes);
    //the browser must to listen the server connection
    var host=process.env.HOST|| '0.0.0.0';
    var port=process.env.PORT||9090;

	app.listen(port,host, function(){
        console.log('listening in 9090 port')
        })

    }
).catch(err=>console.error(err))



    