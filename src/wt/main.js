import os from 'node:os';

const performCalculations = async () => {
    console.log(os.cpus().length)
    // Write your code here
};

await performCalculations();