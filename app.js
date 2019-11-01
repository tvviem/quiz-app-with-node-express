const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // using environment variables

const adminRoute = require('./routes/admin.route');
const studentRoute = require('./routes/student.route');
const homeRoute = require('./routes/home.route');

const app = express();

const PORT = process.env.PORT || 3000;
//const NODE_ENV = process.env.NODE_ENV || "development"

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); // for own css, js, img 

app.use('/', homeRoute);
app.use('/students', studentRoute);
app.use('/admin', adminRoute);

app.listen(PORT, () => console.log(`Server listening on port ${PORT} `));