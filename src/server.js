const http = require("http");
const host = "localhost";
const port = 8000;
const requestListener = function (req, res) {
  const url = new URL(req.url, `http://localhost:${port}`);

  if (url.pathname === "/") {
    console.log(url);
    res.writeHead(200);
    res.end("ok");
  }

  if (url.pathname === "/user") {
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");

    const datos = {
      name: name || null,
      email: email || null,
    };
    const jsonRespuesta = JSON.stringify(datos);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(jsonRespuesta);}
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log("esta escuchando");
});
module.exports = server;
