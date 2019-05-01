


// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
   
    // The variables cols and vals are arrays.
    createOne: function (cols, vals, cb) {
        try {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    } catch (e) {
        console.log(e);
    }
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    }

};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;



