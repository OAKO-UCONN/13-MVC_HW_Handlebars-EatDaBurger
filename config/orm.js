// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      array.push(`${key} = ${value}`);
    }
  return arr.toString();
  }
}

//|||||||||||||||||||||||||||||||||||||||||||| ORM START ||||||||||||||||||||||||||||||||||||||||||||||||||

var orm = {
  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ READ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//++++++++++++++++++++++++++++++++++++++++++++ CREATE +++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ UPDATE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  //Update Function
  update: function (table, objColVals, condition, cb) {
    let updatequeryString = `UPDATE ${table}`+  ` SET `+objToSql(objColVals)+` WHERE `+ condition ;
    console.log(updatequeryString);
    connection.query(updatequeryString, (err, result) => {
      if (err) {
        throw err;
      }
      cbo(result);
    });  
  },

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//---------------------------------------------- DELETE --------------------------------------------------------

  //Delete Function
  delete: function (table, condition, cbo) {
    let DeletequeryString = "DELETE FROM " + table + " WHERE "+ condition;
    connection.query(DeletequeryString, function(err, result) {
      if (err) {
        throw err;
      }
      cbo(result);
    });
  }

//--------------------------------------------------------------------------------------------------------

}

//|||||||||||||||||||||||||||||||||||||||||||||| ORM END ||||||||||||||||||||||||||||||||||||||||||||||||||


module.exports = orm;
