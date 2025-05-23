const { createServer } = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
};

function createHandler (req, res) {
    const baseDir = path.join(__dirname, '.');
  
    let url = req.url;
    let method = req.method;
  
    let ext = path.extname(url);
    let contentType = mimeTypes[ext] || 'application/octet-stream';
  
    console.log(url, method);
  
    if (((url === '/index.html') || (url === '/index')) && method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      let resEnd = fs.readFileSync("src/pages/index.html", 'utf8');
      res.end(resEnd);
      return;
    }
    try {
      if (url !== '/' && method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(fs.readFileSync(path.join(baseDir, url)));
        return;
      }
    }
    catch (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(fs.readFileSync(path.join(baseDir, 'pages/404.html')));
      return;
    }
}

module.exports = createHandler;