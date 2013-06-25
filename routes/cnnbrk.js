
/*
 * GET CNN Tweets.
 */

var http = require('http')
  , util = require('util');

exports.index = function(req, res){
  res.render('cnnbrk', { title: 'CNNBrk Tweets' });
};