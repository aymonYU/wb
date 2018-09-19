#!/usr/bin/env node

const chalk = require("chalk");
const semver = require("semver");
const nodeVesion = require("../package.json").engines.node;
if (!semver.satisfies(process.version, nodeVesion)) {
  console.log(
    chalk.red(`
    Your node version is ${process.version},
    under the require vesion of ${nodeVesion},
    please update your node!
  `)
  );
  process.exit(1);
}
require("../index");
