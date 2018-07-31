/**
 * To get started install
 * express bodyparser jsonwebtoken express-jwt
 * via npm
 * command :-
 * npm install express bodyparser jsonwebtoken express-jwt --save
 */

// Bringing all the dependencies in
    const express = require('express'),
          routes = require('./Routes/index')
          cookieParser = require('cookie-parser'),
          bcrypt = require('bcryptjs'),
          bodyParser = require('body-parser'),
          jwt = require('jsonwebtoken'),
          exjwt = require('express-jwt'),
          mongoose = require("mongoose");
var OpenTok = require('opentok');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactuserslist");
// const seeds = require("./Scripts/seeduserDB");

// var apiKey = process.env.API_KEY;
// var apiSecret= process.env.API_SECRET;
// var opentok = new OpenTok(apiKey, apiSecret);
    
    
// Instantiating the express app
const app = express();
// Cors is required for access
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS")
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With');
  
    next();
});




// Setting up bodyParser to use json and set it to req.body

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// MOCKING DB just for test
let users = [
    {
        id: 1,
        username: 'test',
        password: 'asdf123'
    },
    {
        id: 2,
        username: 'test2',
        password: 'asdf12345'
    }
];
//
// LOGIN ROUTE
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    //do this
    console.log("This is our request:", req.body);
   
    // Use your DB ORM logic here to find user and compare password
    for (let user of users) { // I am using a simple array users which i made above
        if (username == user.username && password == user.password /* Use your password hash checking logic here !*/) {
            //If all credentials are correct do this
            let token = jwt.sign({ id: user.id, username: user.username }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Sigining the token
            res.json({
                sucess: true,
                err: null,
                token
             });
          
            break;
        }
        else {
           
            res.status(401).json({
                sucess: false,
                token: null,
                err: 'Username or password is incorrect'
            });
            
        }
    }
});




// Add routes, both API and view
app.use(routes);
// Starting the app on PORT 3000
const PORT = process.env.PORT || 3001

app.listen(PORT, function () {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
});

