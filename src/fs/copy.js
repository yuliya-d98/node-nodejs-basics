import { access, cp } from 'node:fs/promises';

const copy = async () => {
    const srcPath = 'files';
    const destPath = 'files_copy';
    
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
