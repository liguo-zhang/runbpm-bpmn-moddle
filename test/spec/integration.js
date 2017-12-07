'use strict';

var BpmnModdle = require('bpmn-moddle');

var runbpmDescriptor = require('../../resources/runbpm');


describe('exports', function() {

  it('should extend bpmn-moddle', function() {

    // given
    var moddle = new BpmnModdle({
      runbpm: runbpmDescriptor
    });

    // when
    var serviceTask = moddle.create('bpmn:ExtensionElements');

    // then
    expect(serviceTask.$instanceOf('runbpm:RunBPMExtensionElements')).to.be.true;
  });

});