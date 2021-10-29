const ora = require('ora');
const server = require('./server');
const {Client} = require('ssh2');
const chalk = require('chalk');
const scpClient = require('scp2');
const path = require('path');

const connConfig = {
  host: server.host,
  port: server.port,
  username: server.username,
  password: server.password,
}

class Utils {
  static getScpClient() {
    scpClient._scp = (dir) => {
      return new Promise((resolve, reject) => {
        const spinner = ora(`正在发布到服务器${server.host} ...`);
        spinner.start();
        scpClient.scp(
          path.resolve(__dirname, dir),
          {
            path: `${server.path}/${server.projectName}`,
            ...connConfig
          },
          err => {
            spinner.stop();
            if (err) {
              reject(err);
            } else {
              const msg = `Success! 成功发布到服务器${server.host}`;
              console.log(msg);
              resolve({
                success: true,
                msg: msg
              });
            }
          }
        );
      });
    }
    return scpClient;
  }

  static getSSHConnection() {
    return new Promise((resolve, reject) => {
      const conn = new Client();
      const spinner = ora(`连接服务器${server.host} ...`);

      spinner.start();

      conn.on('ready', function () {
        spinner.stop();

        conn._exec = (shell) => {
          return new Promise((resolve, reject) => {
            conn.exec(shell, (err, stream) => {
              if (err) {
                reject(err);
                return;
              }
              stream.on('close', () => {
                resolve({
                  success: true,
                  type: 'close'
                });
              });
            });
          });
        }

        resolve(conn);
      });

      conn.on('error', function (err) {
        spinner.stop();
        console.log(chalk.red('连接失败\n'));
        reject(err);
      })

      conn.connect(connConfig);
    });
  }
}

module.exports = Utils;
