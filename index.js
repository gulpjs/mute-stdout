"use strict";

var muteStdout = { mute: mute, unmute: noop, ogWrite: undefined };

function noop() {}

function mute() {
  if (muteStdout.ogWrite !== undefined) {
    return;
  }
  muteStdout.ogWrite = process.stdout.write;
  muteStdout.unmute = unmute;
  process.stdout.write = noop;
}

function unmute() {
  console.log(muteStdout)
  if (muteStdout.ogWrite === undefined) {
    return;
  }
  process.stdout.write = muteStdout.ogWrite;
  muteStdout.unmute = noop;
  muteStdout.ogWrite = undefined;
}

module.exports = muteStdout;
