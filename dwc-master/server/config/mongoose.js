"use strict";
var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs");
var models_path = path.join(__dirname,"./../models");
mongoose.connect("mongodb://admin:password@ds155428.mlab.com:55428/dwc");
//mongodb://localhost/dwc


fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf(".js")>=0){
		require(models_path+"/"+file);
	}
});
