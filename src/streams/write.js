import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    const writeStream = createWriteStream('files/fileToWrite.txt');

    stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    })
};

await write();