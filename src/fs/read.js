import { readFile } from 'node:fs/promises';
import {fileURLToPath} from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const filepath = path.resolve(__dirname, './files/fileToRead.txt');
        const contents = await readFile(filepath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();