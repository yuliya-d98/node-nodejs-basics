import { access, appendFile } from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.resolve(__dirname, "./files/fresh.txt");
    try {
        await access(filePath);
        // file exists
        throw new Error('FS operation failed');
    } catch(error) {
        // no access to file
        if (error.code === 'ENOENT') {
            await appendFile(filePath, "I am fresh and young")
        } else {
            throw error;
        }
    }
};

await create();