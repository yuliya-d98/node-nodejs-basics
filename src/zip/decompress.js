import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { promisify } from 'node:util';

const pipe = promisify(pipeline);
const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream('files/archive.gz');
    const destination = createWriteStream('files/fileToCompress.txt');
    await pipe(source, unzip, destination);
};

await decompress();