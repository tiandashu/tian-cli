const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const { downurl } = require('./config')

function down(...args) {
  const spinner = ora('正在从远程下载模板...');
  spinner.start();
  console.log(chalk.red(args))
  // 从git拉取模板下载到本地
  // download(repository, destination, options, callback)
  download(downurl, `.tmp/${tplName}`, (err) => {
    
    if(err) {
      spinner.fail();
      console.log(chalk.red(err))

    } else {
      spinner.succeed();
      console.log(chalk.green('模板下载成功！！！'))

    }
  })
}

module.exports = down