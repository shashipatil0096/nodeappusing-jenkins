const http = require("http");

const server = http.createServer((req, res) => {
  res.write("CI/CD welcome diguuu to port no 3000");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
