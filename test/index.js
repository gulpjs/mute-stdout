'use strict';

var expect = require('expect');

// The spy needs to be set up before our module tracks the original method
var spy = expect.spyOn(process.stdout, 'write').andCallThrough();

var stdout = require('../');

describe('mute', function() {

  beforeEach(function(done) {
    spy.reset();

    done();
  });

  afterEach(function(done) {
    spy.reset();

    done();
  });

  it('mutes the stream', function(done) {

    stdout.mute();

    console.log('should not print');

    stdout.unmute();

    expect(spy).toNotHaveBeenCalled();

    done();
  });
});

describe('unmute', function() {

  beforeEach(function(done) {
    spy.reset();

    done();
  });

  afterEach(function(done) {
    spy.reset();

    done();
  });

  it('unmutes a muted stream', function(done) {

    stdout.mute();

    console.log('should not print');

    stdout.unmute();

    console.log('should print');

    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);

    done();
  });

  it('skips unmute if never muted', function(done) {

    console.log('should count up!');

    stdout.unmute();

    console.log('should count up!');

    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(2);
    done();
  });
});
