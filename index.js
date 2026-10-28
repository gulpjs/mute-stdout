"use strict";

var ogWrite = undefined;

var muteStdout = { mute: mute, unmute: unmute };

function noop() {}

function mute() {
  if (ogWrite !== undefined) {
    return;
  }
  ogWrite = process.stdout.write;
  process.stdout.write = noop;
}

function unmute() {
  if (ogWrite === undefined) {
    return;
  }
  process.stdout.write = ogWrite;
  ogWrite = undefined;
}

module.exports = muteStdout;
