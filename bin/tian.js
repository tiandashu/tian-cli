#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const inquirer = require('inquirer');

const pkg = require('../package.json');

program
  .version(`tian-cli ${pkg.version}`, '-v, --version', 'new version message')
  .usage('<command> [options]')

program
  .command('init <my-project>')
  .alias('i')
  .description('创建一个新的项目')
  .action((name, cmd) => {

    // require('../lib/create')(name, options)
  })

program
  .command('add [moduleName]')
  .description('创建一个新的模块')
  .option('--sass', '启用sass')
  .option('--less', '启用less')
  .action(option => {
      console.log('Hello World')
      //为什么是Hello World 给你个眼神，自己去体会...
  })
  //自定义帮助信息
  .on('--help', function() {
    console.log('  Examples:')
    console.log('')
    console.log('$ app module moduleName')
    console.log('$ app m moduleName')
})

program.parse(process.argv);