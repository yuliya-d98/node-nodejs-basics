import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { promisify } from 'node:util';
import {fileURLToPath} from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://nodejs.org/api/zlib.html#zlib
const pipe = promisify(pipeline);
const compress = async () => {
    const gzip = createGzip();

    const srcPath = path.resolve(__dirname, './files/fileToCompress.txt');
    const source = createReadStream(srcPath);

    const destPath = path.resolve(__dirname, './files/archive.gz');
    const destination = createWriteStream(destPath);

    await pipe(source, gzip, destination);
};

await compress();