import { sep, dirname } from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { pathToFileURL, fileURLToPath } from 'node:url';
import './files/c.js';

const random = Math.random();

let unknownObject;

// https://nodejs.org/api/esm.html#import-attributes
if (random > 0.5) {
    unknownObject = await import('./files/a.json', { with: { type: 'json' } });
} else {
    unknownObject = await import('./files/b.json', { with: { type: 'json' } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

// https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

console.log(`Path to current file is ${pathToFileURL(filename).href}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };

