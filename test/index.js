"use strict";

var assert = require("node:assert");
var { describe, it } = require("node:test");

var stdout = require("../");

describe("mute", function () {
  it("mutes the stream", function (t) {
    const spy = t.mock.method(process.stdout, "write", () => {});

    stdout.mute();

    console.log("should not print");

    stdout.unmute();

    assert.deepStrictEqual(spy.mock.callCount(), 0);
  });
});

describe("unmute", function () {
  it("unmutes a muted stream", function (t) {
    const spy = t.mock.method(process.stdout, "write", () => {});

    stdout.mute();

    console.log("should not print");

    assert.deepStrictEqual(spy.mock.callCount(), 0);

    stdout.unmute();

    console.log("should print");

    assert.ok(spy.mock.callCount() > 0);
    assert.deepStrictEqual(spy.mock.callCount(), 1);
  });

  it("skips unmute if never muted", function (t) {
    const spy = t.mock.method(process.stdout, "write", () => {});

    console.log("should count up!");

    stdout.unmute();

    console.log("should count up!");

    assert.ok(spy.mock.callCount() > 0);
    assert.deepStrictEqual(spy.mock.callCount(), 2);
  });

  it("captures the current write and preserves it", function () {
    const fakeWrite = () => {};

    process.stdout.write = fakeWrite;

    stdout.mute();

    stdout.unmute();

    assert.strictEqual(process.stdout.write, fakeWrite);
  });

  it("captures the current write and preserves it when muted twice", function () {
    const originalWrite = process.stdout.write;

    stdout.mute();


    stdout.mute();

    stdout.unmute();

    assert.strictEqual(process.stdout.write, originalWrite);
  });
});
