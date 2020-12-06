/* TypeScript file generated from File.res by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const FileBS = require('./File.bs');

export const add: (a:number, b:number) => number = function (Arg1: any, Arg2: any) {
  const result = Curry._2(FileBS.add, Arg1, Arg2);
  return result
};
