// Setup empty JS object to act as endpoint for all routes


//**********************
//install nodemon to fast repair the server without close and open it once anything change in code
// script (start) contains the path on server 
//************************************************ 



//express used to make local server instead of global server
let Express = require ('express');
//cors is the tool that help local server  to connect with browser
let cors = require ('cors');
//body-parser used to mange data get in or out from server
let bodyParser = require ('body-parser');


/*
//express used to make local server instead of global server
import Express from "express";
//body-parser used to mange data get in or out from server
import bodyParser from "body-parser";
//cors is the tool that help local server  to connect with browser
import cors from "cors";**/

// object to store data
projectData = {};
// run local server 
let webApp = Express();
//to make server use cors in connection process
webApp.use(cors());
// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
webApp.use(bodyParser.urlencoded({ extended: false }));
webApp.use(bodyParser.json());

// Cors for cross origin allowance


// Initialize the main project folder
webApp.use(Express.static('website'));


// Setup Server

//first listen method first parameter is the port number ,second is function to check server is run and print port number
webApp.listen(3030,()=>{
    console.log('server is run');
    console.log('localhost:3030');
});

//**********************
//install nodemon to fast repair the server without close and open it once anything change in code
// script (start) contains the path on server 
//************************************************ 


