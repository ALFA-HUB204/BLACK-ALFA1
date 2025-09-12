const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~L5IySZjB#KkohBJCpo0-KtQ8a2B8vP_9_Bn_QAtxKx2pYznCTsn8'
};
