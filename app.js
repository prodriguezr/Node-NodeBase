const multiply = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

//console.log('argv:', argv);

multiply.createFile(
    argv.base
    , argv.to
    , argv.list
    , argv.directory
    , argv.filename
    )
 .then(filename => console.log(`File "${filename}" successfully created`))
 .catch(err => console.log(err));
