/* jshint node:true */
'use strict';

var path = require('path');
var ioc = require(path.resolve('lib/registry'));

ioc.register({
    name: 'Jordans',
    signature: 'tickle me',
    primary: true,
    chanined: false
});


