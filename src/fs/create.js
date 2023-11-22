import { access, appendFile, constants } from 'node:fs/promises';
const create = async () => {
    const filePath = "files/fresh.txt";
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