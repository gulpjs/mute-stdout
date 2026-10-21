"use strict";

var ogWrite = undefined;

var muteStdout = { mute: mute, unmute: noop };

function noop() {}

function mute() {
  if (ogWrite !== undefined) {
    return;
  }
  ogWrite = process.stdout.write;
  muteStdout.unmute = unmute;
  process.stdout.write = noop;
}

function unmute() {
  if (ogWrite === undefined) {
    return;
  }
  process.stdout.write = ogWrite;
  muteStdout.unmute = noop;
  ogWrite = undefined;
}

module.exports = muteStdout;
