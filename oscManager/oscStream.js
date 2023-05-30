"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var osc = require("osc");
// Create an osc udpPort.
var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121,
    remoteAddress: "127.0.0.1",
    remotePort: 3030 // replace with your OSC server's port
});
udpPort.on("ready", function () {
    setInterval(function () {
        var currentTimeInMilliseconds = Date.now();
        var floatTime = (currentTimeInMilliseconds % 1000) / 1000;
        console.log(floatTime);
        sendMessage((currentTimeInMilliseconds % 1000) / 1000);
    }, 200); // send every 200 milliseconds
});
udpPort.open();
function sendMessage(value) {
    var msg = {
        address: "/lx/mixer/master/fader",
        args: [value]
    };
    udpPort.send(msg);
}
