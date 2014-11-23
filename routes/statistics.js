"use strict";
var statTable = require('../models/statTable.js');
var produceError = require('../logic/produceError.js');
var data = require('../models/data.js');

module.exports = function(req, res, next){
  
  	statTable.find({}, function(err, doc){
	  	if(err){
			return next(produceError('serverMaintenance', 503));
		} else if(!doc){
			return next(produceError('serverMaintenance', 503));
		} else {
	    	res.render('statistics', {data: doc, pageData:{
	    		patch: data.currentPatch,
	        	appName: 'statsPage',
	        	name:'stats',
	        	title: 'League of Legends Stats by Champion Role for the Current Patch' 
	        }});
		}
 	});
};
