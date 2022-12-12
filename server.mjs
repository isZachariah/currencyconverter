import fs from 'fs';
import path from 'path';
import express, {query} from 'express';
import { listen } from 'listhen';
import next from 'next'
import sirv from 'sirv';
import {fileURLToPath, parse} from "url";
import helmet from 'helmet';


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 8080

const app = next({ dev, hostname, port })

const server = express()

server.use(helmet())

server.use("/", express.static(path.join(__dirname, ".next/server"), {
    immutable: true,
    maxAge: '86000'
}));

const handle = app.getRequestHandler()

app.prepare().then(() => {
    server.get("*", async (req, res, next) => {
        const url = req.originalUrl
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        let template, render;

        try {
            if (pathname === '/') {
                await app.render(req, res, '/', query)
            } else if (pathname === '/currency') {
                await app.render(req, res, '/currency', query)
            } else {
                await handle(req, res, parsedUrl)
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html").end(html)
        } catch (error) {
            console.error('Error occurred handling', req.url, error)
            res.statusCode = 500
            res.end('internal server error')
            next(error)
        }
    });

})

server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
})





export {}