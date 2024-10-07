import os from 'node:os';
import { Worker } from 'node:worker_threads';
import {fileURLToPath} from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const cores = os.cpus().length;
    const results = [];

    for (let i = 0; i < cores; i++) {
        const filepath = path.resolve(__dirname, './worker.js');
        const worker = new Worker(filepath, { workerData: i + 10 });

        const logResults = () => {
            if (results.length === cores) {
                console.log(results);
            }
        }

        worker.on('message', (result) => {
            results[i] = { status: 'resolved', data: result };
            logResults();
        });

        worker.on('error', (error) => {
            results[i] = { status: 'error', data: null };
            logResults();
        });
    }
};

await performCalculations();