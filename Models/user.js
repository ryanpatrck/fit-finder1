const mongoose = require("mongoose");
'use strict';
var Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

const UserSchema = new Schema({
  name: { type: String },
  age:  {type: Number }, 
  weight: {type: Number },
  height: {type: String },
 
});


var user = mongoose.model("user", UserSchema);

module.exports = user;
