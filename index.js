// import module http dari builtin module node.js
const http = require('http');

// fs adalah module bawaan dari node.js yang digunakan untuk membaca file, atau menulis file.
const fs = require('fs');

// untuk membuka si server biar bisa menangani sebuah request
const server = http.createServer((request, response) => {
  // kita ingin menangani setiap request yang masuk melalui endpoint atau rute "/" kita akan memberikan response berupa file html, yaitu index.html yang berada pada folder public. 

  // ketika server dibuka pada port 3000, setiap kali ada request yang menuju rute "/" maka kita akan mengirimkan file index.html yang berada pada folder public.

  if (request.url === '/' && request.method === "GET") {
    // const htmlFile = fs.readFileSync('./public/index.html', 'utf-8')
    // response.end(htmlFile)
    fs.readFile('./public/index.html', (error, data) => {
      // apabila terjadi error dalam pembacaan file maka akan kirim error
      if (error) {
        response.end('Terjadi kesalahan dalam pembacaan file html')
      } else {
        response.end(data)
      }
    })
  } else if (request.url === "/about" && request.method === "GET") {
    fs.readFile('./public/about.html', (error, data) => {
      // apabila terjadi error dalam pembacaan file maka akan kirim error
      if (error) {
        response.end('Terjadi kesalahan dalam pembacaan file html')
      } else {
        response.end(data)
      }
    })
  } else if (request.url === "/teletubbies" && request.method === "GET") {
    fs.readFile('./public/images/teletubbies.jpeg', (error, data) => {
      // apabila terjadi error dalam pembacaan file maka akan kirim error
      if (error) {
        response.end('Terjadi kesalahan dalam pembacaan file html')
      } else {
        response.end(data)
      }
    })
  } else {
    // menangani rute yang gak ada
    response.end("404 Not Found - Routes not exists")
  }
  
})
// membuka server pada PORT berapa
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server sedang berjalan pada url dan port http://localhost:${PORT}`)
})