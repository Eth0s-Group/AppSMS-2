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
 * @param {TN4NJS.Message} msg 
 */
async function handleCMD(msg) {
    msg
}