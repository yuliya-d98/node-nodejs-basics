import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import {fileURLToPath} from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://nodejs.org/api/crypto.html#class-hash
const calculateHash = async () => {
    const filepath = path.resolve(__dirname, './files/fileToCalculateHashFor.txt')
    const file = await readFile(filepath, { encoding: 'utf8' });

    const hash = createHash('sha256');
    hash.on('readable', () => {
        const data = hash.read();
        if (data) {
            console.log(data.toString('hex'));
        }
    });

    hash.write(file);
    hash.end();
};

await calculateHash();