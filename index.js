"use strict";

var ogWrite = undefined;

var muteStdout = { mute: mute, unmute: unmute };

function noop() {}

function mute() {
  if (typeof ogWrite === "undefined") {
    ogWrite = process.stdout.write;
    process.stdout.write = noop;
  }
}

function unmute() {
  if (typeof ogWrite !== "undefined") {
    process.stdout.write = ogWrite;
    ogWrite = undefined;
  }
}

module.exports = muteStdout;
