import http from "node:http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  const path = req.url.split("?")[0];

  if (req.method === "GET" && path === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Hello, 953261!</h1><p>My name is Elle (student ID 692115510)</p>");
    return;
  }

  if (req.method === "GET" && path === "/api/me") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(
      JSON.stringify({
        name: "Elle",
        studentId: "692115510",
        favouriteLanguage: "JavaScript",
      })
    );
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>404</h1><p>Page not found.</p>");
});

server.listen(PORT, () => console.log("Running at http://localhost:" + PORT));