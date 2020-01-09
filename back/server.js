var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var cors = require('cors');


mongoose.connect('mongodb://localhost:27017/este',{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 8080;

var User     = require('./src/models/user');

var router = express.Router();           

router.use(function(req, res, next) {
    next(); 
});


router.route('/users')
.get(function(req, res) {

  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users)
  })
 })
.post(function(req,res) {
  
  var user = new User();
  params = req.body;

  user.first_name = params.first_name;
  user.last_name  = params.last_name;
  user.email = params.email,
  user.age   = params.age

  user.save(function(error) {
       if(error)
        res.send(error)

        res.json({'message':'user created !'})
  });

});
router.route('/users/:user_id')
.get(function(req,res) {
  User.findById(req.params.user_id,function(error,user) {
    if(error)
      res.send(error);
    
    res.json(user);  
  })
  
})
.put(function(req, res) {

  User.findById(req.params.user_id, function(err, user) {

      if (err)
          res.send(err);


      params = req.body;
    
      user.first_name = params.first_name;
      user.last_name  = params.last_name;
      user.email      = params.email,
      user.age        = params.age
        
      user.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'user updated!' });
      });

  });
})
.delete(function(req, res) {

  User.remove({
      _id: req.params.user_id
  },function(err, user) {
      if (err)
          res.send(err);

    User.find(function(err, users) {
      if (err)
        res.send(err);
  
      res.json({ message: 'Successfully deleted',users})
    })
  });
});


var Etudiant     = require('./src/models/etudiant');

var router = express.Router();           

router.use(function(req, res, next) {
    next(); 
});


router.route('/')
.get(function(req, res) {

  Etudiant.find(function(err, etudiants) {
    if (err)
      res.send(err);

    res.json(etudiants)
  })
 })
.post(function(req,res) {
  
  var etudiant = new Etudiant();
  params = req.body;

  etudiant.first_name = params.first_name;
  etudiant.last_name  = params.last_name;
  etudiant.email = params.email,
  etudiant.mobile   = params.mobile,
  etudiant.fixe   = params.fixe,
  etudiant.module   = params.module,
  etudiant.niveau   = params.niveau,
  etudiant.filliere   = params.filliere,
  etudiant.age   = params.age
 

  user.save(function(error) {
       if(error)
        res.send(error)

        res.json({'message':'user created !'})
  });

});
router.route('/etudiants/:etudiant_id')
.get(function(req,res) {
  Etudiant.findById(req.params.etudiant_id,function(error,user) {
    if(error)
      res.send(error);
    
    res.json(etudiant);  
  })
  
})
.put(function(req, res) {

  Etudiant.findById(req.params.etudiant_id, function(err, etudiant) {

      if (err)
          res.send(err);


      params = req.body;
 
      etudiant.first_name = params.first_name;
      etudiant.last_name  = params.last_name;
      etudiant.email = params.email,
      etudiant.mobile   = params.mobile,
      etudiant.fixe   = params.fixe,
      etudiant.module   = params.module,
      etudiant.niveau   = params.niveau,
      etudiant.filliere   = params.filliere,
      etudiant.age   = params.age
        
      etudiant.save(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'user updated!' });
      });

  });
})
.delete(function(req, res) {

  Etudiant.remove({
      _id: req.params.etudiant_id
  },function(err, etudiant) {
      if (err)
          res.send(err);

    Etudiant.find(function(err, etudiants) {
      if (err)
        res.send(err);
  
      res.json({ message: 'Successfully deleted',etudiants})
    })
  });
});


var Etudiant     = require('./src/models/etudiant');

var router = express.Router();           

router.use(function(req, res, next) {
    next(); 
});


// router.route('/users')
// .get(function(req, res) {

//   User.find(function(err, users) {
//     if (err)
//       res.send(err);

//     res.json(users)
//   })
//  })
// .post(function(req,res) {
  
//   var user = new User();
//   params = req.body;

//   user.first_name = params.first_name;
//   user.last_name  = params.last_name;
//   user.email = params.email,
//   user.age   = params.age

//   user.save(function(error) {
//        if(error)
//         res.send(error)

//         res.json({'message':'user created !'})
//   });

// });
// router.route('/users/:user_id')
// .get(function(req,res) {
//   User.findById(req.params.user_id,function(error,user) {
//     if(error)
//       res.send(error);
    
//     res.json(user);  
//   })
  
// })
// .put(function(req, res) {

//   User.findById(req.params.user_id, function(err, user) {

//       if (err)
//           res.send(err);


//       params = req.body;
    
//       user.first_name = params.first_name;
//       user.last_name  = params.last_name;
//       user.email      = params.email,
//       user.age        = params.age
        
//       user.save(function(err) {
//           if (err)
//               res.send(err);

//           res.json({ message: 'user updated!' });
//       });

//   });
// })
// .delete(function(req, res) {

//   User.remove({
//       _id: req.params.user_id
//   },function(err, user) {
//       if (err)
//           res.send(err);

//     User.find(function(err, users) {
//       if (err)
//         res.send(err);
  
//       res.json({ message: 'Successfully deleted',users})
//     })
//   });
// });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);