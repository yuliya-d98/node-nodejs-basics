import { spawn } from 'node:child_process';
import { stdin, stdout } from 'node:process';
import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const filepath = path.resolve(__dirname, './files/script.js');
    const child = spawn('node', [filepath, ...args]);

    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['someArgument1', 'someArgument2']);
