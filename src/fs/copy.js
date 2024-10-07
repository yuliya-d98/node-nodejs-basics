import { access, cp } from 'node:fs/promises';
import {fileURLToPath} from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const srcPath = path.resolve(__dirname, "./files");
    const destPath = path.resolve(__dirname, "./files_copy");
    
    try {
        await access(srcPath);
        await cp(srcPath, destPath, {
            force: false,
            errorOnExist: true,
            recursive: true
        })
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
