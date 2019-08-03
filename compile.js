const path = require('path');
const fs = require('fs');
const solc = require('solc');

//Get the path to the file Inbox.sol
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
//Now to read in the contents of that file.
const source = fs.readFileSync(lotteryPath, 'utf8');

module.exports = solc.compile(source, '1').contracts[':Lottery'];
