// 自动安装项目依赖
const chalk = require('chalk')
const spawn = require('cross-spawn')

function install(resolvePath) {
  const args = ['install', '--save', '--save-exact', '--loglevel', 'error']
  const child = spawn(command, args, {
    resolvePath,
    stdio: ['pipe', process.stdout, process.stderr],
  })

  child.once('close', (code) => {
    console.log(chalk.green(code))
  })

  child.once('error', err => {
    console.log(chalk.red(err))
  })
}

module.exports = install