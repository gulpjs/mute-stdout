/** @type ((...args: any[]) => any )| undefined */
var ogWrite = undefined;

function noop() {}

/**
 * Mutes the `process.stdout` stream by replacing the `write` method
 * with a no-op function.
 */
export function mute() {
  if (typeof ogWrite === "undefined") {
    ogWrite = process.stdout.write;
    process.stdout.write = noop;
  }
}

/**
 * Unmute the `process.stdout` stream by restoring the original `write` method.
 */
export function unmute() {
  if (typeof ogWrite !== "undefined") {
    process.stdout.write = ogWrite;
    ogWrite = undefined;
  }
}
