var mongo   = require('./mongo'); //connect to mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

var TeamSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

var Team = mongoose.model('Team', TeamSchema);

var EmployeeSchema = new Schema({
  name : {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true

    },
    team: {
      type: Schema.Types.ObjectId,
      ref: 'Team'
    }
  }
});

var Employee = mongoose.model('Employee', EmployeeSchema);

mongoose.connect('mongodb://localhost:27017/newdb', function(err) {
  if (err) {
    console.log('no connection!')

  }

  console.log('connected!')

  var team = Team.create([{ name: 'hr'}, { name: 'deeveloper'}], function() {


    if (arguments[0]) {
      console.log('err',  arguments[0]);
    } else {

      for (var k in  arguments){
        if (!arguments[k]) {
          delete arguments[k];
        }
      }

      console.log('success!',  arguments);
      insertEmployees(arguments);
    }

  });

});


function insertEmployees (arg, cb) {
  var arr = []
  for (var k in  arg){
    arr.push({
      name: {
        first: 'bla',
        last: 'bla',
        team: arg[k]._id
      }
    })
  };
  console.log('arr', arr)

  Employee.create(arr, function() {

    if (arguments[0]) {
      console.log('err',  arguments[0]);
    } else {

      for (var k in  arguments){
        if (!arguments[k]) {
          delete arguments[k];
        }
      }
      console.log('success!',  arguments);


    }


  })



}
/*

mongo.db.then(function(db) {
});

*/
