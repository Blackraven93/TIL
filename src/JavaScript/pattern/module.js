"use strict";

const log = console.log;

const modulePattern = {
  key: "data",
  publicMethod: function () {
    return this.key;
  },
};

log(modulePattern.key);
log(modulePattern.publicMethod());
