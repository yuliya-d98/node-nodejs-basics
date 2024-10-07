import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filepath = path.resolve(__dirname,  './files/fileToWrite.txt')
    const writeStream = createWriteStream(filepath);

    stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    })
    // alternative
    // stdin.pipe(output);
};

await write();