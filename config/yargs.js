const fs = require('fs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'Base number for multiplier table',
        type: 'number',
    })
    .option('d', {
        alias: 'directory',
        demandOption: false,
        default: 'output',
        describe: 'Directory where the output file will be stored',
        type: 'string',
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Print the multiplication table on the console',
    })
    .option('f', {
        alias: 'filename',
        type: 'string',
        demandOption: false,
        default: 'MultiplicationTable_[base].txt',
        describe: 'Name of the output file',
    })
    .option('t', {
        alias: 'to',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Number limit',
    })
    .check((argv, options) => {
        if (isNaN(argv.base))
            throw 'The base parameter has to be a number';

        if (isNaN(argv.to))
            throw 'The to parameter has to be a number';

        if (!fs.existsSync(argv.directory))
            throw 'The directory not exists';

        return true;
    })
    .argv;

module.exports = argv;