/* jshint node:true */
'use strict';

var path = require('path');
var readdir = require('readdir-plus');

var _registry = {};

function register(config) {
    var moduleName = config.name;
    var moduleSig  = config.signature;

    _registry[moduleName] = {
        signature: moduleSig,
        primary: true,
        chained: false
    };
    return true;
};

function showRegistry() { console.log(_registry) }

function loadComponents(pathName, callback) {
    readdir(pathName,function(err, files) {
        if (!files) return;

        files.forEach(function(fileName) {
            if( fileName.path.match(/\.js$/) ) {
console.log("loading %s", fileName.path);
                var foo = require(path.resolve(fileName.path));
            }
        });
        callback();
    });
};

module.exports = {
    register: register,
    showRegistry: showRegistry,
    loadComponents: loadComponents
};
