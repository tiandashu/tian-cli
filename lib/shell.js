var shell = require("shelljs");

function shellFn(resolvePath) {
  shell.exec(
    `
    cd ${resolvePath}
    npm i
  `,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`${stdout}`);
      console.log(`${stderr}`);
    }
  );
}

module.exports = shellFn;
