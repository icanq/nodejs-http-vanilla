// import module http dari builtin module node.js
const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request, "<<< request")
  console.log(response, "<<< response")

  // bikin rute untuk url "/" dengan method "GET"
  if (request.url === "/") {
    response.write("sesuatu");
    // kalau tidak memberikan response.end, maka setiap request yang terjadi tidak akan berhenti di server, karena di server tidak memberitahu kapan untuk berhenti. Kalaupun request berhenti, itu karena RTO Request TimeOut
    // ibaratnya kaya di kacangin
    response.end()
  }

  // bikin rute untuk url "/me" dengan method "GET"
  if (request.url === "/me" && request.method === "GET") {
    response.end("<h1 style='color: red;'>ini adalah halaman me</h1>")
  }

  if (request.url === "/nabi" && request.method === "GET") {
    response.end("Nabi")
  }
})

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server sedang berjalan pada url dan port http://localhost:${PORT}`)
})