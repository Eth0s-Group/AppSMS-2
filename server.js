/* Summary of build:
 * 1. Create standardized class for interacting with users
        (Improves scalability)
        - Replying
        - Waiting for a reply
        - On message
 * 2. Create standard module class
        - Common trigger function
        - Common "on reply" function for handling followups
        - Common method for signaling that a module is waiting for a response
 */
const TN4NJS = require("./TN4NJS/TNAPI");
const TNcli = new TN4NJS();
const { username, sid, csrf, owmtoken } = require("./credentials.json");
const weather = require('openweather-apis');

async function main() {
    TNcli.on("message", handleCMD);
    TNcli.delete_on_send = true;
    await TNcli.init(username, sid, csrf);
}

/**
 * Handle incoming messages.
 * @param {TN4NJS.Message} msg Incoming message.
 */
async function handleCMD(msg) {
    
}