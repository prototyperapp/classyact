#!/usr/bin/env node
var sh = require("shelljs");
var fs = require("fs");
const COMMAND_ARG_INDEX = 2;
const CURRENT_DIR_ARGUMENT = 1;

var currentDir = sh.pwd();

var returnHelp = function() {
  console.log("To use, type classyact CLASSNAME");
};

var createClass = function(currentDir, className) {
  var extension = ".js";
  var actualClassName = className;

  if (className.indexOf(".") > 0) {
    extension = "." + className.substr(className.indexOf(".") + 1);
    actualClassName = className.substr(0, className.indexOf("."));
  }

  var fileContents = "import React, { Component } from 'react';\n";
  fileContents += "import {\n\tStyleSheet,\n\tText,\n\tView\n} from 'react-native';";
  fileContents += "\n\nexport default class " + actualClassName + " extends Component {\n";
  fileContents += "\trender() {\n\n\t}\n}";
  fileContents += "\n\nconst localStyles = StyleSheet.create({\n\n});"

  fs.writeFile(currentDir + "/" + actualClassName + extension, fileContents, "utf8", function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Created " + currentDir + "/" + process.argv[COMMAND_ARG_INDEX]);
    }
  });
};

var main = function() {
  if (process.argv.length < 3) {
    returnHelp();
    return;
  }

  var command = process.argv[COMMAND_ARG_INDEX];
  var currentDir = sh.pwd();
  createClass(currentDir, process.argv[COMMAND_ARG_INDEX]);

};

main();
