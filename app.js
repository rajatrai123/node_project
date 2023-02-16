/* 
const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Rajat.')

fs.appendFileSync('notes.txt', ' I live in India'); */
/* const validator = require('validator')
const nm = require('./notes.js');


const name = 'Rajat';

const msg = nm()
console.log(msg);

console.log(validator.isEmail('adasjkd@ksdcom'));

~
 */


const chalk = require('chalk');
const yargs = require('yargs');

console.log(chalk.blue.inverse.bold('Success...!'));

console.log(process.argv)
console.log(yargs.argv)


