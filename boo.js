'use strict';

var path = require('path');
var ioc = require(path.resolve('lib/registry'));

ioc.register({
    name: 'StrictCake',
    signature: 'foobar',
    primary: true,
    chanined: false
});

ioc.showRegistry();

ioc.loadComponents('plugins', function() {
    ioc.showRegistry();
});

