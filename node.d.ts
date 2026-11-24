declare namespace NodeJS {
  export interface Process {
    stdout: {
      write: (...args: any[]) => any;
    };
  }
}
declare var process: NodeJS.Process;
