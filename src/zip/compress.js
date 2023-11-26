import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { promisify } from 'node:util';

// https://nodejs.org/api/zlib.html#zlib
const pipe = promisify(pipeline);
const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream('files/fileToCompress.txt');
    const destination = createWriteStream('files/archive.gz');
    await pipe(source, gzip, destination);
};

await compress();