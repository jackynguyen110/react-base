#! /usr/bin/env node

'use strict';
require('babel-core/register');

const consoleHelper = require('./console-helper');
const logo = require('./logo');
const methods = require('./methods');
const baseConsole = require('./console-helper');
const test = require('./test');
const build = require('./build');
const start = require('./start');

const index = (method, param1) => {

  baseConsole.clear();

  logo();

  method = method ? method : methods.START;

  switch (method.toLowerCase()) {
    case methods.GENERATE:
      break;
    case methods.REGENERATE:
      break;
    case methods.LINT:
      break;
    case methods.BUILD:
      if (param1) {
        if (param1) {
          console.log(consoleHelper.line(`[BASE] Building project using ${param1.toUpperCase()} environment`));
          process.env['NODE_ENV'] = param1;
        }
      } else {
        process.env['NODE_ENV'] = 'production';
      }
      build();
      break;
    case methods.TEST:
      test();
      break;
    case methods.START:
      if (param1) {
        if (param1) {
          console.log(consoleHelper.line(`[BASE] Starting development server using ${param1.toUpperCase()} environment`));
          process.env['NODE_ENV'] = param1;
        }
      } else {
        process.env['NODE_ENV'] = 'development';
      }
      start();
      break;
    default:
  }
};

let args = process.argv.slice(2);
require.main === module ? index(...args) : module.exports = build;