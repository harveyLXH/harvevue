#!/usr/bin/env node

const { program } = require("commander");

const helpOptions = require("./lib/core/help");
const createCommands = require("./lib/core/create");

// 查看版本号
program.version(require("./package.json").version);

// 帮助和可选信息
helpOptions();

// 创建其它指令
createCommands();

program.parse(process.argv); // 拿到需要的命令行参数

// const option = program.opts();
// console.log(option.dest);
