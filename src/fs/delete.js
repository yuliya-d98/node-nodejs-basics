import {unlink} from 'node:fs/promises';
import {fileURLToPath} from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filepath = path.resolve(__dirname, './files/fileToRemove.txt')
    try {
        await unlink(filepath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();