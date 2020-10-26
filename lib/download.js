const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const config = require('./config')
const shellFn = require('./shell')
const path = require('path')
const cwd = process.cwd()
const resolveFile = dir => path.join(cwd, dir)

// 下载项目模板
function down(answers) {
  const spinner = ora('正在从远程下载模板...');
  spinner.start();

  // 从git拉取模板下载到本地
  // download(repository, destination, options, callback)
  download(config[answers.tplName], resolveFile(answers.projectName), (err) => {
    
    if(err) {
      spinner.fail();
      console.log(chalk.red(err))

    } else {
      spinner.succeed();
      console.log(chalk.green('模板下载成功！！！'))
      // shellFn(resolveFile(answers.projectName))
      console.log('')
      console.log(chalk.green(`cd ${answers.projectName}`))
      console.log(chalk.green(`npm run serve`))
      console.log('')
    }
  })
}

module.exports = down