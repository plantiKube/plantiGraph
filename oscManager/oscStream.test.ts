import * as osc from "osc";
import { sendMessage } from "./oscStream";

describe('driveOutputString', function () {
    it('streams OSC', function(done) { // add the `done` callback here

        // Create an osc udpPort.
        let udpPort = new osc.UDPPort({
            localAddress: "0.0.0.0",
            localPort: 57121,
            remoteAddress: "127.0.0.1", // replace with your OSC server's IP
            remotePort: 3030 // replace with your OSC server's port
        });

        udpPort.on("ready", function () {
            let intervalId = setInterval(function() {
                let currentTimeInMilliseconds = Date.now();
                let floatTime = (currentTimeInMilliseconds % 1000) / 1000;
                console.log(floatTime);
                sendMessage(floatTime);

                // Add condition to end the test
                if (false) {
                    clearInterval(intervalId);
                    udpPort.close();
                    done(); // signal Jest that we're done testing
                }
            }, 20); // send every 200 milliseconds
        });

        udpPort.open();
    });
});
