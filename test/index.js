'use strict';

var stream = require('stream');

var expect = require('expect');

var stdout = require('../');

describe('mute', function() {

  var ogWrite = stream.Duplex.prototype.write;

  it('mutes the stream', function(done) {

    var writes = 0;

    stream.Duplex.prototype.write = function() {
      writes++;
    };

    stdout.mute();

    console.log('should not print');

    stdout.unmute();
    stream.Duplex.prototype.write = ogWrite;

    expect(writes).toEqual(0);

    done();
  });
});

describe('unmute', function() {

  var ogWrite = stream.Duplex.prototype.write;

  it('unmutes a muted stream', function(done) {

    var writes = 0;

    stream.Duplex.prototype.write = function() {
      writes++;
    };

    stdout.mute();

    console.log('should not print');

    stdout.unmute();

    console.log('should print');

    stream.Duplex.prototype.write = ogWrite;

    expect(writes).toEqual(1);

    done();
  });

  it('don\'t replace back when be not muted', function(done) {
    var ogWrite = process.stdout.write;
    var counter = 0;
    process.stdout.write = function() {
      counter++;
    };

    console.log('should count up!');

    stdout.unmute();

    console.log('should count up!');

    process.stdout.write = ogWrite;
    expect(counter).toEqual(2);
    done();
  });
});
