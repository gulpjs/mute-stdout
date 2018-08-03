'use strict';

var stream = require('stream');

var lab = exports.lab = require('lab').script();
var code = require('code');

var stdout = require('../');

lab.describe('mute', function(){

  var ogWrite = stream.Duplex.prototype.write;

  lab.it('mutes the stream', function(done){

    var writes = 0;

    stream.Duplex.prototype.write = function(){
      writes++;
    };

    stdout.mute();

    console.log('should not print');

    stdout.unmute();
    stream.Duplex.prototype.write = ogWrite;

    code.expect(writes).to.equal(0);

    done();
  });
});

lab.describe('unmute', function(){

  var ogWrite = stream.Duplex.prototype.write;

  lab.it('unmutes a muted stream', function(done){

    var writes = 0;

    stream.Duplex.prototype.write = function(){
      writes++;
    };

    stdout.mute();

    console.log('should not print');

    stdout.unmute();

    console.log('should print');

    stream.Duplex.prototype.write = ogWrite;

    code.expect(writes).to.equal(1);

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
