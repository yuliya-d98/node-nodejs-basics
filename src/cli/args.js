import {argv} from 'node:process';
const parseArgs = () => {
    // cli input:
    // node args --propName value --prop2Name value2
    // expected output:
    // propName is value, prop2Name is value2
    const argumentsSeparated = argv.slice(2);
    let argumentsCombined = [];
    for (let i = 0; i < argumentsSeparated.length; i = i + 2) {
        if (argumentsSeparated[i + 1]) {
            argumentsCombined.push(`${argumentsSeparated[i].slice(2)} is ${argumentsSeparated[i + 1]}`)
        }
    }
    const result = argumentsCombined.join(', ')
    console.log(result)
};

parseArgs();