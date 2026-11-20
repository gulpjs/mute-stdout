var ogWrite = undefined;

function noop() {}

export function mute() {
  if (typeof ogWrite === "undefined") {
    ogWrite = process.stdout.write;
    process.stdout.write = noop;
  }
}

export function unmute() {
  if (typeof ogWrite !== "undefined") {
    process.stdout.write = ogWrite;
    ogWrite = undefined;
  }
}

export default muteStdout;
