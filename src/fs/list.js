import { readdir } from 'node:fs/promises';
import {fileURLToPath} from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    try {
        const dirpath = path.resolve(__dirname, './files');
        const files = await readdir(dirpath);
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();