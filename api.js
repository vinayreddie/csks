var Db = require('./dboperation');
var Customer = require('./customers');
const dboperation = require('./dboperation');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
 })

 router.route('/donation').get((request,response)=>{
     console.log("api called");
})

router.route('/logincheck').post((request,response)=>{
   let body = {...request.body}
    console.log(body.username);
    console.log(body.password);
    console.log('apiLoginCheck');
    dboperation.loginRequest(body.username,body.password).then(result =>{
        response.status(201).json(result);
    })
})

router.route('/changepassword').post((request,response)=>{
    let body = {...request.body}
     console.log(body.username);
     console.log(body.password);
    console.log('changepassword');
     dboperation.changePassword(body.username,body.password).then(result =>{
         response.status(201).json(result);
     })
 })

 router.route('/donorSignup').post((request,response)=>{
    let body = {...request.body}
     dboperation.registerDonor(body).then(result =>{
         response.status(201).json(result);
     })
 })

 router.route('/getAllReciever').post((request,response)=>{
     dboperation.getAllReciever().then(result =>{
         response.status(201).json(result);
     })
 })

 router.route('/getLastLogin').post((request,response)=>{
    let body = {...request.body}
    dboperation.getLastlogin(body.username).then(result =>{
        response.status(201).json(result);
    })
})


var port = process.env.PORT || 8013;
app.listen(port);
console.log('API is running at ' + 'http://localhost:' + port + '/api/');
