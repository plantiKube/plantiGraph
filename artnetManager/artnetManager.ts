// @ts-ignore
import { ArtNetController } from 'artnet-protocol/dist';
// @ts-ignore
import { ArtDmx } from 'artnet-protocol/dist/protocol';

const controller = new ArtNetController();
controller.bind('0.0.0.0');
// The controller is now listening and responding to discovery traffic

// Send DMX data (Sequence 0, Physical input port 0, Universe 0.
controller.sendBroadcastPacket(new ArtDmx(0, 0, 0,
    [0, 0, 255, 255, 2]
));

// while (true) {
//     let currentMillis = +new Date();
//     let value = (currentMillis%1000)/4
//     console.log(value);
//
// }


// Or if you want to receive DMX data
// controller.on('dmx', (dmx) => {
//     // dmx contains an ArtDmx object
//     console.log(dmx.universe, dmx.data);
// });
