import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    createReadStream('files/fileToRead.txt').pipe(stdout);

    // const readableStream = createReadStream('files/fileToRead.txt', 'utf-8');
    // readableStream.on('data', (chunk) => {
    //     stdout.write(chunk);
    // });
};

await read();