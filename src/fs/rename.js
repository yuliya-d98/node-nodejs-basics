import {rename as nodeRename, access} from 'node:fs/promises';
const rename = async () => {
    const wrongFilename = 'files/wrongFilename.txt';
    const properFilename = 'files/properFilename.md';

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