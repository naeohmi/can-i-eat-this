<<<<<<< HEAD
const config = require('../config.js');

// The axios get comes here
function history(req, res, next) {
  // return all the records from the database using pg-promise method any , then
  config.db.any('SELECT information.id , products.product , information.result FROM information LEFT JOIN products ON products.barcode = information.barcode ;')
    .then(function(data) {
      console.log('DATA:', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'All history were retrieved '
        });
    })
    .catch(function(err) {
      return next(err);
    });
}
// The axios get : id comes here
=======
// import pg promise library interface for PostgreSQL to handel database requests
let pgp = require('pg-promise')();
// load the postgress database location from  .env
let connString = process.env.DATABASE_URL
// connect  db promise to my database
let db = pgp(connString);

// get all one user issues
>>>>>>> 7586ced03c71fe755024f737d4d029dbfe721f65
function getuserpref(req, res, next) {
  // parse the requested url to get the required userid using pg-promise method one , then
  let userid = parseInt(req.params.userid);
    db.one('select * from allergies where userid = $1', userid)
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'One user issues was retrieved'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

<<<<<<< HEAD
function allusers(req, res, next) {
  // parse the requested url to get the required tweed id using pg-promise method one , then
    config.db.many('select * from allergies')
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'all users preference was retrieved'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

/*
http://localhost:3000/api/allergies
{
  "userid" : 123456,
    "eggsallergy": true,
    "fishallergy": false,
    "milkallergy": true,
    "peanutsallergy": false,
    "sesameallergy": false,
    "shellfishallergy": false,
    "soyallergy": false,
    "treenutsallergy": false,
    "wheatallergy": false
  }
);*/

=======
// add new user with new issues to the database
>>>>>>> 7586ced03c71fe755024f737d4d029dbfe721f65
function adduserpref(req, res, next) {
  console.log(req);
  console.log('req.body ===>', req.body)
   db.none('insert into allergies (userid ,eggsallergy , fishallergy , milkallergy, peanutsallergy, sesameallergy, shellfishallergy , soyallergy , treenutsallergy,wheatallergy)' +
      'values(${userid} , ${eggsallergy} , ${fishallergy} , ${milkallergy},${peanutsallergy},${sesameallergy} ,${shellfishallergy},${soyallergy},${treenutsallergy},${wheatallergy}  )',
      req.body)
    .then(function() {
      res.status(200)
        .json({
          status: 'success',
          message: 'One user was added'
        });
    })
    .catch(function(err) {
      console.log("This user already exist in the database");
      return next(err);
    });
}

// change one user issue
function editpref(req, res, next) {
  console.log(req);
  db.none('update allergies set eggsallergy=$1, fishallergy=$2, milkallergy=$3, peanutsallergy=$4, sesameallergy=$5 ,shellfishallergy=$6 , soyallergy=$7,  treenutsallergy=$8 , wheatallergy=$9  where userid=$10', [req.body.eggsallergy, req.body.fishallergy, req.body.milkallergy, req.body.peanutsallergy, req.body.sesameallergy, req.body.shellfishallergy, req.body.soyallergy, req.body.treenutsallergy, req.body.wheatallergy , req.params.userid
    ])
    .then(function() {
      res.status(200)
        .json({
          status: 'success',
          message: ' user issues list was Updated'
        });
    })
    .catch(function(err) {
      console.log(err)
      return next(err);
    });
}
<<<<<<< HEAD

function allusers(req, res, next) {
  // parse the requested url to get the required tweed id using pg-promise method one , then
    db.many('select * from allergies')
    .then(function(data) {

function addnewproduct(req, res, next) {
  console.log(req);
  console.log('req.body ===>', req.body)
   config.db.none('insert into products (barcode ,product)' +
      'values(${barcode} , ${product} )',
      req.body)
    .then(function() {
=======
// get all users with there issues in the database
// show me what I have in user table
function allusers(req, res, next) {
    db.many('select * from allergies')
    .then(function(data) {
>>>>>>> 7586ced03c71fe755024f737d4d029dbfe721f65
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'all users preference was retrieved'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

// insert a product with the result of comparing the ingred to the user issues
function addproduct(req, res, next) {
  console.log(req);
  console.log('req.body ===>', req.body)
<<<<<<< HEAD
//   db.none('insert into information (userid ,barcode, product, eggs , fish, milk, peanuts, sesame, shellfish , soy , treenuts, wheat ,result)' +
  //    'values(${userid} ,${barcode}, ${product}, ${eggs} , ${fish} , ${milk},${peanuts},${sesame} ,${shellfish},${soy},${treenuts},${wheat},${result}  )',
   config.db.none('insert into information (userid ,barcode, eggs , fish, milk, peanuts, sesame, shellfish , soy , treenuts, wheat ,result)' +
      'values(${userid} ,${barcode}, ${eggs} , ${fish} , ${milk},${peanuts},${sesame} ,${shellfish},${soy},${treenuts},${wheat},${result}  )',
=======
   db.none('insert into information (userid ,barcode, product, eggs , fish, milk, peanuts, sesame, shellfish , soy , treenuts, wheat ,result)' +
      'values(${userid} ,${barcode}, ${product}, ${eggs} , ${fish} , ${milk},${peanuts},${sesame} ,${shellfish},${soy},${treenuts},${wheat},${result}  )',
>>>>>>> 7586ced03c71fe755024f737d4d029dbfe721f65
      req.body)
    .then(function() {
      res.status(200)
        .json({
          status: 'success',
          message: 'One product comparison result was added'
        });
    })
    .catch(function(err) {
      console.log("You have error in adding comparison result");
      return next(err);
    });
}


// get all the products scanned by a certain user
function userhistory(req, res, next) {
  let userid = parseInt(req.params.userid);
  db.any('SELECT information.id , information.product , information.result FROM information where userid = $1', userid)
    .then(function(data) {
      console.log('DATA:', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'user history were retrieved '
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

<<<<<<< HEAD
=======
// show me what I have in information table
>>>>>>> 7586ced03c71fe755024f737d4d029dbfe721f65
function information(req, res, next) {
  // return all the records from the database using pg-promise method any , then
  db.any('SELECT * FROM information ;')
    .then(function(data) {
      console.log('DATA:', data);
<<<<<<< HEAD
    "eggsallergy": false,
    "fishallergy": true,
    "milkallergy": true,
    "peanutsallergy": true,
    "sesameallergy": true,
    "shellfishallergy": true,
    "soyallergy": true,
    "treenutsallergy": true,
    "wheatallergy": true
  }
*/
function editpref(req, res, next) {
  console.log(req);
  config.db.none('update allergies set eggsallergy=$1, fishallergy=$2, milkallergy=$3, peanutsallergy=$4, sesameallergy=$5 ,shellfishallergy=$6 , soyallergy=$7,  treenutsallergy=$8 , wheatallergy=$9  where userid=$10', [req.body.eggsallergy, req.body.fishallergy, req.body.milkallergy, req.body.peanutsallergy, req.body.sesameallergy, req.body.shellfishallergy, req.body.soyallergy, req.body.treenutsallergy, req.body.wheatallergy , req.params.userid
    ])
    .then(function() {
=======
>>>>>>> 7586ced03c71fe755024f737d4d029dbfe721f65
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'All information table were retrieved '
        });
    })
    .catch(function(err) {
      return next(err);
    });
}
// delete certain product from the database
function deleteproduct(req, res, next) {
  let id = parseInt(req.params.id);
  db.result('delete from information where id = $1', id)
    .then(function(result) {
      res.status(200)
        .json({
          status: 'success',
          message: ` ${result.rowCount} product was removed`
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

<<<<<<< HEAD
/*
http://localhost:3000/api/allergies
{
  "userid" : 123456,
    "eggsallergy": true,
    "fishallergy": false,
    "milkallergy": true,
    "peanutsallergy": false,
    "sesameallergy": false,
    "shellfishallergy": false,
    "soyallergy": false,
    "treenutsallergy": false,
    "wheatallergy": false
  }
);*/

// change the information inside the database
/*
http://localhost:3000/api/allergies/123456
 put
  {

    "eggsallergy": false,
    "fishallergy": true,
    "milkallergy": true,
    "peanutsallergy": true,
    "sesameallergy": true,
    "shellfishallergy": true,
    "soyallergy": true,
    "treenutsallergy": true,
    "wheatallergy": true
  }
*/

=======
>>>>>>> 7586ced03c71fe755024f737d4d029dbfe721f65
//CRUD
module.exports = {
  getuserpref  : getuserpref,    //read:userid
  adduserpref  : adduserpref,    //add
  editpref     : editpref,       //edit
  allusers     : allusers,       //read

  addproduct   : addproduct,      //add
  userhistory  : userhistory,     //read:userid
  information  : information,     //read
  deleteproduct: deleteproduct,   //DELETE
<<<<<<< HEAD

 // getaproduct  : getaproduct,    
};
=======
 // getaproduct  : getaproduct,    
<<<<<<< HEAD:node/api/db/queries.js
};
=======
};
>>>>>>> 45f5723c645f4e16a3e13a28c34bdb766535263e:node/db/queries.js
>>>>>>> 7586ced03c71fe755024f737d4d029dbfe721f65
