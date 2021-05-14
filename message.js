// Fantasy Astrology Horoscope Generator
// Author: Colin Sexton

const os = require('os'); // Fun little import to target username on the device to "try" and personalize the program with minimal input
const generate = require('./horoscope.js'); // Import the horoscope module (generate function from horoscope object)

// Prompt user for input w/ welcome message
console.log(`Greetings, ${os.userInfo().username}!`);
console.log(`Your horoscope is: ${generate()}.`);
