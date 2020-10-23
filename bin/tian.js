#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()
const chalk = require('chalk')

const pkg = require('../package.json')
const init = require('../lib/init')
const { docurl } = require('../lib/config')

// 定义版本和参数选项
program.version(
	`tian-cli ${pkg.version}`,
	'-v, --version',
	'new version message'
)
// 自定义全局option
// .option('-t, --test', 'test option 描述', 'test option 默认值')
// .usage('<command> [options]')

program
	.command('init <my-project>')
	.alias('i')
	.description('创建一个新的项目')
	.action((name, cmd) => {
		console.log(chalk.green(`详细文档请查阅：${docurl}`))
		init(name, cmd)
	})

program
	.command('add [moduleName]')
	.alias('a')
	.description('创建一个新的模块')
	.option('--sass', '启用sass')
	.option('--less', '启用less')
	.action((option, cmd) => {
		console.log('Hello World', option, cmd.sass)
		//为什么是Hello World 给你个眼神，自己去体会...
	})
//自定义帮助信某个指令的help信息
// .on('--help', function () {
// 	console.log('  Examples:')
// 	console.log('')
// 	console.log('$ app module moduleName')
// 	console.log('$ app m moduleName')
// })

program.on('--help', () => {
	console.log('')
	console.log('Examples:')
	console.log('$ tian init|i projectName')
	console.log('$ tian add|a moduleName')
	console.log('')
})

program.command('*').action(function (env) {
	console.log('deploying "%s"', env)
})


program.parse(process.argv)

// 监听全局的test option
// 但是和command冲突
// if (program.test) {
// 	console.log('test something')
// }
