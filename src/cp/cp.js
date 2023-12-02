import { spawn } from 'node:child_process';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['files/script.js', ...args]);

    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['someArgument1', 'someArgument2']);
