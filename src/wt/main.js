import os from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const cores = os.cpus().length;
    const results = [];

    for (let i = 0; i < cores; i++) {
        const worker = new Worker('./worker.js', { workerData: i + 10 });

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