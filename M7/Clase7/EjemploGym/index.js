const http = require("http");
const url = require("url");
const { insertar, consultar, editar, eliminar } = require("./consultas");
const fs = require("fs");

http.createServer(async (req, res) => {
    if (req.url == "/" && req.method === "GET") {
        res.setHeader("content-type", "text/html");
        const html = fs.readFileSync("index.html", "utf8");
        res.end(html);
    }

    if ((req.url == "/ejercicios" && req.method == "POST")) {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", async () => {
            // Paso 2
            const datos = Object.values(JSON.parse(body));
            // Paso 3
            const respuesta = await insertar(datos);
            // Paso 4
            res.end(JSON.stringify(respuesta));
        });
    }
    if (req.url == "/ejercicios" && req.method === "GET") {
        // Paso 2
        const registros = await consultar();
        // Paso 3
        res.end(JSON.stringify(registros));
    }
    if (req.url == "/ejercicios" && req.method == "PUT") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", async () => {
            const datos = Object.values(JSON.parse(body));
            // Paso 2
            const respuesta = await editar(datos);
            res.end(JSON.stringify(respuesta));
        });
    }
    if (req.url.startsWith("/ejercicios?") && req.method == "DELETE") {
        // Paso 3
        const { nombre } = url.parse(req.url, true).query;
        // Paso 4
        const respuesta = await eliminar(nombre);
        res.end(JSON.stringify(respuesta));
    }
}).listen(3000, () => {
    console.log("Ejecutando");
});