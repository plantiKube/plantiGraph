import * as osc from "osc";

// Create an osc udpPort.
let udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 57121,
    remoteAddress: "127.0.0.1", // replace with your OSC server's IP
    remotePort: 3030 // replace with your OSC server's port
});

udpPort.on("ready", function () {
    setInterval(function() {
        let currentTimeInMilliseconds = Date.now();
        let floatTime = (currentTimeInMilliseconds%1000)/1000
        console.log(floatTime);
        sendMessage((currentTimeInMilliseconds%1000)/1000);
    }, 20); // send every 200 milliseconds
});

udpPort.open();

export function sendMessage(value: number) {
    var msg = {
        address: "/lx/mixer/master/fader",
        args: [value]
    };

    udpPort.send(msg);
}
