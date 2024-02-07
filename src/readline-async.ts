import readline from 'node:readline';
import { stdin } from 'node:process';


// Credit for code: https://gist.github.com/mauroao/6511c31170e34b8761d71a091ceebe7d
const readLineAsync = () : Promise<string> => {
    const rl = readline.createInterface({
        input: stdin
    });
    return new Promise((resolve) => {
        rl.prompt();
        rl.on('line', (line: string) => {
            rl.close();
            resolve(line);
        });
    });
};


export default readLineAsync;