# runbpm-bpmn-moddle

[![Build Status](https://travis-ci.org/liguo-zhang/runbpm-bpmn-moddle.svg)](https://travis-ci.org/liguo-zhang/runbpm-bpmn-moddle)

This project defines the [RunBPM](https://runbpm.com) namespace extensions for BPMN 2.0 as a [moddle](https://github.com/bpmn-io/moddle) descriptor.


## Usage

Use it together with [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) to validate RunBPM BPMN 2.0 extensions.

```javascript
var BpmnModdle = require('bpmn-moddle');

var camundaModdle = require('runbpm-bpmn-moddle/resources/runbpm');

var moddle = new BpmnModdle({ runbpm: camundaModdle });

var serviceTask = moddle.create('bpmn:ServiceTask', {
  'javaDelegate': 'my.company.SomeDelegate'
});
```


## Building the Project

You need [grunt](http://gruntjs.com) to build the project.

To run the test suite that includes XSD schema validation you must have a Java JDK installed and properly exposed through the `JAVA_HOME` variable.

Execute the test via

```
grunt test
```

Perform a complete build of the application via

```
grunt
```


## License

Use under the terms of the [Apache Licenses 2.0](http://www.apache.org/licenses/LICENSE-2.0).
