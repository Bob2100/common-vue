const Utils = require('./utils');
const server = require('./server');

async function deploy() {
  const conn = await Utils.getSSHConnection();
  const res = await conn._exec(`rm -r ${server.path}/${server.projectName}/*`);
  if (!res.success) {
    return;
  }

  const scpClient = Utils.getScpClient();
  const scpRes = await scpClient._scp('../dist');
  if(!scpRes.success){
    return;
  }

  await conn._exec(`cd ${server.path} && zip -r ${server.projectName}.zip ${server.projectName} && mv ${server.path}/${server.projectName}.zip ${server.packageFolder}/${server.projectName}.zip`);

  conn.end();
}

deploy();
