'use strict';

var lab = exports.lab = require('lab').script();
var code = require('code');

var stdout = require('../');

lab.describe('mute-stdout', function(){

  var ogWrite = process.stdout.write;

  lab.it('mute and unmute ', function(done){
    code.expect(process.stdout.write).to.equal(ogWrite);

    stdout.mute();
    var mutedWrite = process.stdout.write;
    stdout.unmute();

    code.expect(mutedWrite).to.not.equal(ogWrite);
    code.expect(mutedWrite.toString()).to.equal('function noop(){}');
    code.expect(process.stdout.write).to.equal(ogWrite);
    done();
  });

  lab.it('don\'t replace back when be not muted', function(done) {
    var ogWrite = process.stdout.write;
    var counter = 0;
    process.stdout.write = function() {
      counter++;
    };

    console.log('should count up!');

    stdout.unmute();

    console.log('should count up!');

    process.stdout.write = ogWrite;
    code.expect(counter).to.equal(2);
    done();
  });
});
