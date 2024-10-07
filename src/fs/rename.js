import {rename as nodeRename, access} from 'node:fs/promises';
import {fileURLToPath} from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const wrongFilename = path.resolve(__dirname, "./files/wrongFilename.txt");
    const properFilename = path.resolve(__dirname, "./files/properFilename.txt");

    try {
        await access(properFilename);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await nodeRename(wrongFilename, properFilename);
        } else {
            throw error;
        }
    }
};

await rename();