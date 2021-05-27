const fs = require('fs');
require('colors');

const createFile = async(
    base, 
    to = 10, 
    list = false, 
    outputFolder = '', 
    fileName = '') => {
    
    try {
        let output = '';

        if (list === true) {
            console.log('======================'.green);
            console.log(`Multiplication table of ${base}`.green);
            console.log('======================'.green);
        }
        
        for(let i=1;i<=to;i++) {
            if (i <= (to-1)) {
                output += `${base} X ${i}: ${base*i}\n`;
            } else {
                output += `${base} X ${i}: ${base*i}`;
            }
        }

        const _fileName = fileName.replace('[base]', base);

        fs.writeFileSync(`${outputFolder}/${_fileName}`, output);
            
        if (list === true)
            console.log(output);

        return _fileName;
    } catch (err) {
        throw err;        
    }
}

module.exports = {
    createFile
};