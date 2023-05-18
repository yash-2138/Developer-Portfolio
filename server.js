require('dotenv').config()
const express = require('express');
const app = express();

const sequelize = require('./server/database/connection')
sequelize.sync().then(()=>{
    console.log("DB is Ready");
});



// const bodyParser = require('body-parser');




app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));


//adding middlewares
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,auth');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  // Pass to next layer of middleware
  next();
});

app.use('/', require('./server/routes/router'))
// app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
