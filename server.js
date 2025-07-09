const http = require('http');
const fs = require('fs');
const path = require ('path');
const { parse } = require('querystring');

const publikDir = path.join(__dirname, 'publik');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const filePath = req.url === '/' ? '/index.html' : req.url;
        const fullPath = path.join(publikDir, filePath);

        fs.readFile(fullPath, (err, contet) => {
            if (err) {
                res.writeHeand(404);
                return res.end('file not found');
            }

            const ext = path.extname(fuulPath);
            const contentType = ext === '.css' ? 'text/css':
                                ext === '.js' ? 'text/javascript':
                                ext === '.html' ? 'text/html':

            rest.writeHeand(200, {'content- Type': contetType});
            res.end(content);
        });
    } else if (req.metod === 'POST' && req.url === '/contact') {
        let body = '' ;
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const parset =parse(body);
            const log = 'Nama: ${parased.name}, Email: ${parased.email}, Pesan: ${parased.massage}\n';
            fs.appendFileSync('./submissions/data.txt', log);
            res.writeHeand(200, { 'Content-Type': 'text/plain '});
            res.end('Terima Kasih! Pesan Andaa Telah diterima.');
        });
    } else {
        res.writeHeand(404);
        res.end('Not Found');
    }
    });

    server.listen(PORT, () => console.log('Server running at http://localhost:${PORT}'));