import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

// https://nodejs.org/api/crypto.html#class-hash
const calculateHash = async () => {
    const file = await readFile('files/fileToCalculateHashFor.txt', { encoding: 'utf8' });

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