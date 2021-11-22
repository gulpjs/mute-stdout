'use strict';

var expect = require('expect');
var sinon = require('sinon');

// The spy needs to be set up before our module tracks the original method
var spy = sinon.spy(process.stdout, 'write');

var stdout = require('../');

describe('mute', function () {
  beforeEach(function (done) {
    spy.resetHistory();

    done();
  });

  afterEach(function (done) {
    spy.resetHistory();

    done();
  });

  it('mutes the stream', function (done) {
    stdout.mute();

    console.log('should not print');

    stdout.unmute();

    expect(spy.called).toBeFalsy();

    done();
  });
});

describe('unmute', function () {
  beforeEach(function (done) {
    spy.resetHistory();

    done();
  });

  afterEach(function (done) {
    spy.resetHistory();

    done();
  });

  it('unmutes a muted stream', function (done) {
    stdout.mute();

    console.log('should not print');

    stdout.unmute();

    console.log('should print');

    expect(spy.called).toBeTruthy();
    expect(spy.callCount).toEqual(1);

    done();
  });

  it('skips unmute if never muted', function (done) {
    console.log('should count up!');

    stdout.unmute();

    console.log('should count up!');

    expect(spy.called).toBeTruthy();
    expect(spy.callCount).toEqual(2);
    done();
  });
});
