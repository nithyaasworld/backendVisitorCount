const http = require("http");
const fs = require("fs");
let visitedCount = 0;
const server = http.createServer((req, res) => {
    if(req.url !== '/favicon.ico'){
        visitedCount++;
        fs.readFile("index.html", 'utf8', (err, fileResponse) => {
          if (err) {
            console.log(err);
          } else {
            let result = fileResponse.replace(`Website Visited: 0 times`, `Website Visited: ${visitedCount} times`);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(result);
          }
          res.end();
        });
    }
});
server.listen(8080, () => console.log("Server started on port 8080...."));
