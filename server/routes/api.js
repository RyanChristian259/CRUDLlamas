var express = require('express');
var router = express.Router();
var Llama = require('../models/llamas.js');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//Get all llamas
router.get('/llamas', function(req, res, next){
Llama.find({}, function(err, data){
  if(err){
      res.json({'message': err});
  } else{
    res.json(data);
  }
 });
});

//Post llama
router.post('/llamas', function(req, res, next){
  newLlama = new Llama({
    name:req.body.name,
    age:req.body.age,
    spitter:req.body.spitter
  });
  newLlama.save(function(err, data){
      if(err){
        res.json({'message': err});
      } else {
        res.json(data);
      }
  });
});

//Get one Llama
router.get('/llama/:id', function(req, res, next){
  Llama.findById(req.params.id, function( err, data){
      if(err){
    res.json({'message': err});
   } else {
     res.json(data);
   }
  });
});

//Edit one llama
router.put('/llama/:id', function(req, res, next){
  var options = {new:true};
   Llama.findByIdAndUpdate(req.params.id, req.body, options, function(err, data){
    if(err){
    res.json({'message': err});
   } else {
     res.json(data);
   }
 });
});



//Delete on llama
router.delete('/llama/:id', function(req, res, next){
  Llama.findByIdAndRemove(req.params.id, function(err, data){
       if(err){
    res.json({'message': err});
   } else {
     res.json(data);
   }
  });
});




module.exports = router;
