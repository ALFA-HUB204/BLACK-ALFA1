const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~6xAE1biB#uAQvvl5cm8ObqfJSPU4OBrFPlGGQiF4wRiSFM1iEvYU'
};
