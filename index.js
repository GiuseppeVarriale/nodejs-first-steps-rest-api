const http = require("http");
let server = http.createServer((req, res) => {
  console.log("URL", req.url);
  console.log("METHOD", req.method);

  switch (req.url) {
    case "/":
      res, (statusCode = 200);
      res.setHeader("Content-type", "text/html");
      res.end("<h1>Olá</h1>");

      break;
    

    case "/users":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          users: [{ 
            name: "teste", 
            email: "contato@teste.comw", 
            id: 1 }],
        })
      );
  }
});

server.listen(3000, () => {
  console.log("servidor rodando!");
  
});
