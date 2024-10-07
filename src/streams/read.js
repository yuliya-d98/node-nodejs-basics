import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filepath = path.resolve(__dirname,  './files/fileToRead.txt')
    createReadStream(filepath).pipe(stdout);

    // const readableStream = createReadStream('files/fileToRead.txt', 'utf-8');
    // readableStream.on('data', (chunk) => {
    //     stdout.write(chunk);
    // });
};

await read();