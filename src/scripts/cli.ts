import arg from 'arg';
import { Options } from '../typings';
import { ARGUMENTS, ALIAS } from '../utils/constants';

function parseArgumentsIntoOptions(rawArgs: string[]): Options {
    const args = arg({
        [ARGUMENTS.GIT]: Boolean,
        [ARGUMENTS.YES]: Boolean,
        [ARGUMENTS.INSTALL]: Boolean,
        [ALIAS.GIT]: ARGUMENTS.GIT,
        [ALIAS.YES]: ARGUMENTS.YES,
        [ALIAS.INSTALL]: ARGUMENTS.INSTALL
    },{
        argv: rawArgs.slice(2)
    });
    
    return {
        git: args[ARGUMENTS.GIT] || false,
        skipPrompts: args[ARGUMENTS.YES] || false,
        runInstall: args[ARGUMENTS.INSTALL] || false,
        template: args._[0],
        targetDir: process.cwd()
    };
}

export async function cli(args: string[]) {
    let options = parseArgumentsIntoOptions(args);
}