const { exec } = require("child_process");
const root = process.cwd();

const handler = (req, res) => {
  if (req.method === "GET") {
    exec("npm run build", { cwd: root }, error => {
      if (error) {
        res.statusCode = 500;
        res.end(error);
      }
      else {
        // Should restart the server
        res.statusCode = 200;
        res.end("ok");
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
};

export default handler;
