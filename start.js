const { exec } = require("child_process");

exec("npm run start", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec test error: ${error}`);
    return;
  }
  console.log(`exec test stdout: ${stdout}`);
  console.error(`exec test stderr: ${stderr}`);
});