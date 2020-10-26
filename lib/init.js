const inquirer = require('inquirer')
const chalk = require('chalk')
const download = require('./download')

// 初始化项目
function init() {
	inquirer
		.prompt([
			{
				type: 'input',
				message: '请输入项目名:',
				name: 'projectName',
				default: 'vue-admin',
			},
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
      download(answers)
		})
		.catch((error) => {
			if (error.isTtyError) {
				console.error(chalk.red(error))
			} else {
				console.error(chalk.red(error))
			}
			process.exit(1)
		})
}

module.exports = init
