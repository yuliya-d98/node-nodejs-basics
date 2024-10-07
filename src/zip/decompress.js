import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { promisify } from 'node:util';
import {fileURLToPath} from "node:url";
import path from "node:path";

const pipe = promisify(pipeline);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const unzip = createUnzip();

    const srcPath = path.resolve(__dirname, './files/archive.gz');
    const source = createReadStream(srcPath);

    const destPath = path.resolve(__dirname, './files/fileToCompress.txt');
    const destination = createWriteStream(destPath);

    await pipe(source, unzip, destination);
};

await decompress();