const inquirer = require('inquirer')
const chalk = require('chalk')
const download = require('./download')

function init(projectName, cmd) {
	inquirer
		.prompt([
			{
				type: 'list',
				message: '请选择一个项目模板:',
				name: 'tplName',
				choices: ['rich-project', 'simple-project', 'ts-project'],
				filter: function (val) {
					// 使用filter将回答变为小写
					return val.toLowerCase()
				},
			},
		])
		.then((answers) => {
			// Use user feedback for... whatever!!
      download({
				projectName,
				cmd,
				answers
			})
		})
		.catch((error) => {
			if (error.isTtyError) {
				// Prompt couldn't be rendered in the current environment
				console.error(chalk.red(error))
			} else {
				// Something else when wrong
				console.error(chalk.red(error))
			}
			process.exit(1)
		})
}

module.exports = init
