import {env} from 'node:process';
const parseEnv = () => {
    // env.RSS_name1 = 'value1';
    // env.RSS_name2 = 'value2';
    const filteredEnv = Object.entries(env).filter(([key, value]) => key.startsWith('RSS_'));
    const string = filteredEnv.map(([key, value]) => `${key}=${value}`).join('; ');
    console.log(string);
};

parseEnv();