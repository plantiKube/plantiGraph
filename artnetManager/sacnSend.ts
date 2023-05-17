const { Sender } = require('sacn');

const sACNServer = new Sender({
    universe: 1,
    iface: "eth0", // optional, will default to the first interface if omitted
    // see table 3 below for all options
});

async function main() {
    await sACNServer.send({
        payload: { // required. object with the percentages for each DMX channel
            1: 100,
            2: 50,
            3: 0,
        },
        sourceName: "My NodeJS app", // optional. LED lights will use this as the name of the source lighting console.
        priority: 100, // optional. value between 0-200, in case there are other consoles broadcasting to the same universe
    });

    sACNServer.close(); // terminate the server when your app is about to exit.
}

main(); // wrapped in a main() function so that we can `await` the promise
