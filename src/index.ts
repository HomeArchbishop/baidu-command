#!/usr/bin/env node
/*
 * @Author: 拆家大主教 
 * @Date: 2021-09-29 11:45:39 
 * @Last Modified by: 拆家大主教
 * @Last Modified time: 2021-09-29 15:22:35
 */

const util = require('util');
const shell = require('shelljs');
const { program } = require('commander');

program
    .version(require('../package.json').version)
    .parse();

const baseUrl: string = "https://baidu.com/s?ie=utf-8&wd=%s";
const keyWord: string = encodeURI(program.args.join(' ') || '你的搜索字段为空');
const url: string = util.format(baseUrl, keyWord);

shell.exec(`open '${url}'`);