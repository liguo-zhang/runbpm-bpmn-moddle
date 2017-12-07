'use strict';

var fs = require('fs');


function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

module.exports.readFile = readFile;


var BpmnModdle = require('bpmn-moddle');

var runbpmDescriptor = require('../resources/runbpm');

function createModdle() {
  return new BpmnModdle({
    runbpm: runbpmDescriptor
  });
}

module.exports.createModdle = createModdle;