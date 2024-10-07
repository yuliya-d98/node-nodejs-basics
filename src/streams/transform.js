import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    // https://blog.logrocket.com/working-node-js-streams/#transform-streams
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });

    stdin.pipe(transformStream).pipe(stdout);
};

await transform();