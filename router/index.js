var express = require('express');
const fs = require('fs');
var router = express.Router();
const data = require('./data.json');


//xem chi tiet mot nhan vien
router.get('/:employeeId', function(req, res){
    var curemployee = data.filter(function(data){
       if(data.employeeId == req.params.employeeId){
          return true;
       }
    });
    if(curemployee.length == 1){
       res.json(curemployee[0])
      
    } else {
       res.status(404);//Set status to 404 as movie was not found
       res.json({message: "Not Found"});
    }
 });

//xem danh sach tat ca nhan vien
router.get('/', function(req, res){
   res.json(data);
});

//them nhan vien
router.post('/', function (req, res) {
   var newId = data[data.length-1].employeeId+1;
      data.push({
         employeeId: newId,
         employeeName: req.body.employeeName,
         sex: req.body.sex,
         salary: req.body.salary
      });
      res.json(data);
     // res.json({message: "New movie created.", location: "/ProductService/addProduct/" + newId});
   });
   
  //xoa mot nhan vien 
   router.delete('/:employeeId', function(req, res){
      var removeIndex = data.map(function(index){
         return index.employeeId;
      }).indexOf(req.params.employeeId); //Gets us the index of movie with given id.
      
      // if(removeIndex === -1){
         // res.json({message: "Not found"});
      // } else {
         data.splice(removeIndex, 1);
         res.send({message: "Employee id " + req.params.employeeId + " removed."});
      }
   );

module.exports = router;







































































































































































